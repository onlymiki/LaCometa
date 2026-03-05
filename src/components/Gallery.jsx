import pizza1 from "./../img/margherita.png";
import pizza2 from "./../img/salame-piccante-bufala.png";
import pizza3 from "./../img/gabri.png";
import pizza4 from "./../img/gigante-mista.png";
import pizza5 from "./../img/colpa-alfredo.png";
import pizza6 from "./../img/albachiara.png";

function Gallery() {
  const galleryItems = [
    {
      img: pizza1,
      title: "Margherita",
      ingredients: "Pomodoro, mozzarella",
      price: "€6,00",
    },
    {
      img: pizza2,
      title: "Salame Piccante e Bufala",
      ingredients: "Pomodoro, mozzarella, salame piccante, bufala",
      price: "€8,50",
    },
    {
      img: pizza3,
      title: "Gabri",
      ingredients: "Mozzarella, patate al forno, salsiccia, rosmarino",
      price: "€9,00",
    },
    {
      img: pizza4,
      title: "Gigante Mista",
      ingredients: "La nostra selezione speciale in formato extra",
      price: "€15,00",
    },
    {
      img: pizza5,
      title: "Colpa di Alfredo",
      ingredients: "Mozzarella, panna, speck, noci, miele",
      price: "€9,50",
    },
    {
      img: pizza6,
      title: "Albachiara",
      ingredients: "Mortadella, stracciatella, granella di pistacchio",
      price: "€10,00",
    },
  ];

  return (
    <div className="w-full pt-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Intestazione */}
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl text-4xl font-['Krona_One'] text-gray-800 mb-4">
            La nostra <span className="text-orange-600 italic">galleria</span>
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg font-['Sour_Gummy'] italic">
            Ecco alcune delle nostre pizze più amate
          </p>
        </div>

        {/* Griglia Foto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-96"
            >
              {/* Immagine di sfondo */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Sfumato (Arancione/Nero) */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Testi sull'immagine */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white text-2xl font-['Krona_One']">
                    {item.title}
                  </h3>
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>

                <p className="text-orange-100/80 text-sm italic font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.ingredients}
                </p>

                <div className="w-0 group-hover:w-12 h-1 bg-orange-500 mt-4 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
