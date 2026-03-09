"use client";
import Image from 'next/image';

export default function GalleriaPage() {
  // Array di immagini utilizzando quelle che abbiamo già nel progetto
  const galleriaImages = [
    { 
      src: "/tulipanocarpi-interno-1.webp", 
      alt: "Interno del ristorante", 
      className: "md:col-span-2 md:row-span-2" // Immagine grande
    },
    { 
      src: "/pizza-acciughe.webp", 
      alt: "La nostra pizza artigianale", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/piatto-di-pasta-gambero.webp", 
      alt: "Specialità di pesce", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/filetto-di-carne-alla-griglia-tulipano.webp", 
      alt: "Secondi piatti di qualità", 
      className: "md:col-span-1 md:row-span-2" // Immagine verticale
    },
    { 
      src: "/scaffale-dei-vini-tulipano.webp", 
      alt: "La nostra selezione di vini", 
      className: "md:col-span-2 md:row-span-1" // Immagine orizzontale
    },
    { 
      src: "/tulipanofossoli-card3.webp", 
      alt: "Dettagli Tulipano", 
      className: "md:col-span-1 md:row-span-1" 
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* INTESTAZIONE */}
        <div className="text-center mb-16">
          <h2 className="text-[#800020] uppercase tracking-[0.4em] text-xs font-bold mb-3">
            L'Esperienza Visiva
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 text-[#333333]">
            Galleria
          </h1>
          <div className="w-24 h-1 bg-[#800020] mx-auto"></div>
        </div>

        {/* GRIGLIA FOTOGRAFICA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleriaImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay con testo che appare al passaggio del mouse */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <p className="text-white font-serif italic text-2xl border-b border-white/30 pb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-8">
            Seguici sui social per le novità quotidiane
          </p>
          <div className="flex justify-center gap-10">
            <a href="#" className="text-[#800020] font-bold border-b-2 border-transparent hover:border-[#800020] transition-all pb-1 uppercase tracking-tighter text-sm">
              Instagram
            </a>
            <a href="#" className="text-[#800020] font-bold border-b-2 border-transparent hover:border-[#800020] transition-all pb-1 uppercase tracking-tighter text-sm">
              Facebook
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}