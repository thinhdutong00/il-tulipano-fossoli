"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Colori brand (usando il bordeaux e panna salvati)
  const mattone = '#642d3a'; 
  const panna = '#ffefcc';

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se scendo oltre i 100px nascondo, se risalgo mostro
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    // Blocca lo scroll della pagina quando il menu mobile è aperto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '90px',
          backgroundColor: '#001a3d',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          zIndex: 1000,
          transition: 'transform 0.4s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          width: '92%', 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          
          {/* 1. LOGO (Sinistra) */}
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
            <Link href="/">
              <Image src="logo.png" alt="Il Tulipano" width={180} height={80} priority style={{ objectFit: 'contain' }} />
            </Link>
          </div>

          {/* 2. NAVBAR (Centro - Solo Desktop) */}
          <nav className="hidden lg:flex" style={{ flex: '2', justifyContent: 'center', gap: '30px' }}>
            <Link href="/" style={{ ...navLinkStyle, color: '#ffffff' }}>Home</Link>
            <Link href="/informazioni" style={{ ...navLinkStyle, color: '#ffffff' }}>Informazioni</Link>
            
            <div className="relative group" onMouseEnter={() => setActiveDropdown('menu')} onMouseLeave={() => setActiveDropdown(null)}>
              <button style={{ ...navLinkStyle, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                Menù <ChevronDown size={12} />
              </button>
              {activeDropdown === 'menu' && (
                <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '15px', width: '220px' }}>
                  <div style={{ backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderTop: `4px solid ${mattone}`, padding: '10px 0', borderRadius: '4px' }}>
                    {/* I link qui sotto mantengono lo stile dropdownLinkStyle (testo scuro su fondo bianco) */}
                    <Link href="/menu" className="dropdown-link" style={dropdownLinkStyle}>Menù Completo</Link>
                    <Link href="/menu-feste" className="dropdown-link" style={dropdownLinkStyle}>Menù Feste</Link>
                    <Link href="/pizza-del-mese" className="dropdown-link" style={dropdownLinkStyle}>Pizza del Mese</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/galleria" style={{ ...navLinkStyle, color: '#ffffff' }}>
              Galleria
            </Link>

            <Link href="/contatti" style={{ ...navLinkStyle, color: '#ffffff' }}>
              Contatti
            </Link>
          </nav>

          {/* 3. AZIONI (Destra - Telefono e Prenota) */}
          <div className="hidden lg:flex" style={{ flex: '1', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
            <a href="tel:0598678400" style={{ 
              color: '#ffffff', // Icona e Numero ora sono bianchi
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              textDecoration: 'none', 
              fontSize: '14px', 
              fontWeight: '700' 
            }}>
              <Phone size={18} color="#ffffff" /> {/* Forza l'icona in bianco */}
              <span>059 867 8400</span>
            </a>
            
            <Link href="/prenota-un-tavolo" style={{ 
              backgroundColor: mattone, 
              color: '#ffffff', // Testo interno al pulsante ora è bianco
              padding: '12px 24px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontSize: '11px', 
              fontWeight: '800', 
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Prenota
            </Link>
          </div>

          {/* HAMBURGER (Solo Mobile) */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Menu size={32} color={mattone} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: mattone,
        zIndex: 2000,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top bar mobile: Logo a sx e X a dx */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', height: '90px' }}>
          <Image src="/logo.png" alt="Logo" width={120} height={45} style={{ filter: 'brightness(0) invert(1)' }} />
          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X size={40} />
          </button>
        </div>

        {/* Links e Pulsanti Mobile */}
        <nav style={{ padding: '40px 10%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={mobileNavLinkStyle}>Home</Link>
          <Link href="/informazioni" onClick={() => setIsMenuOpen(false)} style={mobileNavLinkStyle}>Informazioni</Link>
          <Link href="/menu" onClick={() => setIsMenuOpen(false)} style={mobileNavLinkStyle}>Il Menù</Link>
          <Link href="/menu-feste" onClick={() => setIsMenuOpen(false)} style={{ ...mobileNavLinkStyle, color: panna }}>Menù Feste</Link>
          <Link href="/galleria" onClick={() => setIsMenuOpen(false)} style={mobileNavLinkStyle}>Galleria</Link>
          <Link href="/contatti" onClick={() => setIsMenuOpen(false)} style={mobileNavLinkStyle}>Contatti</Link>
          
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/prenota-un-tavolo" onClick={() => setIsMenuOpen(false)} style={{ 
              backgroundColor: panna, 
              color: mattone, 
              textAlign: 'center', 
              padding: '18px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '900', 
              textTransform: 'uppercase',
              fontSize: '14px'
            }}>
              Prenota un tavolo
            </Link>
            <a href="tel:0599110390" style={{ 
              border: `1px solid ${panna}`, 
              color: panna, 
              textAlign: 'center', 
              padding: '18px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '900', 
              textTransform: 'uppercase',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <Phone size={20} /> Chiama Ora
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

// Stili riutilizzabili per pulizia
const navLinkStyle: React.CSSProperties = {
  color: '#333333',
  textDecoration: 'none',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'color 0.3s'
};

const dropdownLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '12px 25px',
  textDecoration: 'none',
  color: '#333333',
  fontSize: '13px',
  fontWeight: '600',
  transition: 'background 0.3s'
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '2rem',
  fontFamily: 'serif',
  fontStyle: 'italic'
};