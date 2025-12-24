import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // troque pelo domínio em produção

  title: {
    default: "Pet Shop Dev",
    template: "%s | Pet Shop Dev",
  },

  description:
    "Criação de sites modernos e profissionais para pet shops que querem atrair mais clientes e vender mais.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Pet Shop Dev",
    description:
      "Sites profissionais para pet shops, rápidos, modernos e focados em conversão.",
    url: "http://localhost:3000",
    siteName: "Pet Shop Dev",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pet Shop Dev",
    description:
      "Sites modernos e profissionais para pet shops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
