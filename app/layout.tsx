import './globals.css'

export const metadata = {
  title: 'Torneremo presto',
  description: 'Sito temporaneamente in manutenzione',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout() {
  return (
    <html lang="it">
      <body>
        <main
          style={{
            minHeight: '100vh',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f7f7f7',
            color: '#1d1d1d',
            fontFamily: 'Arial, sans-serif',
            padding: '24px',
          }}
        >
          <section
            style={{
              maxWidth: '620px',
              width: '100%',
              background: '#ffffff',
              borderRadius: '20px',
              padding: '48px 32px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            }}
          >
            <p
              style={{
                margin: '0 0 12px',
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#777',
              }}
            >
              Tulipano Fossoli
            </p>

            <h1
              style={{
                margin: '0 0 16px',
                fontSize: '40px',
                lineHeight: '1.1',
              }}
            >
              Torneremo presto
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#555',
              }}
            >
              Il sito è temporaneamente in manutenzione per un passaggio di
              gestione. Torneremo online il prima possibile.
            </p>
          </section>
        </main>
      </body>
    </html>
  )
}