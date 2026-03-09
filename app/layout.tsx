"use client";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false); // Nuovo stato per il sottomenu contatti

  return (
    <html lang="it">
      <body className={`${playfair.className} antialiased tracking-tight bg-white text-[#333333]`}>
        
        <nav className="fixed top-0 w-full z-[100] bg-black/30 backdrop-blur-md border-b border-white/10 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-white">
            
            <Link href="/" className="font-serif text-2xl uppercase tracking-tighter hover:opacity-80 transition">
              Il Tulipano
            </Link>

            <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-bold">
              <Link href="/" className="hover:text-[#E5B54F] transition">Home</Link>
              <Link href="/informazioni" className="hover:text-[#E5B54F] transition">Informazioni</Link>
              
              {/* --- DROPDOWN MENU --- */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button className="hover:text-[#E5B54F] transition flex items-center gap-1 uppercase tracking-[0.2em] outline-none">
                  Menù <span className="text-[8px]" style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>▼</span>
                </button>

                {isMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-52">
                    <div className="bg-white text-[#333333] shadow-2xl border-t-4 border-[#800020] py-2 rounded-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <Link href="/menu" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#800020] transition normal-case font-semibold text-[13px] border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Menù Completo</Link>
                      <Link href="/pizza-del-mese" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#800020] transition normal-case font-semibold text-[13px] border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Pizza del Mese</Link>
                      <Link href="/le-nostre-birre" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#800020] transition normal-case font-semibold text-[13px]" onClick={() => setIsMenuOpen(false)}>Le Nostre Birre</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/galleria" className="hover:text-[#E5B54F] transition">Galleria</Link>

              {/* --- DROPDOWN CONTATTI AGGIORNATO --- */}
              <div 
                className="relative"
                onMouseEnter={() => setIsContactsOpen(true)}
                onMouseLeave={() => setIsContactsOpen(false)}
              >
                <button className="hover:text-[#E5B54F] transition flex items-center gap-1 uppercase tracking-[0.2em] outline-none">
                  Contatti <span className="text-[8px]" style={{ transform: isContactsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>▼</span>
                </button>

                {isContactsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-52">
                    <div className="bg-white text-[#333333] shadow-2xl border-t-4 border-[#800020] py-2 rounded-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <Link href="/contatti" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#800020] transition normal-case font-semibold text-[13px] border-b border-gray-100" onClick={() => setIsContactsOpen(false)}>Recapiti e Mappa</Link>
                      <Link href="/prenota-un-tavolo" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#800020] transition normal-case font-semibold text-[13px]" onClick={() => setIsContactsOpen(false)}>Prenota un Tavolo</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="tel:0599110390">
                <button className="bg-[#800020] px-5 py-2 hover:bg-[#600018] transition shadow-lg text-white">
                  PRENOTA
                </button>
              </Link>
            </div>
          </div>
        </nav>
        
        {children}

        {/* --- FOOTER --- */}
        <footer className="relative z-10 w-full m-0 p-0 border-none mt-auto">
          <div className="bg-white py-16 text-[#333333] border-t border-gray-100">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
              
              {/* Colonna: DOVE SIAMO */}
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

              {/* Colonna: ORARI */}
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
                <p className="text-[10px] italic text-gray-400 text-center uppercase tracking-widest mt-2">Aperto tutti i giorni</p>
              </div>

              {/* Colonna: CONTATTI */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-[#800020] font-serif text-xl tracking-widest uppercase border-b border-[#800020]/10 pb-2">
                  Contatti
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-tighter">Enjoy SRL - P. IVA 03831040369</p>
                <div className="flex gap-4">
                   <Link href="https://facebook.com" className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center hover:bg-[#600018] transition-all cursor-pointer text-xs font-bold shadow-md">FB</Link>
                   <Link href="https://instagram.com" className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center hover:bg-[#600018] transition-all cursor-pointer text-xs font-bold shadow-md">IG</Link>
                </div>
              </div>

            </div>
          </div>

          {/* Copyright Section */}
          <div className="bg-black py-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
              © {new Date().getFullYear()} Il Tulipano — Excellence in Carpi — Developed with Next.js
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}