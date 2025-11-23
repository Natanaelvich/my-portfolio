"use server";

import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { headers } from "next/headers";

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

/**
 * Valida os dados do formulário
 */
function validateFormData(data: EmailFormData): {
  valid: boolean;
  error?: string;
} {
  const { name, email, subject, message } = data;

  // Validar campos obrigatórios
  if (!name || !email || !subject || !message) {
    return {
      valid: false,
      error: "Todos os campos são obrigatórios",
    };
  }

  // Validar comprimento dos campos
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

  // Validar formato do email
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
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remover tags HTML básicas
    .substring(0, 5000); // Limitar tamanho máximo
}

/**
 * Server Action para enviar email via n8n
 */
export async function sendEmail(
  formData: EmailFormData
): Promise<SendEmailResult> {
  try {
    // Obter headers para rate limiting e IP
    const headersList = await headers();
    const clientIP = getClientIP(headersList);

    // 1. Validar dados do formulário
    const validation = validateFormData(formData);
    if (!validation.valid) {
      return {
        success: false,
        message: "Erro de validação",
        error: validation.error,
      };
    }

    // 2. Verificar rate limiting
    const rateLimit = checkRateLimit(clientIP);
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

    // 3. Validar reCAPTCHA
    if (!formData.recaptchaToken) {
      return {
        success: false,
        message: "Erro de segurança",
        error: "Token do reCAPTCHA não fornecido",
      };
    }

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

    // 4. Sanitizar dados
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // 5. Verificar se a URL do webhook está configurada
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL não configurada");
      return {
        success: false,
        message: "Erro de configuração",
        error: "Serviço de email não configurado",
      };
    }

    // 6. Preparar payload para n8n
    const payload = {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      timestamp: new Date().toISOString(),
      ip: clientIP,
    };

    // 7. Fazer requisição para o webhook do n8n
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      // Timeout de 10 segundos
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Erro desconhecido");
      console.error(
        `Erro ao chamar webhook n8n: ${response.status} - ${errorText}`
      );
      return {
        success: false,
        message: "Erro ao enviar mensagem",
        error: "Não foi possível enviar a mensagem. Tente novamente mais tarde.",
      };
    }

    // 8. Retornar sucesso
    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    };
  } catch (error) {
    console.error("Erro ao processar envio de email:", error);

    // Verificar se é erro de timeout
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        message: "Timeout",
        error: "A requisição demorou muito. Tente novamente.",
      };
    }

    return {
      success: false,
      message: "Erro inesperado",
      error: "Ocorreu um erro ao processar sua mensagem. Tente novamente.",
    };
  }
}

