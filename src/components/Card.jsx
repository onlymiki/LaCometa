import ButtonRed from "./ButtonRed";

function Card({ img, title, description, buttonText }) {
  return (
    <>
      <div className="flex flex-col items-center bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-6 h-full border border-white/20 overflow-hidden">
        <img
          src={img}
          alt="immagine"
          className="w-full h-48 object-cover rounded-2xl mb-4"
        />

        <div className="flex flex-col flex-grow items-center text-center">
          <h4 className="text-3xl font-bold mb-2 text-orange-900 font-['Sour_Gummy']">
            {title}
          </h4>
          <p className="text-gray-900 mb-6">{description}</p>
        </div>

        <div className="mt-auto w-full flex justify-center">
          <ButtonRed text={buttonText} link="/menu" />
        </div>
      </div>
    </>
  );
}

export default Card;
