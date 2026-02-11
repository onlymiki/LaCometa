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
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 md:px-12 bg-orange-50 backdrop-blur-lg border-b border-orange-100 shadow-md">
        <div className="text-xl text-orange-500 font-['Krona_One'] tracking-[0.25em] uppercase">
          La Cometa
        </div>

        <button
          className="inline-flex flex-col justify-center gap-1 w-8 h-8 rounded-full border border-orange-100 bg-white cursor-pointer p-1 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="w-full h-0.5 rounded-full bg-orange-800" />
          <span className="w-full h-0.5 rounded-full bg-orange-800" />
          <span className="w-full h-0.5 rounded-full bg-orange-800" />
        </button>

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
                  `block px-3 py-2 rounded-full text-sm no-underline transition-transform duration-150 ease-out hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-orange-500 text-slate-50"
                      : "text-slate-900 hover:bg-orange-500 hover:text-slate-50"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
