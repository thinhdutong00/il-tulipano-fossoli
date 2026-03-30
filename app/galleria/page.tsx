"use client";
import Image from 'next/image';

export default function GalleriaPage() {
  // Array aggiornato con le classi per un layout "Hero" e "Detail" misto
  const galleriaImages = [
    { src: "/pizza-margherita-con-basilico-tulipano.webp", size: "col-span-2 row-span-2" },
    { src: "/riso-cavolo-rosso-6.webp", size: "col-span-1" },
    { src: "/insalata-di-mare-10.webp", size: "col-span-1" },
    { src: "/tortellini-brodo.webp", size: "row-span-2" },
    { src: "/tenerina-2.webp", size: "col-span-2" },
    { src: "/bottiglie-bancone-fossoli.jpeg", size: "col-span-1" },
    { src: "/polpo-bruschette.jpg", size: "col-span-1" },
    { src: "/scaffalevini2.webp", size: "col-span-1" }, 
    { src: "/tiramisu.jpg", size: "col-span-1" },
    { src: "/scaffale-liquore.jpg", size: "col-span-2" },
    { src: "/pancettagrana.webp", size: "col-span-1" },
    { src: "/melanzanapizza.webp", size: "col-span-1" },
    { src: "/gnocco2.webp", size: "row-span-2" },
    { src: "/pomodoribasilico.webp", size: "col-span-1" },
    { src: "/bruschetta3.webp", size: "col-span-1" },
    { src: "/affettati.jpg", size: "col-span-2" },
    { src: "/tagliatalimone.webp", size: "col-span-1" },
    { src: "/muro-vino-fossoli.jpg", size: "col-span-1" },
    { src: "/tavolo-con-tovaglia-tulipano.webp", size: "col-span-1" },
    { src: "/pizza-acchiughe.webp", size: "col-span-1" },
  ];

  return (
    <main className="min-h-screen bg-[#ffefcc] pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* INTESTAZIONE ELEGANTE */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#642d3a] uppercase tracking-[0.3em] text-[11px] font-bold block mb-4">
            Esperienza Visiva
          </span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 text-[#333333] leading-tight">
            Galleria
          </h1>
          <div className="w-16 h-[2px] bg-[#642d3a] mx-auto"></div>
        </div>

        {/* GRIGLIA MASONRY-STYLE RESPONSIVE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {galleriaImages.map((img, index) => (
            <div 
              key={index} 
              className={`
                relative overflow-hidden group rounded-sm
                transition-all duration-500 ease-in-out
                hover:shadow-2xl hover:z-10
                ${img.size}
                ${img.size.includes('row-span-2') ? 'aspect-[3/4] md:aspect-auto' : 'aspect-square'}
              `}
            >
              {/* Overlay per enfatizzare i colori del brand al passaggio */}
              <div className="absolute inset-0 bg-[#642d3a]/0 group-hover:bg-[#642d3a]/20 transition-colors duration-500 z-10" />
              
              <Image
                src={img.src}
                alt={`Dettaglio cucina Il Tulipano ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority={index < 4}
              />
              
              {/* Cornice interna sottile al passaggio */}
              <div className="absolute inset-4 border border-[#ffefcc]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA FINALE CALDA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-12 border border-[#642d3a]/10 bg-white/30 backdrop-blur-sm rounded-lg">
            <p className="text-[#642d3a] font-serif italic text-xl md:text-2xl mb-8">
              "La cucina è il cuore della casa, <br className="hidden md:block" /> il sapore è il cuore della vita."
            </p>
            <a 
              href="tel:0599110390"
              className="inline-block bg-[#642d3a] text-[#ffefcc] px-12 py-5 uppercase tracking-[0.25em] font-bold text-xs hover:bg-[#3d1b23] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Prenota il tuo tavolo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}