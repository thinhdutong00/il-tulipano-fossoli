"use client"; // Necessario per gestire l'apertura del sottomenu

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

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
  // Stato per gestire l'apertura della tendina
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="it">
      <body className={`${playfair.className} antialiased tracking-tight bg-white text-[#333333]`}>
        
        {/* --- HEADER FISSO --- */}
        <nav className="fixed top-0 w-full z-[100] bg-black/30 backdrop-blur-md border-b border-white/10 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-white">
            
            {/* Titolo/Logo */}
            <Link href="/" className="font-serif text-2xl uppercase tracking-tighter hover:opacity-80 transition">
              Il Tulipano
            </Link>

            {/* Menu di Navigazione */}
            <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-bold">
              <Link href="/" className="hover:text-[#E5B54F] transition">
                Home
              </Link>
              <Link href="/informazioni" className="hover:text-[#E5B54F] transition">
                Informazioni
              </Link>
              
              {/* --- SOTTOMENU CON TENDINA --- */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button className="hover:text-[#E5B54F] transition flex items-center gap-1 uppercase tracking-[0.2em]">
                  Menù <span className="text-[8px]">{isMenuOpen ? '▲' : '▼'}</span>
                </button>

                {/* Tendina Sottomenu */}
                {isMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48">
                    <div className="bg-white text-[#333333] shadow-2xl border-t-2 border-[#800020] py-2 rounded-sm overflow-hidden">
                      <Link 
                        href="/menu" 
                        className="block px-6 py-3 hover:bg-gray-100 hover:text-[#800020] transition normal-case font-medium text-sm border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Menù Completo
                      </Link>
                      <Link 
                        href="/pizza-del-mese" 
                        className="block px-6 py-3 hover:bg-gray-100 hover:text-[#800020] transition normal-case font-medium text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pizza del Mese
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Tasto Prenota */}
              <Link href="tel:0599110390">
                <button className="bg-[#800020] px-5 py-2 hover:bg-[#600018] transition shadow-lg">
                  PRENOTA
                </button>
              </Link>
            </div>

          </div>
        </nav>
        {/* --- FINE HEADER --- */}
        
        {children}

        {/* --- FOOTER --- */}
        <footer className="relative z-10 w-full m-0 p-0 border-none">
          <div className="bg-white py-16 text-[#333333]">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
              <div className="flex flex-col space-y-4">
                <h4 className="text-[#800020] font-serif text-xl tracking-widest uppercase border-b border-[#800020]/10 pb-2">
                  Dove Siamo
                </h4>
                <div className="space-y-1">
                  <p className="text-lg font-bold">Via A. Moro Interna, 1R</p>
                  <p className="text-gray-500">41012 Carpi (MO)</p>
                </div>
                <Link href="https://maps.google.com" target="_blank">
                  <p className="text-[#800020] font-bold text-xs tracking-widest cursor-pointer hover:underline mt-2 uppercase">
                    VAI ALLE INDICAZIONI →
                  </p>
                </Link>
              </div>

              <div className="flex flex-col space-y-4">
                <h4 className="text-[#800020] font-serif text-xl tracking-widest uppercase border-b border-[#800020]/10 pb-2">
                  Orari
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="font-medium">Pranzo:</span> <span>12:00 / 15:00</span>
                  </p>
                  <p className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="font-medium">Cena:</span> <span>18:00 / 00:00</span>
                  </p>
                </div>
                <p className="text-[10px] italic text-gray-400 text-center uppercase tracking-widest">Aperto tutti i giorni</p>
              </div>

              <div className="flex flex-col space-y-4">
                <h4 className="text-[#800020] font-serif text-xl tracking-widest uppercase border-b border-[#800020]/10 pb-2">
                  Contatti
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-tighter">Enjoy SRL - P. IVA 03831040369</p>
                <div className="flex gap-4">
                   <Link href="#" className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center hover:bg-[#600018] transition-all cursor-pointer text-xs font-bold shadow-md">FB</Link>
                   <Link href="#" className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center hover:bg-[#600018] transition-all cursor-pointer text-xs font-bold shadow-md">IG</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black py-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
              © {new Date().getFullYear()} Il Tulipano — Excellence in Carpi
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}