/**
 * Rate limiting with Vercel KV when configured, in-memory fallback otherwise.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const DEFAULT_MAX_REQUESTS = parseInt(
  process.env.RATE_LIMIT_MAX_REQUESTS || "5",
  10
);
const DEFAULT_WINDOW_MS = parseInt(
  process.env.RATE_LIMIT_WINDOW_MS || "3600000",
  10
);

function hasKvConfig(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );
}

async function checkKvRateLimit(
  ip: string,
  maxRequests: number,
  windowMs: number
): Promise<{ allowed: boolean; resetTime?: number; remaining?: number }> {
  const { kv } = await import("@vercel/kv");
  const key = `rate-limit:${ip}`;
  const now = Date.now();

  const entry = await kv.get<{ count: number; resetTime: number }>(key);

  if (!entry || now > entry.resetTime) {
    const resetTime = now + windowMs;
    await kv.set(key, { count: 1, resetTime }, { px: windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetTime };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, resetTime: entry.resetTime, remaining: 0 };
  }

  const updated = { count: entry.count + 1, resetTime: entry.resetTime };
  await kv.set(key, updated, { px: entry.resetTime - now });
  return {
    allowed: true,
    remaining: maxRequests - updated.count,
    resetTime: entry.resetTime,
  };
}

function checkMemoryRateLimit(
  ip: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; resetTime?: number; remaining?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    cleanupExpiredEntries(now);
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, resetTime: entry.resetTime, remaining: 0 };
  }

  entry.count++;
  rateLimitStore.set(ip, entry);
  return { allowed: true, remaining: maxRequests - entry.count };
}

export async function checkRateLimit(
  ip: string,
  maxRequests: number = DEFAULT_MAX_REQUESTS,
  windowMs: number = DEFAULT_WINDOW_MS
): Promise<{ allowed: boolean; resetTime?: number; remaining?: number }> {
  if (hasKvConfig()) {
    try {
      return await checkKvRateLimit(ip, maxRequests, windowMs);
    } catch (error) {
      console.error("KV rate limit failed, using memory fallback:", error);
    }
  }

  return checkMemoryRateLimit(ip, maxRequests, windowMs);
}

function cleanupExpiredEntries(now: number): void {
  if (Math.random() < 0.01) {
    for (const [ip, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
  }
}

export function getClientIP(headers: Headers): string {
  const vercelForwardedFor = headers.get("x-vercel-forwarded-for");
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(",")[0].trim();
  }

  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }

  const cfConnectingIP = headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP.trim();
  }

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const xClientIP = headers.get("x-client-ip");
  if (xClientIP) {
    return xClientIP.trim();
  }

  return "127.0.0.1";
}
