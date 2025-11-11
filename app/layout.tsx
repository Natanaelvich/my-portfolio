import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteTitle =
  "Natanael Silva Lima - Desenvolvedor Fullstack & Tech Lead | Portfólio";
const siteDescription =
  "Tech Lead e Desenvolvedor Fullstack especializado em React, React Native, Node.js e AI Agents. 4+ anos de experiência liderando equipes e desenvolvendo aplicações escaláveis.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.natanaelsilvalima.dev.br"),
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
    "ai agents",
    "desenvolvimento mobile",
    "liderança técnica",
    "portfólio",
  ],
  authors: [{ name: "Natanael Silva Lima" }],
  creator: "Natanael Silva Lima",
  publisher: "Natanael Silva Lima",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Natanael Silva Lima - Portfólio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/projeto-abril.png",
        width: 1200,
        height: 630,
        alt: "Natanael Silva Lima - Desenvolvedor Fullstack & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/projeto-abril.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Natanael Silva Lima",
              jobTitle: "Tech Lead & Desenvolvedor Fullstack",
              description:
                "Tech Lead e Desenvolvedor Fullstack especializado em React, React Native, Node.js e AI Agents",
              url: "https://www.natanaelsilvalima.dev.br",
              sameAs: [
                "https://linkedin.com/in/natanaelvich",
                "https://github.com/natanaelvich",
              ],
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
              email: "taelima1997@gmail.com",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

