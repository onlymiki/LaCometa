import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true); // Decide se la nav è visibile
  const [lastScrollY, setLastScrollY] = useState(0); // Memorizza l'ultimo punto di scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Gestione Sfondo (come prima)
      setScrolled(currentScrollY > 50);

      // 2. Gestione Visibilità (Mostra se sali, nascondi se scendi)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Sto scendendo e ho superato i 100px -> Nascondi
        setVisible(false);
        setIsOpen(false); // Chiude il menu mobile se scendi
      } else {
        // Sto salendo -> Mostra
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]); // Aggiungiamo lastScrollY come dipendenza

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/aboutme", label: "About Me" },
    { to: "/contatti", label: "Contacts" },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 flex md:flex-col lg:flex-row md:gap-4 lg:gap-0 items-center justify-between px-6 py-3 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-md rounded-2xl mx-4 top-4"
            : "bg-transparent top-4"
        } ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        {/* SEZIONE LOGO */}
        <div className="flex-1">
          <div className="text-2xl text-orange-800 font-['Krona_One'] tracking-[0.25em] uppercase whitespace-nowrap">
            La Cometa
          </div>
        </div>

        {/* SEZIONE MENU */}
        <ul
          className={`absolute left-6 right-6 top-14 flex-col gap-1 p-3 bg-white rounded-xl shadow-xl md:static md:flex md:flex-row md:gap-2 md:p-0 md:bg-transparent md:shadow-none ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.to} className="list-none">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full text-lg no-underline transition-transform duration-150 ease-out hover:-translate-y-0.5 ${
                    isActive
                      ? "text-orange-800 font-bold"
                      : "text-slate-900 hover:text-orange-800"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* SEZIONE DESTRA */}
        <div className="flex-1 flex justify-end">
          <button
            className="inline-flex flex-col justify-center gap-1 w-8 h-8 rounded-full border border-orange-100 bg-white cursor-pointer p-1 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="w-full h-0.5 rounded-full bg-orange-800" />
            <span className="w-full h-0.5 rounded-full bg-orange-800" />
            <span className="w-full h-0.5 rounded-full bg-orange-800" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
