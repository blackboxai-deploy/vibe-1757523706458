import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair", 
  display: 'swap'
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Mi Vida Keto ALMA CREATIVA - Transformación Natural y Creatividad Auténtica",
    template: "%s | Mi Vida Keto ALMA CREATIVA"
  },
  description: "Centro profesional de transformación integral. Descubre el estilo de vida ketogénico natural, desarrolla tu creatividad auténtica y alcanza el bienestar holístico. Ebooks premium, coaching personalizado y recursos especializados.",
  keywords: ["estilo de vida keto", "transformación natural", "creatividad auténtica", "bienestar integral", "coaching nutricional", "desarrollo personal", "ebooks especializados"],
  authors: [{ name: "Mi Vida Keto ALMA CREATIVA" }],
  creator: "Mi Vida Keto ALMA CREATIVA",
  openGraph: {
    type: "website",
    locale: "es_ES", 
    url: "https://mividaketoalmacreativa.com",
    title: "Mi Vida Keto ALMA CREATIVA - Centro de Transformación Natural",
    description: "Centro profesional especializado en transformación integral a través del estilo de vida ketogénico y desarrollo creativo auténtico.",
    siteName: "Mi Vida Keto ALMA CREATIVA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-brand-cream via-white to-green-50`}>
        {children}
      </body>
    </html>
  );
}