import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-black/40");

  // Background blur and color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavBg(
          "bg-black/80 backdrop-blur-xl border-b border-lightOrange/20 shadow-[0_2px_30px_rgba(255,140,0,0.15)]"
        );
      } else {
        setNavBg(
          "bg-black/40 backdrop-blur-md border-b border-gray-700/40 shadow-none"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navBg}`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        {/* ---------- Logo ---------- */}
        <a
          href="#home"
          className="relative text-2xl md:text-3xl font-extrabold tracking-wide text-lightOrange transition duration-300 
          hover:drop-shadow-[0_0_8px_rgba(255,140,0,0.6)]"
        >
          Blvck
          <span className="text-gray-300 font-semibold hover:text-lightOrange transition duration-300">
            Tumbler
          </span>
        </a>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-200 text-sm font-medium tracking-wide">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-lightOrange transition-colors duration-300">
                  {item}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-lightOrange group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* ---------- Hamburger ---------- */}
        <div
          className="md:hidden text-gray-200 cursor-pointer hover:text-lightOrange transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={28}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu
              size={28}
              className="transition-transform duration-300 scale-110"
            />
          )}
        </div>
      </div>

      {/* ---------- Mobile Drawer ---------- */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-black/95 via-neutral-950/95 to-black/90 backdrop-blur-xl 
        transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        } shadow-[0_10px_40px_rgba(255,140,0,0.15)]`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-gray-200 text-lg font-medium tracking-wide">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-lightOrange transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
