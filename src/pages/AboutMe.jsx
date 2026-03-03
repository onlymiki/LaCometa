import Value from "../components/Value";
import Pizzeria1 from "/LaCometa.jpg";
import Pizzeria2 from "/Pizzeria-La-Cometa-Gaggiano.jpg";

function AboutMe() {
  return (
    <>
      <div className="bg-[#fcfcfc] min-h-screen">
        {/* SEZIONE HERO */}
        <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 pt-16 pb-24 border-b border-gray-100 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-20 pt-20 flex flex-col items-start relative z-10">
            <h1 className="sm:text-7xl text-5xl font-['Krona_One'] text-gray-800 leading-[1.2] lg:w-2/3 tracking-tight">
              La storia della
              <span className="text-orange-600 italic"> Cometa</span>
            </h1>

            <h3 className="text-gray-500 sm:text-3xl text-xl pt-8 pb-12 font-['Sour_Gummy'] italic max-w-xl">
              Da ragioniere a pizzaiolo, ho scelto di seguire la mia passione!
            </h3>
          </div>
        </div>

        {/* SEZIONE CONTENUTO */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-20 py-16">
          {/* BLOCCO 1: Testo + Immagine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
            <div>
              <h4 className="text-2xl sm:text-3xl font-['Krona_One'] text-gray-800 mb-6">
                Come è nata la{" "}
                <span className="text-orange-600">Pizzeria La Cometa?</span>
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <span className="italic">Correva l'anno 2009.</span> Una mattina
                come tante altre la sveglia mi ha tirato giù dal letto e
                catapultato nella frenesia della vita quotidiana:{" "}
                <span className="italic">
                  alzarsi, fare colazione, lavarsi, mettersi giacca e cravatta e
                  uscire di casa per affrontare il traffico.
                </span>
                Una volta assorbita la dose mattutina di smog, una volta corsi
                tutti i rischi del traffico dell'ora di punta e smaltito il
                cronico ingorgo stradale da giorno di pioggia, sono finalmente
                giunto in ufficio, dove il mio impiego di ragioniere mi avrebbe
                costretto a contare i soldi degli altri.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <span className="font-bold text-orange-500 italic">
                  Quel giorno è scattato qualcosa.{" "}
                </span>
                Non so dire cosa sia stato, non riesco a ricordare se ci sia
                stata una particolare goccia che ha fatto traboccare il vaso.
                <span className="italic">
                  {" "}
                  Quello che so è che quella è stata la mattina in cui ho detto:
                  'Basta'!
                </span>{" "}
                Era già un po' di tempo che pensavo a quanto mi sarebbe piaciuto
                dedicarmi a tempo pieno alla mia personale passione per la
                cucina e in particolare per la{" "}
                <span className="font-bold text-orange-500 italic">pizza</span>:
                forse era giunto davvero il momento di fare quel salto.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Quando già mi stavo crogiolando nelle idilliache immagini del
                mio sogno ad occhi aperti, quello scomodo personaggio che
                chiamiamo{" "}
                <span className="font-bold text-orange-500 italic">
                  "coscienza"
                </span>{" "}
                si è svegliato e ha cercato, metaforicamente, di entrare in
                ufficio per mettermi i bastoni tra le ruote. Ricordandomi che
                avevo un lavoro sicuro, che stavo per fare un salto nel buio e
                che avevo una famiglia a cui badare. Al primo momento mi sono
                limitato a chiudergli la porta in faccia e a ritornare al mio
                sogno. Nei giorni seguenti, però,{" "}
                <span className="italic">
                  ho lasciato inavvertitamente la porta socchiusa
                </span>{" "}
                e i dubbi sono ritornati.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border-4 border-orange-200 flex items-center justify-center">
                <span className="text-gray-400 text-center px-6">
                  📸 Spazio per foto del tuo percorso
                </span>
              </div>
            </div>
          </div>

          {/* CITAZIONE 1 */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-orange-500 p-8 mb-16 md:mb-20 rounded-r-lg">
            <p className="text-gray-700 text-xl italic font-['Sour_Gummy'] mb-3">
              "Dovevo farlo? Cosa rischiavo? Sarebbe stato giusto esporre la mia
              famiglia alle conseguenze di un eventuale passo falso?"
            </p>
            <p className="text-gray-500">— Il momento della svolta</p>
          </div>

          {/* BLOCCO 2: Immagine + Testo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
            <div className="flex flex-col gap-4 justify-center md:order-2">
              <img
                src={Pizzeria2}
                alt="Pizza"
                className="w-full h-auto rounded-lg border-4 border-orange-200"
              />
              <img
                src={Pizzeria1}
                alt="Pizza"
                className="w-full h-auto rounded-lg border-4 border-orange-200"
              />
            </div>
            <div className="md:order-1">
              <h4 className="text-2xl sm:text-3xl font-['Krona_One'] text-gray-800 mb-6">
                La passione per{" "}
                <span className="text-orange-600">l'impasto</span>
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ho scavato nella memoria in cerca di tutti i proverbi e delle
                varie espressioni popolari che potevano aiutarmi a corroborare
                la mia scelta.{" "}
                <span className="italic">
                  "Chi non risica, non rosica", "Aiutati che il ciel t'aiuta",
                  "Ogni lasciata è persa".
                </span>{" "}
                Alla fine è stata proprio la mia famiglia ad appoggiarmi e a
                darmi la forza e la fiducia necessarie a portare avanti questa
                mia iniziativa ricordandomi che...
              </p>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-orange-500 p-8 mb-6 rounded-r-lg">
                <p className="text-gray-700 text-xl italic font-['Sour_Gummy']">
                  "Si deve lavorare per vivere, non vivere per lavorare"
                </p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Così ho incrociato le dita e mi sono iscritto ad un corso, ho
                preso il mio bel diploma di pizzaiolo e{" "}
                <span className="font-bold text-orange-500 italic">
                  mi sono imbarcato in un'avventura
                </span>{" "}
                che dura dal maggio del 2010. <br></br>Adesso sono quasi 15 anni
                che esiste la Pizzeria La Cometa e, ragazzi, vi assicuro che
                fare come lavoro quello che più ti piace è tutta un'altra cosa:
                non ha prezzo!{" "}
                <span className="font-bold italic text-orange-500">
                  Se vuoi saperne di più vieni a trovarci a Gaggiano, in Via
                  Gramsci 43
                </span>
                , ti accoglieremo con un sorriso!
              </p>
            </div>
          </div>

          {/* BLOCCO 3: I nostri valori */}
          <div className="mb-16 md:mb-20">
            <h4 className="text-2xl sm:text-3xl font-['Krona_One'] text-gray-800 mb-8">
              I valori di <span className="text-orange-600">La Cometa</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Valore 1 */}
              <Value
                icon="🍕"
                title="Qualità degli ingredienti"
                description="Utilizziamo ingredienti freschi e di alta qualità, selezionati con cura per garantire il miglior sapore in ogni morso."
              />
              {/* Valore 2 */}
              <Value
                icon="❤️"
                title="Passione per la pizza"
                description="La pizza è la nostra passione e mettiamo tutto il nostro cuore in ogni pizza che prepariamo, cercando di trasmettere questa passione ai nostri clienti."
              />
              {/* Valore 3 */}
              <Value
                icon="🤝"
                title="Comunità"
                description="Cerchiamo il più possibile di soddisfare i nostri clienti, personalizzando le pizze e venendo incontro alle necessità di ciascuno."
              />
            </div>
          </div>

          {/* CITAZIONE 2 */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-orange-500 p-8 mb-16 md:mb-20 rounded-r-lg">
            <p className="text-gray-700 text-xl italic font-['Sour_Gummy'] mb-3">
              "Una buona pizza non è solo cibo, è un momento di gioia condiviso
              con le persone che ami."
            </p>
            <p className="text-gray-500">— La nostra missione</p>
          </div>

          {/* BLOCCO 4: Facts & Curiosità */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 md:p-12">
            <h4 className="text-2xl sm:text-3xl font-['Krona_One'] text-gray-800 mb-8">
              Un po' di curiosità
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-gray-500 text-sm mb-2">Da quando</p>
                <p className="text-3xl font-['Krona_One'] text-gray-800">
                  2010
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-gray-500 text-sm mb-2">Pizza preparate</p>
                <p className="text-3xl font-['Krona_One'] text-gray-800">
                  Migliaia
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-gray-500 text-sm mb-2">Clienti felici</p>
                <p className="text-3xl font-['Krona_One'] text-gray-800">
                  Infiniti
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-gray-500 text-sm mb-2">Passione</p>
                <p className="text-3xl font-['Krona_One'] text-gray-800">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
