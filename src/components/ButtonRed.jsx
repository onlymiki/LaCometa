import { useNavigate } from "react-router-dom";

function ButtonRed({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="w-48 bg-orange-600 text-white px-6 py-3 rounded-full hover:font-bold hover:bg-orange-700 hover:text-white transition duration-300 font-['Krona_One']"
    >
      {text}
    </button>
  );
}

export default ButtonRed;
