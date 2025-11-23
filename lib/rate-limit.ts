/**
 * Rate Limiting Utility
 * Limita o número de requisições por IP em um período de tempo
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Map em memória para armazenar contadores por IP
// Em produção, considere usar Vercel KV ou Redis para persistência
const rateLimitStore = new Map<string, RateLimitEntry>();

// Configurações padrão
const DEFAULT_MAX_REQUESTS = parseInt(
  process.env.RATE_LIMIT_MAX_REQUESTS || "5",
  10
);
const DEFAULT_WINDOW_MS = parseInt(
  process.env.RATE_LIMIT_WINDOW_MS || "3600000",
  10
); // 1 hora padrão

/**
 * Verifica se o IP excedeu o limite de requisições
 * @param ip - Endereço IP do cliente
 * @param maxRequests - Número máximo de requisições permitidas (padrão: 5)
 * @param windowMs - Janela de tempo em milissegundos (padrão: 1 hora)
 * @returns Objeto com status e tempo restante se excedido
 */
export function checkRateLimit(
  ip: string,
  maxRequests: number = DEFAULT_MAX_REQUESTS,
  windowMs: number = DEFAULT_WINDOW_MS
): { allowed: boolean; resetTime?: number; remaining?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Se não existe entrada ou a janela expirou, criar nova
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });

    // Limpar entradas expiradas periodicamente
    cleanupExpiredEntries(now);

    return { allowed: true, remaining: maxRequests - 1 };
  }

  // Se ainda está na janela de tempo
  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      resetTime: entry.resetTime,
      remaining: 0,
    };
  }

  // Incrementar contador
  entry.count++;
  rateLimitStore.set(ip, entry);

  return {
    allowed: true,
    remaining: maxRequests - entry.count,
  };
}

/**
 * Limpa entradas expiradas do store
 * @param now - Timestamp atual
 */
function cleanupExpiredEntries(now: number): void {
  // Limpar apenas a cada 100 requisições para evitar overhead
  if (Math.random() < 0.01) {
    for (const [ip, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
  }
}

/**
 * Obtém o IP do cliente a partir dos headers da requisição
 * @param headers - Headers da requisição
 * @returns IP do cliente
 */
export function getClientIP(headers: Headers): string {
  // Verificar headers comuns de proxy/CDN
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    // Pegar o primeiro IP da lista (IP original do cliente)
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }

  const cfConnectingIP = headers.get("cf-connecting-ip"); // Cloudflare
  if (cfConnectingIP) {
    return cfConnectingIP.trim();
  }

  // Fallback para localhost em desenvolvimento
  return "127.0.0.1";
}

