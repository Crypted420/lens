/* eslint-disable react/prop-types */
import { Menu, X } from "lucide-react";
import { Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Header2 = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <header className="fixed bg-white top-0 left-0 w-full z-50">
      <div className="relative flex justify-between items-center p-4 md:p-10">
        <div className="flex items-center space-x-12">
          <h1 className="text-lg md:text-2xl text-black font-light tracking-wider">
            DREY·MIDE
          </h1>

          <nav className="hidden md:flex items-center space-x-8">
            {["Mining", "Indutrial", "Potraits", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/gallery${item.toLowerCase()}`}
                className="text-black/90 hover:text-black transition-colors font-light text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>

            <a
              href="mailto:hello@lenscraft.com"
              className="text-black/90 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-2 hover:bg-white/20 rounded-full transition-colors block md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;
