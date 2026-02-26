import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/aboutme", label: "About Me" },
    { to: "/contatti", label: "Contacts" },
  ];

  return (
    <>
      <nav className="sticky top-4 z-50 flex md:flex-col lg:flex-row md:gap-4 lg:gap-0 items-center justify-between px-6 py-3 md:px-12">
        {/* SEZIONE LOGO - flex-1 spinge tutto il resto verso il centro */}
        <div className="flex-1">
          <div className="text-2xl text-orange-800 font-['Krona_One'] tracking-[0.25em] uppercase whitespace-nowrap">
            La Cometa
          </div>
        </div>

        {/* SEZIONE MENU - Rimane al centro perché i due lati hanno flex-1 */}
        <ul
          className={`absolute left-6 right-6 top-14 flex-col gap-1 p-3 bg-white rounded-xl shadow-xl md:static md:flex md:flex-row md:gap-2 md:p-0 ${
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

        {/* SEZIONE DESTRA - Bilancia il logo. Su desktop è un flex-1 vuoto, su mobile c'è l'hamburger */}
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
