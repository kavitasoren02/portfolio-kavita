import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../../styles";
import { logo, menu, close } from "../../assets/index";
import { navLinks, type Navlink } from "../../constants";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlenavbrBg =
    location.pathname === "/" && !scrolled ? "bg-transparent" : "bg-black";
  return (
    <nav
      className={`${styles.paddingX} lg:ml-[70px]  fixed pt-2 top-0 left-0 w-full h-[60px] z-50 transition-colors duration-300 ${handlenavbrBg}`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white font-bold cursor-pointer flex text-[24px] sm:text-[30px] md:text-[30px] lg:text-[40px]">
            Kavita
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10 mr-[70px]">
          {navLinks.map((nav: Navlink) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white " : "text-[#9791a2]"
              } hover:text-white text-[23px] md:text-[18px] lg:text-[20px] font-medium cursor-pointer `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          {/* Menu / Close Icon */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } ml-[20px] p-6 bg-gradient-to-r from-[#605f5f] to-[#0f0f0f] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[9999] rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav: Navlink) => (
                <li
                  key={nav.id}
                  className={`font-poppins ${
                    active === nav.title ? "text-white" : "text-[#9791a2]"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
