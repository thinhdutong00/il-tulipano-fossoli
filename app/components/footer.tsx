"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mattone = '#800020';

  return (
    <footer style={{ position: 'relative', zIndex: 10, width: '100%', marginTop: 'auto' }}>
      {/* SEZIONE PRINCIPALE BIANCA */}
      <div style={{ backgroundColor: '#ffffff', padding: '64px 0', borderTop: '1px solid #f3f4f6' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px'
        }}>
          
          {/* Colonna: DOVE SIAMO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ 
              color: mattone, 
              fontFamily: 'var(--font-playfair), serif', 
              fontSize: '20px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              borderBottom: `1px solid ${mattone}1a`, // 1a è il 10% di opacità
              paddingBottom: '8px'
            }}>
              Dove Siamo
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Via mare Adriatico, 30,</p>
              <p style={{ color: '#6b7280', margin: 0 }}>41012 Fossoli (MO)</p>
            </div>
            <Link 
              href="https://maps.app.goo.gl/CsKeUuSEM7EgAoeK9" 
              target="_blank" 
              style={{ 
                color: mattone, 
                fontWeight: '700', 
                fontSize: '12px', 
                textDecoration: 'none', 
                textTransform: 'uppercase',
                marginTop: '8px'
              }}
            >
              VAI ALLE INDICAZIONI →
            </Link>
          </div>

          {/* Colonna: ORARI */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ 
              color: mattone, 
              fontFamily: 'var(--font-playfair), serif', 
              fontSize: '20px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              borderBottom: `1px solid ${mattone}1a`,
              paddingBottom: '8px'
            }}>
              Orari
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '4px' }}>
                <span style={{ fontWeight: '500' }}>Pranzo:</span> 
                <span>12:00 / 15:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '4px' }}>
                <span style={{ fontWeight: '500' }}>Cena:</span> 
                <span>18:00 / 00:00</span>
              </div>
            </div>
            <p style={{ fontSize: '10px', fontStyle: 'italic', color: '#9ca3af', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
              Aperto tutti i giorni
            </p>
          </div>

          {/* Colonna: CONTATTI */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ 
              color: mattone, 
              fontFamily: 'var(--font-playfair), serif', 
              fontSize: '20px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              borderBottom: `1px solid ${mattone}1a`,
              paddingBottom: '8px'
            }}>
              Contatti
            </h4>
            <p style={{ fontSize: '12px', color: '#9ca3af', textTransform: 'uppercase' }}>
              Enjoy SRL - P. IVA 03831040369
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="https://facebook.com" style={socialButtonStyle}>FB</Link>
              <Link href="https://instagram.com" style={socialButtonStyle}>IG</Link>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT SECTION NERA */}
      <div style={{ backgroundColor: '#000000', padding: '30px 0', textAlign: 'center' }}>
        <p style={{ 
          fontSize: '10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em', 
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0 0 15px 0', // Margine sotto per distanziarlo dai link
          lineHeight: '1.8',
          padding: '0 20px'
        }}>
          © {currentYear} Il Tulipano - ENJOY SRL Carpi (MO) via L. A. Muratori, 47, CAP 41012 P. IVA 03831040369 - REA MO - 421443 - Powered by Mago Digital
        </p>

        {/* LINK LEGALI INTEGRATI */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Sottile linea di separazione
          paddingTop: '15px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <Link href="/privacy-policy" style={{ 
            color: 'rgba(255, 255, 255, 0.4)', 
            fontSize: '9px', 
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            Privacy Policy
          </Link>
          
          <Link href="/cookie-policy" style={{ 
            color: 'rgba(255, 255, 255, 0.4)', 
            fontSize: '9px', 
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            Cookie Policy
          </Link>
        </div>
      </div>
      
    </footer>
  );
}

// Stile per i bottoncini social rotondi
const socialButtonStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#800020',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: 'bold',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s'
};