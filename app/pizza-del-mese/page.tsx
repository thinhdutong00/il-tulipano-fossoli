"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function PizzaDelMesePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION - ANNUNCIO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0b1f6e]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/scaffale-dei-vini-tulipano.webp" 
            alt="Sfondo" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-sm md:text-base uppercase tracking-[0.5em] mb-4 opacity-80">
            Edizione Limitata
          </h2>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6 drop-shadow-lg">
            La Pizza del Mese
          </h1>
          <div className="w-24 h-1 bg-[#E5B54F] mx-auto"></div>
        </div>
      </section>

      {/* 2. SEZIONE DETTAGLIO - IMMAGINE E DESCRIZIONE */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Colonna Sinistra: Immagine */}
            <div className="relative h-[500px] md:h-[600px] shadow-2xl rounded-sm overflow-hidden group">
              <Image 
                src="/pizza-acciughe.webp" 
                alt="Pizza del Mese" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Colonna Destra: Testi */}
            <div className="space-y-8">
              <div>
                <span className="text-[#800020] font-bold uppercase tracking-widest text-xs">Marzo 2026</span>
                <h3 className="text-5xl font-serif italic text-[#333333] mt-2">La "Sinfonia Emiliana"</h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed italic">
                "Un omaggio ai sapori della nostra terra, pensata per chi cerca un equilibrio perfetto tra croccantezza e morbidezza."
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold uppercase tracking-tighter border-b border-gray-200 pb-2">
                  Ingredienti Selezionati
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#E5B54F] rounded-full"></span>
                    Impasto Altograno a lunga lievitazione
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#E5B54F] rounded-full"></span>
                    Fior di latte di Agerola
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#E5B54F] rounded-full"></span>
                    Mortadella Bologna IGP
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#E5B54F] rounded-full"></span>
                    Granella di pistacchio di Bronte
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#E5B54F] rounded-full"></span>
                    Stracciatella pugliese freschissima
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link href="tel:0599110390">
                  <button className="bg-[#800020] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                    Prenota Ora
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEZIONE CALL TO ACTION (Opzionale, stile screenshot) */}
      <section className="bg-black py-16 text-center">
        <p className="text-white/60 text-sm uppercase tracking-[0.3em]">
          Disponibile solo fino al 31 Marzo
        </p>
      </section>
    </main>
  );
}