import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

// Fonte do Google com configurações otimizadas
export const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
});

// Fonte local com configurações otimizadas
export const ranadeVariable = localFont({
  src: [
    {
      path: '../fonts/ranade/Ranade-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/ranade/Ranade-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: "--font-ranade",
  display: "swap",
  fallback: ["Georgia", "serif"],
  preload: true,
}); 