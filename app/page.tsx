"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // Configurazione Carosello (Screenshot Elementor)
  const slides = [
    "/hero1 - tulipano carpi.webp",
    "/lampade soffitto - tulipano.webp",
    "/scaffale dei vini - tulipano.webp",
    "/tavola con tovaglia - tulipano.webp"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 secondi come su Elementor
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      
      {/* 1. HERO SECTION CON CAROSELLO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image 
                src={image} 
                alt={`Background ${index}`} 
                fill 
                className="object-cover scale-105"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg tracking-tighter">
            Benvenuti al Tulipano
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-3 rounded-sm font-bold transition uppercase tracking-widest shadow-lg">
              Guarda il menù
            </button>
            <button className="bg-[#E5B54F] hover:bg-[#D4A43D] text-white px-8 py-3 rounded-sm font-bold transition uppercase tracking-widest shadow-lg">
              Prenota un tavolo
            </button>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE RISTORANTE & PIZZERIA */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12 items-start justify-between">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-serif text-[#333333] leading-tight tracking-tighter">
              Ristorante<br />& Pizzeria
            </h2>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="text-xl leading-relaxed text-gray-700 tracking-tight">
              Dal 1990, il Tulipano incarna l&apos;essenza della cucina emiliana a Carpi. 
              Dalle specialità di carne e pesce alla nostra celebre pizza gourmet, ogni piatto 
              è un viaggio nel gusto e nella tradizione.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] overflow-hidden group">
            <Image src="/filetto-di-carne-alla-griglia-tulipano.webp" alt="Ristorante" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-2xl font-serif italic">La Cucina</span>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden group">
            <Image src="/pizza-margherita-con-basilico-tulipano.webp" alt="Pizzeria" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-2xl font-serif italic">La Pizzeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREVIEW MENU (BORDEAUX & ORO) */}
      <section className="py-20 bg-[#6D1919] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-[#E5B54F] tracking-tighter">I Nostri Piatti</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            <MenuItem name="Gnocco Fritto con Affettati Misti" price="14,00€" />
            <MenuItem name="Tortelli Verdi Vecchia Modena" price="12,00€" />
            <MenuItem name="Carbonara Romana" price="12,00€" />
            <MenuItem name="Filetto di Fassona Piemontese" price="29,00€" />
            <MenuItem name="Antipasto di Mare Tulipano" price="24,00€" />
            <MenuItem name="Spaghettone allo Scoglio" price="19,00€" />
          </div>
          <div className="text-center mt-16">
            <button className="border-2 border-[#E5B54F] text-[#E5B54F] hover:bg-[#E5B54F] hover:text-[#6D1919] px-10 py-3 rounded-sm font-bold transition-all uppercase tracking-[0.2em]">
              Sfoglia il Menù Completo
            </button>
          </div>
        </div>
      </section>

      {/* 4. I NOSTRI SPAZI (LAYOUT SCREENSHOT) */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12 items-start justify-between">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-serif text-[#333333] leading-tight tracking-tighter">
              I nostri<br />Spazi
            </h2>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="text-xl leading-relaxed text-gray-700 tracking-tight">
              Al Tulipano sarete accolti in un ambiente moderno ed elegante. 
              Dalla sala interna raffinata al dehor esterno perfetto per le serate estive.
            </p>
          </div>
        </div>
        <div className="relative h-[550px] w-full overflow-hidden shadow-2xl">
          <Image src="/tavola-con-tovaglia-tulipano.webp" alt="Interni" fill className="object-cover" />
        </div>
      </section>

      {/* 5. CTA PRENOTAZIONE CON PIZZA OVERLAP */}
      <section className="relative py-24 bg-[#6D1919] text-center px-4 overflow-visible z-20">
        <div className="absolute right-[-30px] bottom-[-140px] z-50 hidden lg:block w-[320px]">
          <Image 
            src="/pizzafooter.webp" 
            alt="Pizza" 
            width={320} 
            height={320} 
            className="object-contain drop-shadow-2xl" 
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-30">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tighter border-b-2 border-white inline-block pb-2">
            Riserva un tavolo
          </h2>
          <p className="text-xl text-white/90 mb-10 tracking-tight">
            Prenota ora e siediti a tavola con le persone che più contano per te.
          </p>
          <button className="bg-[#E5B54F] hover:bg-[#D4A43D] text-white px-12 py-5 rounded-sm font-bold transition-all uppercase tracking-[0.2em] shadow-xl">
            Prenota un tavolo
          </button>
          <div className="mt-8">
             <p className="text-white/60 italic mb-2">o chiamaci direttamente al</p>
             <a href="tel:0599110390" className="text-4xl font-bold text-white hover:text-[#E5B54F] transition-colors">059 9110390</a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER GLASS STYLE */}
      <footer className="relative z-10 bg-[#111111]/90 backdrop-blur-xl py-24 text-gray-300 border-t border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h4 className="text-[#E5B54F] font-serif text-2xl tracking-widest uppercase">Dove Siamo</h4>
            <p className="text-white text-lg">Via A. Moro Interna, 1R <br/> 41012 Carpi (MO)</p>
            <p className="text-[#800020] font-bold text-xs tracking-widest cursor-pointer">VAI ALLE INDICAZIONI →</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#E5B54F] font-serif text-2xl tracking-widest uppercase">Orari</h4>
            <div className="space-y-2 text-lg">
              <p className="flex justify-between border-b border-white/5"><span>Pranzo:</span> <span>12:00/15:00</span></p>
              <p className="flex justify-between border-b border-white/5"><span>Cena:</span> <span>18:00/00:00</span></p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[#E5B54F] font-serif text-2xl tracking-widest uppercase">Social</h4>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#800020] transition-colors cursor-pointer">FB</div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#800020] transition-colors cursor-pointer">IG</div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] text-gray-600">
          © {new Date().getFullYear()} Il Tulipano — Excellence in Carpi
        </div>
      </footer>
    </main>
  );
}

function MenuItem({ name, price }: { name: string, price: string }) {
  return (
    <div className="flex justify-between items-baseline border-b border-[#E5B54F]/20 pb-2 group hover:border-[#E5B54F] transition-colors duration-300">
      <span className="text-md font-light uppercase tracking-[0.15em] group-hover:text-[#E5B54F] transition-colors">{name}</span>
      <span className="text-[#E5B54F] font-bold ml-4">{price}</span>
    </div>
  );
}