import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"; // Importiamo Playfair
import "./globals.css";

// Configurazione del font Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Il Tulipano Carpi | Ristorante Pizzeria",
  description: "Cucina tradizionale emiliana e pizza gourmet a Carpi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      {/* 1. Applichiamo playfair.className
        2. 'antialiased' rende i font più nitidi
        3. 'tracking-tight' riduce lo spazio tra le lettere (come richiesto)
      */}
      <body className={`${playfair.className} antialiased tracking-tight bg-white text-[#333333]`}>
        {children}
      </body>
    </html>
  );
}
