import "../styles/globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { TransitionProvider } from '../context/TransitionContext';

import { hankenGrotesk, ranadeVariable } from "./fonts";

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Lindal - Manutenção e Fabricação de Equipamentos para Cozinha Industrial",
  description: "Com mais de 20 anos de experiência, a Lindal oferece serviços especializados de manutenção e fabricação de equipamentos para cozinhas industriais, garantindo qualidade, segurança e eficiência para restaurantes, supermercados e indústrias.",
  keywords: "cozinha industrial, equipamentos, manutenção, fabricação, Lindal",
  authors: [{ name: "Lindal" }],
  openGraph: {
    title: "Lindal - Manutenção e Fabricação de Equipamentos para Cozinha Industrial",
    description: "Com mais de 20 anos de experiência, a Lindal oferece serviços especializados de manutenção e fabricação de equipamentos para cozinhas industriais, garantindo qualidade, segurança e eficiência para restaurantes, supermercados e indústrias.",
    url: "https://lindal.vercel.app",
    siteName: "Lindal ",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/img/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${hankenGrotesk.variable} ${ranadeVariable.variable} antialiased`}
      >
        <TransitionProvider>
          <PageTransition />
          <Header />
          <main className="site-main">
            {children}
          </main>
          <Footer />
        </TransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
