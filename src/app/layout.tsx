import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Plateforme d'Agriculture de Précision`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "agriculture de précision",
    "agriculture intelligente",
    "capteurs IoT",
    "gestion irrigation",
    "surveillance cultures",
    "technologie agricole",
    "logiciel gestion agricole",
    "imagerie satellite",
    "intelligence météo",
    "IA agriculture",
    "agriculture durable",
    "conservation eau",
    "Tunisie agriculture",
    "ARDHI plateforme",
  ],
  authors: [{ name: "ARDHI Platform", url: siteConfig.url }],
  creator: "ARDHI Platform",
  publisher: "ARDHI Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Plateforme d'Agriculture de Précision`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Plateforme d'Agriculture de Précision`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Plateforme d'Agriculture de Précision`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ardhiplatform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#16a34a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
