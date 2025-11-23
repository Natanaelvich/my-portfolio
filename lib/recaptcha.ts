/**
 * reCAPTCHA v3 Validation Utility
 * Valida tokens do reCAPTCHA v3 no servidor
 */

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL =
  "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5; // Score mínimo para considerar válido (0.0 a 1.0)

interface RecaptchaVerifyResponse {
  success: boolean;
  score?: number;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

/**
 * Valida um token do reCAPTCHA v3
 * @param token - Token do reCAPTCHA v3 enviado pelo cliente
 * @param remoteIP - IP do cliente (opcional, mas recomendado)
 * @returns Resultado da validação
 */
export async function verifyRecaptcha(
  token: string,
  remoteIP?: string
): Promise<{ valid: boolean; score?: number; error?: string }> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY não configurada");
    return {
      valid: false,
      error: "Configuração do reCAPTCHA incompleta",
    };
  }

  if (!token) {
    return {
      valid: false,
      error: "Token do reCAPTCHA não fornecido",
    };
  }

  try {
    // Construir URL com parâmetros
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
    });

    if (remoteIP) {
      params.append("remoteip", remoteIP);
    }

    // Fazer requisição para API do Google
    const response = await fetch(
      `${RECAPTCHA_VERIFY_URL}?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `reCAPTCHA API retornou status ${response.status}`
      );
    }

    const data: RecaptchaVerifyResponse = await response.json();

    if (!data.success) {
      const errorCodes = data["error-codes"] || [];
      return {
        valid: false,
        error: `reCAPTCHA falhou: ${errorCodes.join(", ")}`,
      };
    }

    // Verificar score (reCAPTCHA v3 retorna score de 0.0 a 1.0)
    const score = data.score ?? 0;
    if (score < MIN_SCORE) {
      return {
        valid: false,
        score,
        error: `Score muito baixo: ${score.toFixed(2)} (mínimo: ${MIN_SCORE})`,
      };
    }

    return {
      valid: true,
      score,
    };
  } catch (error) {
    console.error("Erro ao validar reCAPTCHA:", error);
    return {
      valid: false,
      error:
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao validar reCAPTCHA",
    };
  }
}

