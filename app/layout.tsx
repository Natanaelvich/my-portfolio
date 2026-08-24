import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig, siteDescription } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteTitle = `${siteConfig.name} - ${siteConfig.heroTitle} | Portfólio`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "desenvolvedor fullstack",
    "tech lead",
    "react native",
    "node.js",
    "nestjs",
    "typescript",
    "ai agents",
    "langchain",
    "desenvolvimento mobile",
    "liderança técnica",
    "portfólio",
    "offline-first",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: `${siteConfig.name} - Portfólio`,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Tech Lead / Senior Full Stack / Senior React Native",
  description: siteDescription,
  hiringOrganization: {
    "@type": "Organization",
    name: siteConfig.name,
    sameAs: siteConfig.domain,
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Brazil",
  },
  employmentType: ["FULL_TIME", "CONTRACTOR"],
  datePosted: "2026-01-01",
  validThrough: "2026-12-31",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: siteConfig.title,
              description: siteDescription,
              url: siteConfig.domain,
              sameAs: [siteConfig.linkedin, siteConfig.github],
              knowsAbout: [
                "React.js",
                "React Native",
                "Node.js",
                "AI Agents",
                "Desenvolvimento Mobile",
                "Liderança Técnica",
                "Google Cloud",
                "Azure",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Grupo Abril",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Timbiras",
                addressRegion: "MA",
                addressCountry: "BR",
              },
              email: siteConfig.email,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
