"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO DELLA PAGINA */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image 
          src="/tulipanocarpi-grappa.webp" 
          alt="Sfondo Informazioni"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white drop-shadow-2xl">
            Informazioni
          </h1>
        </div>
      </section>

      {/* 2. SEZIONE CITAZIONE */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12 tracking-tight">
            Pensa, Credi, Sogna, Osa
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 text-left text-lg leading-relaxed">
            <p>
              Il Tulipano, nato a Carpi nel 2010, è situato a due passi dal centro storico della città in via Aldo Moro Interna 1R, vicino allo stadio di Carpi. Da noi troverete un’atmosfera calda e accogliente, quasi famigliare. Ogni dettaglio del nostro ristorante è stato pensato per rendere ancora più piacevole la vostra esperienza e per farvi godere ogni attimo passato insieme a noi. La specialità del Tulipano è sicuramente la pizza ma non
            </p>
            <p>
              mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. A pranzo inoltre potrete sperimentare il nostro menù del giorno, perfetto per chi ha una pausa pranzo breve ma senza rinunciare al gusto di un buon pasto.  Al Tulipano verrete accolti con un sorriso e professionalità e potrete scegliere se accomodarvi nella nostra sala principale o nel nostro dehor, riscaldato in inverno e fresco d’estate.
            </p>
          </div>
        </div>
      </section>

{/* 3. SEZIONE SPECIALITÀ E MENÙ */}
      <section className="relative bg-[#001a3d] text-white py-24">
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif italic text-center mb-20 tracking-tight">
            Le Nostre specialità
          </h2>

          {/* Pizza e Cucina */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold italic font-serif">Pizza</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                La nostra pizza è frutto di una paziente lievitazione e della ricerca di ingredienti italiani selezionati. 
                Cotto in forno a legna, il nostro impasto soffice e croccante non può che conquistarti al primo morso. 
                Dalle pizze classiche tradizionali alle speciali che abbinano ingredienti particolari, fino ai nostri calzoni e siluri, 
                ripieni super farciti e gustosi, ogni boccone è un’esperienza unica.
              </p>
              <p className="text-lg opacity-95 leading-relaxed italic">
                Entrando nel dettaglio ci teniamo a sottolineare la qualità delle nostre materie prime, garantite dai nostri 
                fornitori italiani con i quali vantiamo rapporti lavorativi decennali.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold italic font-serif">Cucina</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                Al Tulipano anche la cucina occupa un posto di rilievo. Il nostro menù propone piatti a base di pesce fresco, 
                ma anche piatti della tradizione emiliana, come il gnocco fritto, i tortelli e i tortellini.
              </p>
              <p className="text-lg opacity-95 leading-relaxed">
                La preparazione dei nostri dolci è totalmente artigianale e troverete dolci del giorno diversi ogni settimana. 
                Inoltre per la pausa pranzo proponiamo un menù del giorno conveniente e variegato. Accettiamo anche buoni pasto Edenred.
              </p>
            </div>
          </div>

          {/* BOX CTA MENÙ */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-sm overflow-hidden shadow-2xl group">
            <Image 
              src="/filetto-di-carne-alla-griglia-tulipano.webp" 
              alt="Guarda il menù"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Guarda il Menù</h3>
              <Link href="/menu">
                <button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-10 py-3 rounded-sm font-bold uppercase tracking-widest transition-all">
                  Vai Al Menù
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>


{/* 4. SEZIONE: ALTRI NOSTRI LOCALI */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold text-[#333333] mb-20 tracking-tight">
            Altri nostri locali
          </h2>

          <div className="space-y-24">
            
            {/* Locale 1: Vecchia Limidi */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-[#333333]">Il Tulipano Vecchia Limidi</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-3">
                    <span className="text-[#800020]">📍</span> Via Limidi 1087 - 41019 Soliera (MO) - 
                    <Link href="#" className="underline ml-1">Vai alle indicazioni stradali</Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#800020]">📞</span> Numero di telefono - 059 566708
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#800020]">📶</span> Accesso libero al Wifi
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-[#3b5998] rounded flex items-center justify-center text-white">FB</div>
                    <div className="w-10 h-10 bg-[#e4405f] rounded flex items-center justify-center text-white">IG</div>
                  </div>
                  <Link href="https://iltulipanovecchialimidi.it" target="_blank">
                    <button className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-3 rounded font-medium flex items-center gap-2 transition-colors">
                      Vai al Sito Web <span className="text-lg">›</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] rounded-sm overflow-hidden shadow-lg">
                <Image 
                  src="/tulipanolimidi-insegna.webp" // Sostituisci con l'immagine corretta se disponibile
                  alt="Il Tulipano Vecchia Limidi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

{/* Locale 2: Carpi */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-1">
                <h3 className="text-4xl font-bold text-[#333333]">Il Tulipano - Carpi</h3>
                <div className="space-y-3 text-gray-600">
                  <p>📍 Via A. Moro Interna, 1R, 41012 Carpi MO</p>
                  <p>📞 059 911 0390</p>
                  <p>📶 Accesso libero al Wifi</p>
                </div>
                <Link href="https://iltulipanocarpi.it" target="_blank">
                  <button className="bg-[#800020] text-white px-8 py-3 rounded font-medium transition-all hover:bg-[#600018]">
                    Vai al Sito Web ›
                  </button>
                </Link>
              </div>

              {/* Immagine Fossoli - Corretta senza bordi */}
              <div className="relative h-[350px] md:order-2 overflow-hidden bg-transparent">
                <Image 
                  src="/tulipanofossoli-card3.webp" 
                  alt="Il Tulipano Fossoli" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}