export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="p-10 text-center bg-gray-50">
        <h1 className="text-5xl font-bold text-red-600">Il Tulipano Carpi</h1>
        <p className="mt-4 text-xl italic">Cucina Tradizionale, Pizzeria e specialità Pesce</p>
        <div className="mt-8 space-x-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-bold">Guarda il Menù</button>
          <button className="border-2 border-red-600 px-6 py-3 rounded-full font-bold">Prenota Tavolo</button>
        </div>
      </section>

      {/* Orari Rapidi */}
      <section className="p-10 grid md:grid-cols-2 gap-8 text-center border-y">
        <div>
          <h2 className="font-bold text-2xl uppercase">Orari</h2>
          <p>Tutti i giorni: 12:00-14:30 / 19:00-00:00</p>
        </div>
        <div>
          <h2 className="font-bold text-2xl uppercase">Contatti</h2>
          <p>Via A. Moro Interna, 1R, Carpi (MO)</p>
          <p className="font-bold">Tel: 059 9110390</p>
        </div>
      </section>

      {/* Sezione Menu Preview */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">I nostri piatti</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span>Gnocco Fritto con affettati</span>
            <span className="font-bold text-red-600">14,00€</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Tortelli Verdi Vecchia Modena</span>
            <span className="font-bold text-red-600">12,00€</span>
          </div>
        </div>
      </section>
    </main>
  );
}