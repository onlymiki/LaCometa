import { useNavigate } from "react-router-dom";

function ButtonRed({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="w-48 bg-red-900 text-red-50 px-6 py-3 rounded-full hover:font-bold hover:bg-red-50 hover:text-red-900 transition duration-300 font-['Krona_One']"
    >
      {text}
    </button>
  );
}

export default ButtonRed;
