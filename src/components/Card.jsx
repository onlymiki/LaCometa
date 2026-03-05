import ButtonWhite from "./ButtonWhite";

function Card({ img, title, description, buttonText, buttonLink }) {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b from-white via-orange-50 to-orange-100 backdrop-blur-lg rounded-3xl shadow-xl p-6 h-full border border-gray-200/40 overflow-hidden">
        <div className="w-full h-48 flex justify-center rounded-2xl mb-4 overflow-hidden">
          <img
            src={img}
            alt="immagine"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col flex-grow items-center text-center">
          <h4 className="text-3xl font-bold mb-2 text-orange-600 font-['Sour_Gummy']">
            {title}
          </h4>
          <p className="text-gray-700 mb-6">{description}</p>
        </div>

        <div className="mt-auto w-full flex justify-center">
          <ButtonWhite text={buttonText} link={buttonLink} />
        </div>
      </div>
    </>
  );
}

export default Card;
