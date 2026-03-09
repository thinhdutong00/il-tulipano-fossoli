import Image from 'next/image';

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO DELLA PAGINA (Bottiglie) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image 
          src="/scaffale-dei-vini-tulipano.webp" 
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

      {/* 2. SEZIONE CITAZIONE: "Pensa, Credi, Sogna, Osa" */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] tracking-tight">
              Pensa, Credi, Sogna, Osa
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>Il Tulipano, nato a Carpi nel 2010, è situato a due passi dal centro storico della città in via Aldo Moro Interna 1R, vicino allo stadio di Carpi. Da noi troverete un&apos;atmosfera calda e accogliente, quasi familiare.</p>
              <p>Ogni dettaglio del nostro ristorante è stato pensato per rendere ancora più piacevole la vostra esperienza e per farvi godere ogni attimo passato insieme a noi. La specialità del Tulipano è sicuramente la pizza.</p>
            </div>
            <div className="space-y-6">
              <p>Ma non mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. A pranzo inoltre potrete sperimentare il nostro menù del giorno, perfetto per chi ha una pausa pranzo breve ma che non vuole rinunciare al gusto del buon cibo.</p>
              <p>Al Tulipano verrete accolti con un sorriso e professionalità e potrete scegliere se accomodarvi nella nostra sala principale o nel nostro dehor, riscaldato in inverno e fresco d&apos;estate.</p>
            </div>
          </div>
        </div>
      </section>

{/* 3. SEZIONE: LE NOSTRE SPECIALITÀ (ARANCIONE CON ONDE "PENNELLATE") */}
      <section className="relative bg-[#FFA500] text-white pt-32 pb-40 mt-[-1px] overflow-hidden">
        
        {/* SVG Onda Superiore - Curva omogenea e fluida */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-[calc(160%+1.3px)] h-[80px] md:h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V30c150,100,350,100,500,0S850-70,1200,30V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-medium text-center mb-20 tracking-tight font-serif italic">
            Le Nostre specialità
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Colonna Pizza */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold italic font-serif">Pizza</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                La nostra pizza è frutto di una paziente lievitazione e della ricerca di ingredienti italiani selezionati. 
                Cotto in forno a legna, il nostro impasto soffice e croccante non può che conquistarti al primo morso. 
                Dalle pizze classiche tradizionali alle speciali, ogni boccone è un&apos;esperienza unica.
              </p>
              <p className="text-lg opacity-95 leading-relaxed">
                Ci teniamo a sottolineare la qualità delle nostre materie prime, garantite dai nostri fornitori italiani.
              </p>
            </div>

            {/* Colonna Cucina */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold italic font-serif">Cucina</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                Al Tulipano anche la cucina occupa un posto di rilievo. Il nostro menù propone piatti a base di pesce fresco, 
                ma anche piatti della tradizione emiliana, come il gnocco fritto e i tortellini.
              </p>
              <p className="text-lg opacity-95 leading-relaxed">
                La preparazione dei nostri dolci è totalmente artigianale. Per la pausa pranzo proponiamo un menù del giorno 
                conveniente e variegato. Accettiamo anche buoni pasto Edenred.
              </p>
            </div>
          </div>
        </div>

        {/* SVG Onda Inferiore - Specchiata e fluida */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(160%+1.3px)] h-[80px] md:h-[150px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V30c150,100,350,100,500,0S850-70,1200,30V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

    </main>
  );
}