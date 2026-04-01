"use client";

import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import PopupPromo from './components/popuppromo';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${playfair.className} antialiased tracking-tight bg-white text-[#333333]`}>
        
        {/* L'Header viene richiamato qui una volta sola per tutto il sito */}
        <Header />
        

        
        {children}
<PopupPromo />
        {/* Footer richiamato qui sotto */}
        <Footer />
        
      </body>
    </html>
  );
}