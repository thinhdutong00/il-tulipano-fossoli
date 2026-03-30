"use client";
import Image from 'next/image';

export default function GalleriaPage() {
  // Array di 20 immagini
  // Sostituisci i percorsi quando carichi le nuove foto in public/
  const galleriaImages = [
    { src: "/pizza-margherita-con-basilico-tulipano.webp", size: "md:col-span-2 md:row-span-2" },
    { src: "/riso-cavolo-rosso-6.webp", size: "" },
    { src: "/insalata-di-mare-10.webp", size: "" },
    { src: "/tortellini-brodo.webp", size: "md:row-span-2" },
    { src: "/tenerina-2.webp", size: "md:col-span-2" },
    { src: "/bottiglie-bancone-fossoli.jpeg", size: "" },
    { src: "/polpo-bruschette.jpg", size: "" },
    // Da qui in poi usiamo placeholder o ripetizioni che sostituirai tu
    { src: "/scaffalevini2.webp", size: "md:col-span-1" }, 
    { src: "/tiramisu.jpg", size: "" },
    { src: "/scaffale-liquore.jpg", size: "md:col-span-2" },
    { src: "/pancettagrana.webp", size: "" },
    { src: "/melanzanapizza.webp", size: "" },
    { src: "/gnocco2.webp", size: "md:row-span-2" },
    { src: "/pomodoribasilico.webp", size: "" },
    { src: "/bruschetta3.webp", size: "" },
    { src: "/vinoservito.webp", size: "md:col-span-2" },
    { src: "/tagliatalimone.webp", size: "" },
    { src: "/muro-vino-fossoli.jpg", size: "" },
    { src: "/tavolo-con-tovaglia-tulipano.webp", size: "" },
    { src: "/pizza-acchiughe.webp", size: "" },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* INTESTAZIONE */}
        <div className="text-center mb-16">
          <h2 className="text-[#800020] uppercase tracking-[0.4em] text-[10px] font-bold mb-3">
            Uno sguardo al nostro mondo
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 text-[#333333]">
            La Galleria
          </h1>
          <div className="w-20 h-1 bg-[#800020] mx-auto"></div>
        </div>

        {/* GRIGLIA MASONRY A 20 FOTO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleriaImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group shadow-sm bg-gray-100 ${img.size}`}
            >
              <Image
                src={img.src}
                alt={`Galleria immagine ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay minimalista al passaggio del mouse */}
              <div className="absolute inset-0 bg-[#800020]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA FINALE */}
        <div className="mt-20 text-center border-t border-gray-100 pt-16">
          <p className="text-gray-400 font-serif italic text-lg mb-6">
            Ti aspettiamo per vivere queste atmosfere dal vivo.
          </p>
          <a 
            href="tel:0599110390"
            className="inline-block bg-[#800020] text-white px-10 py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-black transition-colors"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>
    </main>
  );
}