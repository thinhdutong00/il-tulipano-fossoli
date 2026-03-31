"use client";
import Image from 'next/image';

export default function GalleriaPage() {
  // Array ottimizzato: ho bilanciato i col-span e row-span per riempire i vuoti
  const galleriaImages = [
    { src: "/pizza-margherita-con-basilico-tulipano.webp", size: "md:col-span-2 md:row-span-2 col-span-2" },
    { src: "/gramigna.jpeg", size: "col-span-1" },
    { src: "/insalata-di-mare-10.webp", size: "col-span-1" },
    { src: "/tortellini-brodo.webp", size: "md:row-span-2 col-span-1" }, 
    { src: "/bottiglie-bancone-fossoli.jpeg", size: "col-span-1" },
    { src: "/tortellini-porcini.jpeg", size: "md:col-span-2 col-span-2" },
    { src: "/polpo-bruschette.jpg", size: "col-span-1" },
    { src: "/bicchiere-vino-fossoli.jpeg", size: "col-span-1" }, 
    { src: "/tiramisu.jpg", size: "col-span-1" },
    { src: "/scaffale-liquore.jpg", size: "md:col-span-2 col-span-2" },
    { src: "/pancettagrana.webp", size: "col-span-1" },
    { src: "/melanzanapizza.webp", size: "col-span-1" },
    { src: "/gnocco2.webp", size: "md:row-span-2 col-span-1" },
    { src: "/pomodoribasilico.webp", size: "col-span-1" },
    { src: "/bruschetta3.webp", size: "col-span-1" },
    { src: "/gnoccofritto-salumi.jpg", size: "md:col-span-2 col-span-2" },
    { src: "/tagliatalimone.webp", size: "col-span-1" },
    { src: "/muro-vino-fossoli.jpg", size: "col-span-1" },
    { src: "/birrafossoli.jpeg", size: "col-span-1" },
    { src: "/amarodelcapo.jpg", size: "col-span-1" },
  ];

  return (
    <main className="min-h-screen bg-[#ffefcc] pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* INTESTAZIONE */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#642d3a] uppercase tracking-[0.3em] text-[11px] font-bold block mb-4">
            Esperienza Visiva
          </span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 text-[#333333] leading-tight">
            Galleria
          </h1>
          <div className="w-16 h-[2px] bg-[#642d3a] mx-auto"></div>
        </div>

        {/* GRIGLIA OTTIMIZZATA */}
        {/* grid-flow-dense è fondamentale: dice al browser di tornare indietro e riempire i buchi se trova un elemento piccolo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 grid-flow-dense">
          {galleriaImages.map((img, index) => {
            return (
              <div 
                key={index} 
                className={`
                  relative overflow-hidden group rounded-lg shadow-md
                  transition-all duration-500 ease-in-out
                  hover:shadow-xl hover:z-10 bg-[#642d3a]/5
                  ${img.size}
                  min-h-[200px] md:min-h-[300px]
                `}
              >
                <div className="absolute inset-0 bg-[#642d3a]/0 group-hover:bg-[#642d3a]/10 transition-colors duration-500 z-10" />
                
                <Image
                  src={img.src}
                  alt={`Dettaglio Il Tulipano Fossoli ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 6}
                />
                
                <div className="absolute inset-3 border border-[#ffefcc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA FINALE */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 md:p-12 border border-[#642d3a]/10 bg-white/40 backdrop-blur-sm rounded-2xl">
            <a 
              href="tel:0599110390"
              className="inline-block bg-[#642d3a] text-[#ffefcc] px-12 py-5 uppercase tracking-[0.25em] font-bold text-xs hover:bg-[#4d222c] transition-all transform hover:-translate-y-1 shadow-lg rounded-full"
            >
              Prenota il tuo tavolo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}