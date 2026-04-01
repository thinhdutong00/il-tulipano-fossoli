"use client"; // Necessario per far funzionare il timer del carosello
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // Lista delle tue foto reali caricate su VS Code
  const slides = [
    "/gramigna.jpeg",
    "/pizza-pomodoro-fossoli.jpeg",
    "/insalata-mare-fossoli.jpeg",
    "/birrafossoli.jpeg",
    "/muro-vino-fossoli.jpg"
   
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
            <p className="text-lg">Chiama allo <span className="font-bold underline">059 867 8400
</span></p>
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
              src="/pasta01.jpeg" 
              alt="pasta" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden shadow-sm">
            <Image 
              src="/pizza-pomodoro-fossoli.jpeg" 
              alt="Pizza" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden shadow-sm">
            <Image 
              src="/insalata-mare-fossoli.jpeg" 
              alt="mare" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

{/* 4. PREVIEW MENU */}
<section className="relative py-24 overflow-hidden">
  {/* IMMAGINE DI SFONDO STATICA */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/interno-05.jpg"
      alt="Interno Il Tulipano"
      fill
      className="object-cover"
    />
    {/* OVERLAY BLU SEMITRASPARENTE CON SFOCATURA */}
    <div className="absolute inset-0 bg-[#001a3d]/85 backdrop-blur-sm" />
  </div>

  <div className="container relative z-10 mx-auto px-4">
    {/* INTESTAZIONE IN GIALLO */}
    <div className="text-center mb-16">
      <span className="text-[#D4AF37]/80 uppercase tracking-[0.3em] text-[10px] font-bold block mb-2">
        Dalla nostra cucina
      </span>
      <h2 className="text-4xl md:text-5xl font-serif italic text-[#D4AF37]">
        I Nostri Piatti
      </h2>
      <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
    </div>
    
    {/* GRIGLIA PIATTI - Assicurati che il componente MenuItem usi il testo giallo o bianco per leggibilità */}
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
      <MenuItem name="Gnocco Fritto con Affettati Misti" price="14,00€" />
      <MenuItem name="Tortelli Verdi Vecchia Modena" price="12,00€" />
      <MenuItem name="Carbonara Romana" price="12,00€" />
      <MenuItem name="Filetto di Fassona Piemontese" price="29,00€" />
      <MenuItem name="Antipasto di Mare Tulipano" price="24,00€" />
      <MenuItem name="Spaghettone allo Scoglio" price="19,00€" />
      <MenuItem name="Risotto ai Frutti di Mare" price="18,00€" />
      <MenuItem name="Fritto Misto di Pesce" price="18,00€" />
    </div>

    {/* Pulsante per il Menù Intero in Giallo */}
    <div className="text-center mt-20">
      <button className="relative inline-flex items-center justify-center px-12 py-4 font-bold text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#001a3d] transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-xs shadow-xl">
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
            src="/interno-10.png" 
            alt="Interni Il Tulipano" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay leggero opzionale per eleganza */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </section>


{/* 5.5 SEZIONE CTA PRENOTAZIONE */}
<section className="relative py-20 bg-[#001a3d] text-center px-4 overflow-visible z-20">
  
  {/* Immagine Pizza: 
      - bottom-[-140px]: la spinge molto più in basso sopra il footer
      - right-[-30px]: la sposta leggermente verso l'esterno per un look più dinamico
  */}
  <div className="absolute right-[-30px] bottom-[-140px] z-50 hidden lg:block w-[320px]">
    <Image 
      src="/pizzafooter.webp" 
      alt="Dettaglio Pizza" 
      width={320}
      height={320}
      className="object-contain drop-shadow-2xl" 
      priority
    />
  </div>

  <div className="max-w-3xl mx-auto relative z-30">
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
        <a href="tel:0598678400" className="text-3xl font-bold text-white hover:text-[#E5B54F] transition-colors">
          059 8678400
        </a>
      </div>
    </div>
  </div>
</section>





    </main>
  );
}

// DEFINIZIONE DI MENUITEM (Versione senza effetto hover)
function MenuItem({ name, price }: { name: string, price: string }) {
  return (
    // Rimosso 'group' e 'hover:border-[#E5B54F]'
    <div className="flex justify-between items-baseline border-b border-[#D4AF37]/40 pb-2 transition-colors duration-300">
      {/* Rimosso 'group-hover:text-[#E5B54F]' e aumentata opacità per leggibilità */}
      <span className="text-md font-medium uppercase tracking-[0.15em] text-[#D4AF37]">
        {name}
      </span>
      <span className="text-[#D4AF37] font-bold ml-4">{price}</span>
    </div>
  );
}