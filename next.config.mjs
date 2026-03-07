/** @type {import('next').NextConfig} */

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
  style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
  img-src 'self' data: blob: https:;
  font-src 'self' data: https://cdnjs.cloudflare.com;
  connect-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
  frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`
  .replace(/\n/g, " ")
  .replace(/\s{2,}/g, " ")
  .trim();

// Headers de segurança para mitigar vulnerabilidades comuns
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

