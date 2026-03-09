"use client"; // Necessario per far funzionare il timer del carosello
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // Lista delle tue foto reali caricate su VS Code
  const slides = [
    "/hero1-tulipano-carpi.webp",
    "/pizza-margherita-con-basilico-tulipano.webp",
    "/filetto-di-carne-alla-griglia-tulipano.webp",
    "/scaffale-dei-vini-tulipano.webp",
    "/tavolo-con-tovaglia-tulipano.webp",
    "/lampade-soffitto-tulipano.webp"
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Logica per il cambio immagine automatico (5 secondi come su Elementor)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      
      {/* 1. HERO SECTION CON CAROSELLO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        
        {/* Overlay scuro per leggere bene i testi */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Immagini del Carosello */}
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
                className="object-cover scale-105" // Leggero zoom per effetto profondità
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Testi e Pulsanti (Invariati come richiesto) */}
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg tracking-tight">
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

        {/* Indicatori del carosello (Pallini in basso) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* 2. INFO RAPIDE (Colori armonizzati) */}
      <section className="py-12 bg-[#F9F6F2] border-b border-[#E5D3B3]">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-[#800020]">Prenotazioni</h3>
            <p className="text-lg">Chiama allo <span className="font-bold underline">059 9110390</span></p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-[#800020]">Orari Apertura</h3>
            <p className="text-lg">Tutti i giorni: 12:00-14:30 / 19:00-00:00</p>
            <p className="text-xs text-red-600 mt-1 font-bold">APERTI ANCHE I FESTIVI</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-[#800020]">Servizi</h3>
            <p className="text-lg">Ristorante & Pizzeria</p>
            <p className="text-sm mt-2 text-gray-500 italic uppercase">Asporto e Domicilio</p>
          </div>
        </div>
      </section>

{/* 3. SEZIONE DESCRIZIONE (Esattamente come in foto) */}
      <section className="py-20 container mx-auto px-4">
        {/* Parte Superiore: Titolo e Testo affiancati */}
        <div className="flex flex-col md:flex-row mb-12 items-start justify-between">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-serif text-[#333333] leading-tight">
              Ristorante<br />Pizzeria
            </h2>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="text-xl leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-[#800020] first-letter:mr-3 first-letter:float-left">
              La specialità del Tulipano è sicuramente la pizza in tutte le sue varietà, ma non
              mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. A
              pranzo inoltre potrete sperimentare il nostro menù del giorno, perfetto per chi ha una
              pausa pranzo breve ma che non vuole rinunciare al gusto del buon cibo.
            </p>
          </div>
        </div>

        {/* Parte Inferiore: Griglia di 3 Immagini */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 w-full overflow-hidden shadow-sm">
            <Image 
              src="/piatto-di-pasta-gambero.webp" 
              alt="Pasta" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden shadow-sm">
            <Image 
              src="/pizza-acchiughe.webp" 
              alt="Pizza" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden shadow-sm">
            <Image 
              src="/filetto-rucola.webp" 
              alt="Carne" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

{/* 4. PREVIEW MENU */}
      <section className="py-16 bg-[#6D1919] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-[#D4AF37]">I Nostri Piatti</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {/* Righe esistenti */}
            <MenuItem name="Gnocco Fritto con Affettati Misti" price="14,00€" />
            <MenuItem name="Tortelli Verdi Vecchia Modena" price="12,00€" />
            <MenuItem name="Carbonara Romana" price="12,00€" />
            <MenuItem name="Filetto di Fassona Piemontese" price="29,00€" />
            <MenuItem name="Antipasto di Mare Tulipano" price="24,00€" />
            <MenuItem name="Spaghettone allo Scoglio" price="19,00€" />
            <MenuItem name="Risotto ai Frutti di Mare" price="18,00€" />
            <MenuItem name="Fritto Misto di Pesce" price="18,00€" />

            {/* Nuove due righe (4 piatti) */}
            <MenuItem name="Tagliata di Manzo al Rosmarino" price="22,00€" />
            <MenuItem name="Tortelloni Burro e Oro" price="13,00€" />
            <MenuItem name="Pizza Gourmet del Mese" price="12,50€" />
            <MenuItem name="Grigliata Reale di Pesce" price="26,00€" />
          </div>

          {/* Pulsante per il Menù Intero */}
          <div className="text-center mt-16">
            <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-3 rounded-sm font-bold transition-all duration-300 uppercase tracking-[0.2em] text-sm">
              Guarda tutto il menù
            </button>
          </div>
        </div>
      </section>

{/* 5. SEZIONE SPAZI (Organizzata esattamente come lo screenshot) */}
      <section className="py-20 container mx-auto px-4">
        {/* Parte Superiore: Titolo e Descrizione in due colonne */}
        <div className="flex flex-col md:flex-row mb-12 items-start justify-between">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-serif text-[#333333] leading-tight tracking-tighter">
              I nostri<br />Spazi
            </h2>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-12">
            <p className="text-xl leading-relaxed text-gray-700 tracking-tight">
              Al Tulipano sarete accolti con un caloroso sorriso e la massima professionalità. 
              Potrete scegliere se rilassarvi nella nostra elegante sala principale o nel nostro 
              accogliente dehor, riscaldato durante l&apos;inverno e piacevolmente fresco in estate, 
              per un&apos;esperienza di comfort in ogni stagione.
            </p>
          </div>
        </div>

        {/* Parte Inferiore: Immagine Grande Orizzontale */}
        <div className="relative h-[500px] w-full overflow-hidden shadow-lg group">
          <Image 
            src="/tulipanocarpi-interno-1.webp" 
            alt="Interni Il Tulipano" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay leggero opzionale per eleganza */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </section>


{/* 5.5 SEZIONE CTA PRENOTAZIONE CON PIZZA A DESTRA */}
      <section className="relative py-20 bg-[#6D1919] text-center px-4 overflow-visible">
        {/* Immagine Pizza Footer a destra - Sborda verso il basso */}
        <div className="absolute right-0 bottom-[-100px] z-30 hidden lg:block w-[400px] h-[400px]">
          <Image 
            src="/pizzafooter.webp" 
            alt="Pizza dettaglio" 
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tighter border-b-2 border-white inline-block pb-2">
            Riserva un tavolo
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed tracking-tight">
            Prenota ora e siediti a tavola con le persone che più contano per te. 
            Vi aspetta un&apos;esperienza culinaria che siamo sicuri vi lascerà a bocca aperta!
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-[#E5B54F] hover:bg-[#D4A43D] text-white px-10 py-4 rounded-sm font-bold transition-all uppercase tracking-[0.2em] shadow-lg">
              Prenota un tavolo
            </button>

            <div className="mt-4">
              <p className="text-white/70 italic tracking-tight">o Prenota il tuo spazio chiamando allo</p>
              <a 
                href="tel:0599110390" 
                className="text-3xl font-bold text-white hover:text-[#E5B54F] transition-colors"
              >
                059 9110390
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 6. FOOTER (Colori Sito Originale) */}
      <footer className="bg-[#111111] py-16 text-gray-400 border-t border-[#800020]/30">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm">
          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-widest">Dove Siamo</h4>
            <p className="text-white font-medium">Via A. Moro Interna, 1R</p>
            <p>41012 Carpi (MO)</p>
            <p className="mt-4 text-[#800020] font-bold cursor-pointer hover:text-white transition">VAI ALLE INDICAZIONI</p>
          </div>
          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-widest">Orari</h4>
            <p>Aperto tutti i giorni:</p>
            <p className="text-white">Pranzo: 12:00/15:00</p>
            <p className="text-white">Cena: 18:00/00:00</p>
          </div>
          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-widest">Contatti</h4>
            <p>Enjoy SRL - P. IVA 03831040369</p>
            <div className="flex gap-4 mt-4">
               <span className="bg-[#800020] p-2 text-white rounded-full cursor-pointer hover:bg-white hover:text-black transition">FB</span>
               <span className="bg-[#800020] p-2 text-white rounded-full cursor-pointer hover:bg-white hover:text-black transition">IG</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Il Tulipano - Developed with Next.js & Vercel
        </div>
      </footer>

    </main>
  );
}

// Componente MenuItem con tipi corretti per TypeScript
function MenuItem({ name, price }: { name: string, price: string }) {
  return (
    // Ho cambiato 'border-gray-800' con 'border-[#D4AF37]/30' (oro semitrasparente)
    <div className="flex justify-between items-baseline border-b border-[#D4AF37]/30 pb-2 group hover:border-[#D4AF37] transition-colors duration-300">
      <span className="text-md font-light uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
        {name}
      </span>
      <span className="text-[#D4AF37] font-bold ml-4">{price}</span>
    </div>
  );
}