import { useState } from "react";
import GridItems from "../components/GridItems";
import Gallery from "../components/Gallery";
import ButtonWhite from "../components/ButtonWhite";
import pizzeData from "../data/pizze.json";

function Menu() {
  const [categoriaAttiva, setCategoriaAttiva] = useState("Tutte");

  const categorie = ["Tutte", ...new Set(pizzeData.map((p) => p.category))];

  const pizzeFiltrate =
    categoriaAttiva === "Tutte"
      ? pizzeData
      : pizzeData.filter((p) => p.category === categoriaAttiva);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* SEZIONE HERO */}
      <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 pt-16 pb-24 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-20 pt-20 flex flex-col items-start relative z-10">
          <h1 className="sm:text-7xl text-5xl font-['Krona_One'] text-gray-800 leading-[1.2] lg:w-2/3 tracking-tight">
            Il nostro
            <span className="text-orange-600 italic"> menù</span>
          </h1>

          <h3 className="text-gray-500 sm:text-3xl text-xl pt-8 pb-12 font-['Sour_Gummy'] italic max-w-xl">
            Scegli tra impasto cereali, al farro o classico! Pizze baby 0.50 €
            in meno rispetto al prezzo del listino
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                document
                  .getElementById("gallery-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="w-52 bg-white text-orange-600 px-8 py-4 rounded-full font-['Krona_One'] text-sm tracking-wide shadow-lg shadow-orange-900/10 transition-all duration-300 hover:bg-orange-600 hover:text-white hover:-translate-y-1 active:scale-95 text-center"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* SEZIONE MENU DINAMICA */}
      <div id="menu-section" className="relative px-4 sm:px-6 -mt-10 pb-20">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* BARRA CATEGORIE: Colori Grigio e Arancione */}
          <div className="top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-6 px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categorie.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaAttiva(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 font-['Krona_One'] tracking-tight ${
                    categoriaAttiva === cat
                      ? "bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105"
                      : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-600 border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* GRIGLIA PIZZE */}
          <div className="py-12 bg-white">
            <GridItems items={pizzeFiltrate} />
          </div>

          {/* FOOTER INTERNO SCHEDA: Colori Neutri */}
          <div className="bg-gray-50 py-10 text-center border-t border-gray-100">
            <p className="text-gray-400 text-xs tracking-[0.3em] uppercase font-bold">
              Pizzeria La Cometa • Passione per la qualità
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-orange-50 to-orange-100">
        {/* GALLERIA PIZZE */}
        <div id="gallery-section">
          <Gallery items={pizzeFiltrate} />
        </div>
        <div className="flex w-100 justify-center py-12">
          <button
            onClick={() => {
              document
                .getElementById("menu-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="w-52 bg-white text-orange-600 px-8 py-4 rounded-full font-['Krona_One'] text-sm tracking-wide shadow-lg shadow-orange-900/10 transition-all duration-300 hover:bg-orange-600 hover:text-white hover:-translate-y-1 active:scale-95 text-center"
          >
            Torna al Menù
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
