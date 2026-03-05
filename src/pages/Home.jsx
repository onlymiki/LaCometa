import ButtonWhite from "../components/ButtonWhite";
import Card from "../components/Card";
import pizza from "./../img/pizza-home.png";
import pizza2 from "./../img/pizza-home2.png";
import pizza3 from "./../img/pizza-home3.png";

function Home() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* SEZIONE HERO */}
      <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 pt-16 pb-24 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-20 pt-20 flex flex-col items-start relative z-10">
          <h1 className="sm:text-7xl text-5xl font-['Krona_One'] text-gray-800 leading-[1.2] lg:w-2/3 tracking-tight">
            Scopri le nostre
            <span className="text-orange-600 italic"> pizze</span>
          </h1>

          <h3 className="text-gray-500 sm:text-3xl text-xl pt-8 pb-12 font-['Sour_Gummy'] italic max-w-xl">
            L'impasto perfetto, ingredienti freschissimi e consegne a domicilio
            sempre gratuite.
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonWhite text="Contattaci" link="/contacts" />
          </div>
        </div>
      </div>

      {/* SEZIONE CARATTERISTICHE / CARDS */}
      <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 py-24">
        {/* Intestazione Sezione */}
        <div className="flex flex-col items-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Le nostre specialità
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-['Krona_One'] text-center">
            Pizzeria La Cometa
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 rounded-full mt-6"></div>
        </div>

        {/* Griglia delle Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-between">
          <Card
            img={pizza}
            title="Il nostro menu"
            description="Dalla classica Margherita alla gourmet con impasto ai cereali, ogni pizza è un capolavoro di gusto e qualità. Scopri il nostro menu completo!"
            buttonText="Scopri di più"
          />

          <Card
            img={pizza2}
            title="La storia de La Cometa"
            description="Nata nel 2010, La Cometa è cresciuta grazie alla passione per la pizza e alla dedizione alla qualità."
            buttonText="Scopri di più"
          />

          <Card
            img={pizza3}
            title="Come raggiungerci?"
            description="Siamo a Gaggiano, in via Gramsci 43. Vieni a trovarci o ordina la tua pizza preferita con consegna gratuita!"
            buttonText="Scopri di più"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
