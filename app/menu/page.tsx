"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import stili Swiper necessari
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MenuPage() {
  // Array temporaneo con le immagini che hai già nella cartella public
  // Quando avrai le immagini del menu, sostituisci questi nomi
  const tempImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.png",
    "/18.png",
    "/19.png",
    "/20.png"
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Intestazione */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#333333] mb-4">Il Nostro Menù</h1>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">Usa le frecce per sfogliare</p>
          <div className="w-20 h-1 bg-[#800020] mx-auto mt-6"></div>
        </div>

        {/* Carosello */}
        <div className="max-w-6xl mx-auto relative px-2 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={10}
            slidesPerView={1} // 1 pagina su mobile
            navigation={true}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2, // 2 pagine su desktop
                spaceBetween: 0,  // Attaccate come un libro
              },
            }}
            className="menu-swiper rounded-lg shadow-2xl bg-white"
          >
            {tempImages.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center border-r border-gray-100">
                <div className="relative w-full aspect-[1/1.41] bg-white">
                  <Image
                    src={src}
                    alt={`Pagina ${index + 1}`}
                    fill
                    className="object-cover md:object-contain" // Cover su mobile per riempire, Contain su desktop
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Stili per personalizzare le frecce e i pallini */}
          <style jsx global>{`
            .menu-swiper {
              padding-bottom: 60px !important;
            }
            .swiper-button-next, .swiper-button-prev {
              color: #800020 !important;
              background: white;
              width: 50px !important;
              height: 50px !important;
              border-radius: 50%;
              box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            }
            .swiper-button-next:after, .swiper-button-prev:after {
              font-size: 20px !important;
              font-weight: bold;
            }
            .swiper-pagination-bullet-active {
              background: #800020 !important;
            }
            @media (max-width: 768px) {
              .swiper-button-next, .swiper-button-prev {
                width: 40px !important;
                height: 40px !important;
              }
            }
          `}</style>
      
        </div>

      </div>
    </main>
  );
}