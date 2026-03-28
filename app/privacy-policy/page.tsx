"use client";

import React from 'react';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Informazioni Generali</h2>
          <p style={pStyle}>
            Benvenuti su Il Tulipano. La riservatezza dei nostri clienti è fondamentale. 
            In questa pagina descriviamo come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali 
            in conformità con il GDPR (Regolamento UE 2016/672).
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Titolare del Trattamento</h2>
          <p style={pStyle}>
            Il titolare del trattamento è <strong>Enjoy SRL</strong>, con sede legale in Via A. Moro Interna, 1R, 41012 Carpi (MO). 
            Per qualsiasi domanda, puoi contattarci all'indirizzo email del ristorante o telefonicamente.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Dati Raccolti</h2>
          <p style={pStyle}>
            Raccogliamo dati solo quando utilizzi i nostri servizi di prenotazione o ci contatti:
          </p>
          <ul style={{ ...pStyle, paddingLeft: '20px' }}>
            <li>Nome e Cognome</li>
            <li>Indirizzo Email</li>
            <li>Numero di telefono</li>
            <li>Dati di navigazione (tramite cookie)</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Finalità del Trattamento</h2>
          <p style={pStyle}>
            I dati vengono utilizzati esclusivamente per gestire le prenotazioni dei tavoli, 
            rispondere alle tue richieste e migliorare l'esperienza di navigazione sul sito. 
            Non cediamo i tuoi dati a terze parti per scopi pubblicitari.
          </p>
        </section>

        <div style={{ marginTop: '60px', fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </div>
      </div>
    </main>
  );
}

// Stili condivisi
const sectionStyle = { marginBottom: '35px' };
const h2Style = { fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', color: '#333' };
const pStyle = { lineHeight: '1.8', fontSize: '1.1rem', color: '#555' };