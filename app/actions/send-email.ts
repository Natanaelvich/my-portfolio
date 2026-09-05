"use server";

import { Resend } from "resend";
import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { headers } from "next/headers";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function fromAddress() {
  const email =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "noreply@natanaelsilvalima.dev.br";
  return `Natanael Silva Lima <${email}>`;
}

function adminEmail() {
  return process.env.RESEND_TO_EMAIL?.trim() || "taelima1997@gmail.com";
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  error?: string;
}

interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: string;
}

interface SanitizedEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Valida os dados do formulário
 */
function validateFormData(data: EmailFormData): {
  valid: boolean;
  error?: string;
} {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return {
      valid: false,
      error: "Todos os campos são obrigatórios",
    };
  }

  if (name.trim().length < 2 || name.trim().length > 100) {
    return {
      valid: false,
      error: "Nome deve ter entre 2 e 100 caracteres",
    };
  }

  if (subject.trim().length < 3 || subject.trim().length > 200) {
    return {
      valid: false,
      error: "Assunto deve ter entre 3 e 200 caracteres",
    };
  }

  if (message.trim().length < 10 || message.trim().length > 5000) {
    return {
      valid: false,
      error: "Mensagem deve ter entre 10 e 5000 caracteres",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return {
      valid: false,
      error: "Email inválido",
    };
  }

  return { valid: true };
}

/**
 * Sanitiza o conteúdo do formulário
 */
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "")
    .substring(0, 5000);
}

function buildNotificationEmail(
  data: SanitizedEmailData & { ip: string; timestamp: string }
): string {
  return `<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center; }
    .header h2 { margin: 0; font-size: 24px; }
    .content { padding: 30px; background: #f9fafb; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1e3a8a; margin-bottom: 8px; display: block; font-size: 14px; }
    .value { color: #374151; font-size: 15px; }
    .message-box { background: white; padding: 20px; border-left: 4px solid #1e3a8a; margin: 15px 0; border-radius: 4px; white-space: pre-wrap; }
    .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .meta-info { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    .meta-info div { margin-bottom: 5px; }
    a { color: #1e40af; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nova Mensagem do Portfólio</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span>
        <span class="value">${escapeHtml(data.name)}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></span>
      </div>
      <div class="field">
        <span class="label">Assunto:</span>
        <span class="value">${escapeHtml(data.subject)}</span>
      </div>
      <div class="field">
        <span class="label">Mensagem:</span>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
      <div class="meta-info">
        <div><strong>Enviado em:</strong> ${escapeHtml(data.timestamp)}</div>
        <div><strong>IP do remetente:</strong> ${escapeHtml(data.ip)}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Esta mensagem foi enviada através do formulário de contato do portfólio.</p>
    </div>
  </div>
</body>
</html>`;
}

function buildConfirmationEmail(data: SanitizedEmailData): string {
  return `<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f9fafb; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .content { padding: 40px 30px; }
    .greeting { font-size: 18px; color: #1e3a8a; margin-bottom: 20px; font-weight: 600; }
    .message { font-size: 16px; color: #374151; line-height: 1.8; margin-bottom: 25px; }
    .highlight-box { background: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; margin: 25px 0; border-radius: 4px; }
    .highlight-box p { margin: 0; color: #1e40af; font-weight: 500; }
    .footer { background: #f3f4f6; padding: 25px; text-align: center; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .footer p { margin: 5px 0; }
    .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
    .signature p { margin: 5px 0; color: #374151; }
    .signature strong { color: #1e3a8a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Mensagem Recebida!</h1>
    </div>
    <div class="content">
      <div class="greeting">Olá ${escapeHtml(data.name)},</div>
      <div class="message">
        <p>Recebemos sua mensagem através do formulário de contato do meu portfólio e gostaria de agradecer pelo seu interesse em entrar em contato.</p>
        <p>Estou revisando sua mensagem e retornarei o mais breve possível, geralmente em até 24 horas.</p>
      </div>
      <div class="highlight-box">
        <p>✓ Sua mensagem foi recebida com sucesso!</p>
      </div>
      <div class="signature">
        <p><strong>Assunto da sua mensagem:</strong></p>
        <p>${escapeHtml(data.subject)}</p>
        <p style="margin-top: 20px;"><strong>Atenciosamente,</strong></p>
        <p><strong>Natanael Silva Lima</strong></p>
        <p>Tech Lead & Desenvolvedor Fullstack</p>
      </div>
    </div>
    <div class="footer">
      <p><strong>Esta é uma mensagem automática de confirmação.</strong></p>
      <p>Por favor, não responda este email. Para entrar em contato, use o formulário em meu portfólio.</p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Server Action para enviar email via Resend
 */
export async function sendEmail(
  formData: EmailFormData
): Promise<SendEmailResult> {
  try {
    const headersList = await headers();
    const clientIP = getClientIP(headersList);

    const validation = validateFormData(formData);
    if (!validation.valid) {
      return {
        success: false,
        message: "Erro de validação",
        error: validation.error,
      };
    }

    const rateLimit = await checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime
        ? new Date(rateLimit.resetTime).toLocaleTimeString("pt-BR")
        : "em breve";
      return {
        success: false,
        message: "Limite de requisições excedido",
        error: `Muitas tentativas. Tente novamente após ${resetTime}`,
      };
    }

    if (!formData.recaptchaToken) {
      const isDevWithoutRecaptcha =
        process.env.NODE_ENV === "development" &&
        !process.env.RECAPTCHA_SECRET_KEY;

      if (!isDevWithoutRecaptcha) {
        return {
          success: false,
          message: "Erro de segurança",
          error: "Token do reCAPTCHA não fornecido",
        };
      }
    } else {
      const recaptchaResult = await verifyRecaptcha(
        formData.recaptchaToken,
        clientIP
      );

      if (!recaptchaResult.valid) {
        console.warn(
          `reCAPTCHA falhou para IP ${clientIP}:`,
          recaptchaResult.error
        );
        return {
          success: false,
          message: "Validação de segurança falhou",
          error: "Por favor, tente novamente",
        };
      }
    }

    const sanitizedData: SanitizedEmailData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    const resend = getResendClient();
    const toEmail = adminEmail();

    if (!resend) {
      console.error("RESEND_API_KEY não configurada");
      return {
        success: false,
        message: "Erro de configuração",
        error: "Serviço de email não configurado",
      };
    }

    const timestamp = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const notificationHtml = buildNotificationEmail({
      ...sanitizedData,
      ip: clientIP,
      timestamp,
    });
    const confirmationHtml = buildConfirmationEmail(sanitizedData);

    const [notificationResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: fromAddress(),
        to: toEmail,
        replyTo: sanitizedData.email,
        subject: `Nova mensagem do portfólio: ${sanitizedData.subject}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: fromAddress(),
        to: sanitizedData.email,
        subject: "Recebemos sua mensagem!",
        html: confirmationHtml,
      }),
    ]);

    if (notificationResult.error) {
      console.error("Erro ao enviar notificação:", notificationResult.error);
      return {
        success: false,
        message: "Erro ao enviar mensagem",
        error: "Não foi possível enviar a mensagem. Tente novamente mais tarde.",
      };
    }

    if (confirmationResult.error) {
      console.warn(
        "Notificação enviada, mas confirmação falhou:",
        confirmationResult.error,
      );
    }

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    };
  } catch (error) {
    console.error("Erro ao processar envio de email:", error);

    return {
      success: false,
      message: "Erro inesperado",
      error: "Ocorreu um erro ao processar sua mensagem. Tente novamente.",
    };
  }
}
