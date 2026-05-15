import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reborn AI — Plataforma Completa de Inteligencia Artificial",
  description:
    "A plataforma de IA que te ajuda a criar websites, conteudos, campanhas e ganhar dinheiro online. Comeca gratis ou por apenas 9,99 euros/mes.",
  keywords: [
    "AI",
    "Inteligencia Artificial",
    "Websites",
    "Marketing",
    "CRM",
    "Automacao",
  ],
  authors: [{ name: "REBORNAI" }],
  openGraph: {
    title: "Reborn AI — Automate. Create. Scale.",
    description:
      "A plataforma de IA que te ajuda a criar websites, conteudos, campanhas e ganhar dinheiro online.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reborn AI — Automate. Create. Scale.",
    description:
      "A plataforma de IA que te ajuda a criar websites, conteudos, campanhas e ganhar dinheiro online.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
