"use client";
import Link from 'next/link';

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#ffefcc] pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* --- SEZIONE SUPERIORE: HERO CONTATTI --- */}
        <section className="text-center mb-20 bg-[#001a3d] p-10 md:p-20 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorazione astratta */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#642d3a] opacity-10 rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-[#ffefcc] uppercase tracking-[0.3em] text-[12px] font-bold mb-6">
              Sempre al tuo fianco
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-8">
              Tutto il gusto della nostra cucina<br />
              comodamente a casa!
            </h1>
            
            <div className="inline-block bg-[#ffefcc]/10 backdrop-blur-md border border-[#ffefcc]/20 p-6 rounded-lg">
              <p className="text-[#ffefcc] text-lg md:text-xl font-light">
                Consegne a domicilio: Fossoli <span className="font-bold">2,50€</span> — Fuori <span className="font-bold">3,50€</span>
              </p>
              <p className="text-[#ffefcc]/70 italic mt-2">
                Chiamaci per ordinare i tuoi piatti preferiti
              </p>
            </div>
          </div>
        </section>

        {/* --- SEZIONE INFERIORE: INFO, ORARI E MAPPA --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Colonna 1: Info Base */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#642d3a]/5 space-y-10">
            <h3 className="text-2xl font-serif italic text-[#001a3d] border-b border-gray-100 pb-4">
              Informazioni
            </h3>
            
            <div className="space-y-8">
              {/* Indirizzo */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#642d3a]/10 rounded-full text-[#642d3a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Indirizzo</p>
                  <Link 
                    href="https://www.google.com/maps/dir//Via+Mare+Adriatico,+30,+41012+Carpi+MO" 
                    target="_blank"
                    className="text-[#001a3d] hover:text-[#642d3a] transition-colors font-medium"
                  >
                    Via mare Adriatico, 30<br />41012 Fossoli (MO)
                  </Link>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#642d3a]/10 rounded-full text-[#642d3a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Telefono</p>
                  <a href="tel:0598678400" className="text-[#001a3d] font-bold text-xl hover:text-[#642d3a]">
                    059 867 8400
                  </a>
                </div>
              </div>

              {/* Wifi */}
              <div className="flex items-center gap-4 text-gray-500">
                <div className="p-3 bg-gray-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                </div>
                <p className="text-sm">Accesso libero al Wifi</p>
              </div>
            </div>
          </div>

          {/* Colonna 2: Orari (Aggiunta per utilità) */}
          <div className="bg-[#642d3a] p-8 rounded-2xl shadow-sm text-[#ffefcc]">
            <h3 className="text-2xl font-serif italic border-b border-[#ffefcc]/20 pb-4 mb-6">
              Orari di Apertura
            </h3>
            <ul className="space-y-4">
              {[
                { d: "Lunedì", o: "12:00 - 14:30 / 18:30 - 23:00" },
                { d: "Martedì", o: "Chiuso" },
                { d: "Mercoledì", o: "12:00 - 14:30 / 18:30 - 23:00" },
                { d: "Giovedì", o: "12:00 - 14:30 / 18:30 - 23:00" },
                { d: "Venerdì", o: "12:00 - 14:30 / 18:30 - 23:30" },
                { d: "Sabato", o: "18:30 - 23:30" },
                { d: "Domenica", o: "12:00 - 15:00 / 18:30 - 23:00" },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-[#ffefcc]/10 pb-2 text-sm">
                  <span className="font-bold uppercase tracking-tighter">{item.d}</span>
                  <span className="font-light">{item.o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3: Mappa */}
          <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.0536767598855!2d10.893125676646535!3d44.82046897107025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f99994c9f1345%3A0x633e70d4c67364b!2sVia%20Mare%20Adriatico%2C%2030%2C%2041012%20Fossoli%20MO!5e0!3m2!1sit!2sit!4v1711818000000!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* CTA FINALE */}
        <div className="mt-20 text-center">
            <p className="text-[#001a3d] font-serif italic text-lg mb-4">Hai un evento speciale? Contattaci per menu personalizzati.</p>
            <div className="w-12 h-[1px] bg-[#642d3a] mx-auto mb-8"></div>
        </div>
      </div>
    </main>
  );
}