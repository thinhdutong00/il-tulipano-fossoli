"use client";
import Image from 'next/image';

export default function BirrePage() {
  const birreAllaSpina = [
    { name: "Pilsner Urquell", desc: "La prima Pilsner al mondo, dal gusto inconfondibile.", price: "5.50€", tag: "Bionda" },
    { name: "Grolsch Weizen", desc: "Classica birra di frumento, fresca e fruttata.", price: "6.00€", tag: "Weiss" },
    { name: "Meantime IPA", desc: "Intensa, luppolata con note agrumate.", price: "6.50€", tag: "IPA" },
  ];

  const birreInBottiglia = [
    { name: "Peroni Gran Riserva", desc: "Doppio malto, gusto intenso e avvolgente.", price: "5.00€" },
    { name: "St. Benoit Blanche", desc: "Birra belga d'abbazia, leggera e speziata.", price: "6.00€" },
    { name: "San Biagio Artigianale", desc: "Eccellenza italiana non filtrata.", price: "7.50€" },
    { name: "Birra analcolica", desc: "Tutto il gusto della birra, senza alcol.", price: "4.00€" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* TITOLO PRINCIPALE */}
        <div className="text-center mb-20">
          <h2 className="text-[#E5B54F] uppercase tracking-[0.4em] text-xs mb-3">La Cantina del Luppolo</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Le Nostre Birre</h1>
          <div className="w-24 h-1 bg-[#800020] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed italic">
            "Una selezione accurata per accompagnare le nostre pizze e i nostri piatti di cucina, 
            dalle bionde classiche alle artigianali più ricercate."
          </p>
        </div>

        {/* SEZIONE: ALLA SPINA */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-serif italic text-[#E5B54F]">Alla Spina</h3>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {birreAllaSpina.map((birra, i) => (
              <div key={i} className="group relative">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold tracking-tight group-hover:text-[#E5B54F] transition-colors">
                    {birra.name}
                  </h4>
                  <span className="text-[#E5B54F] font-mono text-lg">{birra.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{birra.desc}</p>
                {birra.tag && (
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-widest bg-[#800020]/20 text-[#800020] px-2 py-0.5 border border-[#800020]/30">
                    {birra.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IMMAGINE DECORATIVA CENTRAL */}
        <div className="relative h-[450px] w-full my-24 rounded-sm overflow-hidden border border-white/5">
          <Image 
            src="/scaffale-dei-vini-tulipano.webp" 
            alt="Atmosfera Birreria" 
            fill 
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
               <span className="block text-5xl font-serif italic text-white drop-shadow-2xl">Qualità in ogni sorso</span>
            </div>
          </div>
        </div>

        {/* SEZIONE: IN BOTTIGLIA */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-serif italic text-[#E5B54F]">In Bottiglia</h3>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {birreInBottiglia.map((birra, i) => (
              <div key={i} className="flex justify-between items-start border-b border-white/5 pb-6">
                <div>
                  <h4 className="text-xl font-bold mb-1">{birra.name}</h4>
                  <p className="text-gray-500 text-sm">{birra.desc}</p>
                </div>
                <span className="font-bold text-gray-300">{birra.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER PAGINA */}
        <div className="text-center pt-20 border-t border-white/5">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-8">L'abuso di alcol è dannoso per la salute</p>
          <button className="bg-[#800020] hover:bg-[#a00028] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all">
            Prenota un tavolo
          </button>
        </div>

      </div>
    </main>
  );
}