import "../styles/globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import { hankenGrotesk, ranadeVariable } from "./fonts";

export const metadata = {
  title: "Lindal",
  description: "Manutenção e Fabricação de Equipamentos para Cozinha Industrial",
  keywords: "cozinha industrial, equipamentos, manutenção, fabricação, Lindal",
  authors: [{ name: "Lindal" }],
  openGraph: {
    title: "Lindal - Equipamentos para Cozinha Industrial",
    description: "Manutenção e Fabricação de Equipamentos para Cozinha Industrial",
    url: "https://www.lindal.com.br",
    siteName: "Lindal",
    locale: "pt_BR",
    type: "website",
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${hankenGrotesk.variable} ${ranadeVariable.variable} antialiased`}
      >
        <Header />
        <main className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
