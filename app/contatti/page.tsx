"use client";
import Link from 'next/link';

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* --- SEZIONE SUPERIORE: CONSEGNE --- */}
        <section className="text-center mb-24 space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-tight">
            Tutto il gusto della nostra cucina<br />
            comodamente a casa!
          </h1>
          
          <div className="space-y-2">
            <p className="text-gray-600 text-lg md:text-xl font-light">
              Si effettuano consegne a domicilio presso Fossoli — 2,50 € / Fuori — 3,50 €
            </p>
            <p className="text-gray-500 italic">
              Per ulteriori informazioni contattaci telefonicamente — a presto!
            </p>
          </div>
        </section>

        <hr className="border-gray-100 mb-24" />

        {/* --- SEZIONE INFERIORE: INFO E MAPPA --- */}
        <section className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Colonna Sinistra: Testi */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">
              Informazioni Utili
            </h2>
            
            <div className="space-y-6">
              {/* Indirizzo */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <Link 
                  href="https://maps.app.goo.gl/8g1PcswXgE7wTj1n7" 
                  target="_blank"
                  className="text-gray-700 hover:text-[#800020] transition-colors"
                >
                  <p className="text-lg">Via mare Adriatico, 30, 41012 Fossoli MO - <span className="font-bold border-b border-gray-400">Vai alle indicazioni stradali</span></p>
                </Link>
              </div>

              {/* Telefono */}
              <div className="flex items-center gap-4">
                <div className="text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <p className="text-lg text-gray-700">Numero di telefono - <span className="font-bold">059 867 8400
</span></p>
              </div>

              {/* WiFi */}
              <div className="flex items-center gap-4">
                <div className="text-[#800020]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                </div>
                <p className="text-lg text-gray-700">Accesso libero al Wifi</p>
              </div>
            </div>
          </div>

          {/* Colonna Destra: Mappa */}
          <div className="w-full h-[400px] rounded-sm overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.467882206771!2d10.875317376674646!3d44.7508493807279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f97a6e133c94f%3A0x6d0e3a6773a9856a!2sIl%20Tulipano!5e0!3m2!1sit!2sit!4v1709990000000!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </section>
      </div>
    </main>
  );
}