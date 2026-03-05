import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

function SocialBar() {
  return (
    <div className="flex gap-4 items-center">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/pizzeria_lacometa/"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-full bg-[#fcfcfc] text-orange-600 hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-orange-400/50 hover:scale-110 transition-all duration-300"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/p/Pizzeria-La-Cometa-100063619656736/?locale=it_IT"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-full bg-[#fcfcfc] text-orange-600 hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-orange-400/50 hover:scale-110 transition-all duration-300"
      >
        <FaFacebookF size={24} />
      </a>

      {/* TripAdvisor */}
      <a
        href="https://www.tripadvisor.it/Restaurant_Review-g2186400-d5270588-Reviews-Pizzeria_la_Cometa-Gaggiano_Province_of_Milan_Lombardy.html"
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-full bg-[#fcfcfc] text-orange-600 hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-orange-400/50 hover:scale-110 transition-all duration-300"
      >
        <FaTripadvisor size={24} />
      </a>
    </div>
  );
}

export default SocialBar;
