import ButtonWhite from "../components/ButtonWhite";
import Card from "../components/Card";
import pizza from "/pizza-home.png";
import pizza2 from "/pizza-home2.png";
import pizza3 from "/pizza-home3.png";

function Home() {
  return (
    <div className="bg-red-900 min-h-screen">
      {" "}
      {/* Sfondo scuro di base per evitare stacchi bianchi sotto */}
      {/* SEZIONE HERO (Sfondo sfumato) */}
      <div className="bg-gradient-to-b from-red-50 to-red-900 pt-16 pb-10">
        {/* Contenitore Limite per la Hero */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-20 pt-20">
          <h1 className="sm:text-6xl text-4xl font-['Krona_One'] text-white leading-relaxed md:w-1/2">
            Scopri le nostre pizze!
          </h1>
          <h3 className="text-white sm:text-4xl text-2xl pt-4 pb-8 font-['Sour_Gummy'] italic">
            Consegne a domicilio gratuite
          </h3>
          <ButtonWhite text="Menu" link="/menu" />
        </div>
      </div>
      {/* SEZIONE CARDS */}
      <div className="bg-red-900 flex flex-col items-center">
        {/* Contenitore Limite per le Card */}
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 pb-20">
          <h2 className="text-4xl text-white font-['Krona_One'] py-10 text-center">
            Tutte le nostre pizze
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              img={pizza}
              title="Pizze al Farro"
              description="La più antica varietà di frumento conosciuta e coltivata dall'uomo. Profumata, saporita, digeribile."
              buttonText="Scopri di più"
            />
            <Card
              img={pizza2}
              title="Pizze Giganti"
              description="Sono talmente grandi che se ne comprate un paio ci potete tappezzare tutto l'appartamento. Oppure mangiarle con i vostri amici."
              buttonText="Scopri di più"
            />
            <Card
              img={pizza3}
              title="Pizze agli 8 cereali"
              description="Grano duro e tenero, mais, avena, sesamo, segale, avena, orzo, miglio... La pizza più corposa, croccante e gustosa che abbiate mai provato."
              buttonText="Scopri di più"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
