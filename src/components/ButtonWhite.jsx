import { useNavigate } from "react-router-dom";

function ButtonWhite({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="w-48 bg-white text-red-900 px-6 py-3 rounded-full hover:font-bold hover:bg-red-900 hover:text-white transition duration-300 font-['Krona_One']"
    >
      {text}
    </button>
  );
}

export default ButtonWhite;
