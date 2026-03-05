import ButtonWhite from "../components/ButtonWhite";
import SocialBar from "../components/SocialBar";

function Contacts() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 pt-16 pb-24 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-20 pt-20 flex flex-col items-start relative z-10">
          <h1 className="sm:text-7xl text-5xl font-['Krona_One'] text-gray-800 leading-[1.2] lg:w-2/3 tracking-tight">
            Come<br></br>
            <span className="text-orange-600 italic">Trovarci?</span>
          </h1>

          <h3 className="text-gray-500 sm:text-3xl text-xl pt-8 pb-12 font-['Sour_Gummy'] italic max-w-xl">
            Siamo a Gaggiano in via Gramsci, 43. Siamo aperti dal martedì alla
            domenica!
          </h3>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-[1100px] mx-auto px-6 py-16 ">
          <div className="text-center sm:mb-12 mb-4">
            <h4 className="text-2xl sm:text-3xl font-['Krona_One'] text-gray-800 mb-2">
              I nostri <span className="text-orange-600">contatti</span>
            </h4>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Vieni a trovarci o chiamaci per ordini e informazioni. Siamo
              sempre felici di aiutarti!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-[#fcfcfc]/
                    60 p-8"
            >
              <h2 className="text-2xl text-orange-600 font-['Krona_One'] mb-4">
                Informazioni
              </h2>

              <div class N ame="text-gray-700 space-y-4">
                <div>
                  <span className="font-bold">Indirizzo: </span>
                  Via Gramsci, 43 - 20083 Gaggiano (MI)
                </div>

                <div>
                  <span className="font-bold">Telefono: </span>
                  <a href="tel:+39029086925" className="text-orange-600">
                    02 908 69 25
                  </a>
                </div>

                <div>
                  <span className="font-bold">Cellulare: </span>
                  <a href="tel:+393393119252" className="text-orange-600">
                    339 311 92 52
                  </a>
                </div>

                <div>
                  <span className="font-bold">Orari: </span>
                  <div className="mt-2 text-gray-700">
                    <div>Martedì - Sabato: 11:30 - 14:00 / 17:30 - 21:00</div>
                    <div>Domenica: 17:30 - 21:30</div>
                  </div>
                </div>

                <div>
                  <span className="font-bold">Chiuso: </span>
                  Lunedì e domenica a pranzo
                </div>
              </div>

              <div className="mt-8">
                <ButtonWhite text="Sfogli il menu" link="/menu" />
              </div>

              <div className="mt-12">
                <h3 className="text-2xl text-orange-600 font-['Krona_One']">
                  Seguici sui social
                </h3>
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <SocialBar />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/40 shadow-lg">
              <iframe
                title="mappa-la-cometa"
                src="https://www.google.com/maps?q=Via%20Gramsci%2043%20Gaggiano&output=embed"
                className="w-full h-80"
                a
                llowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 pb-3">
                  Orari di apertura
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Martedì - Sabato: 11:30 - 14:30 / 17:30 - 21 : 30</li>

                  <li>Domenica : 17:30 - 21:30</li>

                  <li className="pt-2 text-sm text-gray-500">
                    Gli orari possono variare durante festivi.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
