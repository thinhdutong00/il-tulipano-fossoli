"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PopupPromo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già chiuso il popup in precedenza
    const hasSeenPopup = localStorage.getItem('popup-hamburger-seen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 6000); // 6 secondi

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Salva nel browser che il popup è stato visto
    localStorage.setItem('popup-hamburger-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative animate-in fade-in zoom-in duration-500 max-w-[400px] w-full">
        
        {/* Pulsante di chiusura (X) */}
        <button 
          onClick={closePopup}
          className="absolute -top-4 -right-4 bg-[#642d3a] text-[#ffefcc] w-10 h-10 rounded-full flex items-center justify-center shadow-2xl z-[10000] hover:bg-red-800 transition-colors border-2 border-[#ffefcc]"
        >
          ✕
        </button>

        {/* Immagine Promo */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-2xl border-2 border-[#ffefcc]">
          <Image 
            src="/5632025c-829e-489c-9a97-392b49ed6653.jpg" // Assicurati che il nome file sia corretto in public/
            alt="Nuovo Hamburger Tulipano"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}