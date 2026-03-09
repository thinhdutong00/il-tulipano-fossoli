"use client";
import Image from 'next/image';
import Link from 'next/link'; // Risolve l'errore "Cannot find name 'Link'"

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO DELLA PAGINA */}
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

      {/* 2. CITAZIONE */}
      <section className="py-24 px-4 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-12">
          Pensa, Credi, Sogna, Osa
        </h2>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 text-gray-600 text-left text-lg leading-relaxed">
          <p>Il Tulipano, nato a Carpi nel 2010, è situato a due passi dal centro storico della città in via Aldo Moro Interna 1R. Da noi troverete un&apos;atmosfera calda e accogliente, quasi familiare.</p>
          <p>Ma non mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. Al Tulipano verrete accolti con un sorriso e professionalità.</p>
        </div>
      </section>

      {/* 3. SEZIONE ARANCIONE: SPECIALITÀ + PRIVÈ */}
      <section className="relative bg-[#FFA500] text-white pt-32 pb-40 mt-[-1px] overflow-hidden">
        {/* Onda Superiore */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-[calc(160%+1.3px)] h-[80px] md:h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V30c150,100,350,100,500,0S850-70,1200,30V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif italic text-center mb-20">Le Nostre specialità</h2>
          
          {/* Pizza e Cucina */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold italic font-serif">Pizza</h3>
              <p className="opacity-95 leading-relaxed">La nostra pizza è frutto di una paziente lievitazione e della ricerca di ingredienti italiani selezionati. Ogni boccone è un&apos;esperienza unica.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold italic font-serif">Cucina</h3>
              <p className="opacity-95 leading-relaxed">Al Tulipano anche la cucina occupa un posto di rilievo con piatti a base di pesce fresco e della tradizione emiliana.</p>
            </div>
          </div>

          {/* BOX CTA MENÙ */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] mb-16 rounded-sm overflow-hidden shadow-2xl">
            <Image src="/filetto-di-carne-alla-griglia-tulipano.webp" alt="Menu" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold mb-6">Guarda il Menù</h3>
              <Link href="/menu">
                <button className="bg-[#FFA500] px-10 py-3 font-bold uppercase tracking-widest">Vai Al Menù</button>
              </Link>
            </div>
          </div>

          {/* PRIVÈ */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-4xl font-bold italic font-serif">Privè</h3>
            <p className="opacity-95 leading-relaxed text-lg">La nostra sala privè Tulipano è perfetta per chi cerca un ambiente riservato e raffinato dove festeggiare occasioni speciali. Offre un&apos;esperienza esclusiva con servizio personalizzato.</p>
            <div className="pt-6 border-t border-white/20">
              <p className="text-xl font-bold">059 9110390 — ristorantetulipanocarpi@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Onda Inferiore */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(160%+1.3px)] h-[80px] md:h-[150px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V30c150,100,350,100,500,0S850-70,1200,30V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* 4. FOOTER (Ripreso dallo screenshot) */}
      <footer className="bg-white py-20 px-4 text-[#333333]">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-12 text-sm uppercase tracking-widest">
          <div>
            <h4 className="font-bold mb-6 text-[#800020]">Dove Siamo</h4>
            <p>Via A. Moro Interna, 1R</p>
            <p className="mb-4">41012 Carpi (MO)</p>
            <Link href="#" className="text-[#800020] border-b border-[#800020]">Vai alle indicazioni →</Link>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#800020]">Orari</h4>
            <div className="flex justify-between mb-2"><span>Pranzo:</span><span>12:00 / 15:00</span></div>
            <div className="flex justify-between"><span>Cena:</span><span>18:00 / 00:00</span></div>
            <p className="mt-4 italic text-center lowercase text-gray-400">Aperto tutti i giorni</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#800020]">Contatti</h4>
            <p className="mb-4 lowercase opacity-50 text-[10px]">Enjoy SRL - P.IVA 03831040369</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#800020] rounded-full flex items-center justify-center text-white font-bold">FB</div>
              <div className="w-8 h-8 bg-[#800020] rounded-full flex items-center justify-center text-white font-bold">IG</div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] opacity-40 uppercase tracking-[0.3em]">
          © 2026 Il Tulipano — Excellence in Carpi — Developed with Next.js
        </div>
      </footer>
    </main> // Chiude correttamente il tag <main> risolvendo l'errore di VS Code
  );
}