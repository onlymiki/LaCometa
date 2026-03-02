import { useNavigate } from "react-router-dom";

function ButtonWhite({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="
        w-52 
        bg-[#fcfcfc]
        text-orange-600 
        px-8 
        py-4 
        rounded-full 
        font-['Krona_One'] 
        text-sm
        tracking-wide
        shadow-lg 
        shadow-gray-300 
        transition-all 
        duration-300 
        ease-in-out
        hover:bg-orange-600 
        hover:text-white 
        hover:shadow-xl 
        hover:shadow-gray-400 
        hover:-translate-y-1
        active:scale-95
      "
    >
      {text}
    </button>
  );
}

export default ButtonWhite;
