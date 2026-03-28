"use client";

import React from 'react';

export default function CookiePolicy() {
  const mattone = '#642d3a';

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', color: '#333' }}>
        
        <h1 style={{ 
          fontFamily: 'var(--font-playfair), serif', 
          fontSize: '3rem', 
          color: mattone, 
          marginBottom: '40px',
          borderBottom: `1px solid ${mattone}22`,
          paddingBottom: '20px'
        }}>
          Cookie Policy
        </h1>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Cosa sono i Cookie?</h2>
          <p style={pStyle}>
            I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale, 
            dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Tipologie di Cookie utilizzati</h2>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: 'bold' }}>Cookie Tecnici</h3>
            <p style={pStyle}>Essenziali per il corretto funzionamento del sito e per la gestione delle sessioni.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold' }}>Cookie di Terze Parti</h3>
            <p style={pStyle}>Il sito potrebbe utilizzare servizi come Google Maps per mostrare la nostra posizione.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Come disabilitare i Cookie</h2>
          <p style={pStyle}>
            Puoi gestire le tue preferenze sui cookie direttamente dal tuo browser. Ricorda che disabilitando 
            i cookie tecnici alcune funzionalità del sito potrebbero non essere disponibili.
          </p>
        </section>
      </div>
    </main>
  );
}

const sectionStyle = { marginBottom: '35px' };
const h2Style = { fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: '#333' };
const pStyle = { lineHeight: '1.8', fontSize: '1.1rem', color: '#555' };