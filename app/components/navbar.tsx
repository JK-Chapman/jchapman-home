import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 flex flex-row justify-start mb-2 bg-gray-900/95 p-4 shadow-md border-b border-gray-800 z-50">
            <div className="text-white items-center text-2xl font-bold mr-5 pr-5">
                <a href="#about" className="text-gray-300 hover:text-white">
                    JC
                </a>
            </div>
            {/* Hamburger icon for mobile */}
            <button
                className="md:hidden ml-auto text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-4 ml-auto">
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
                <a href="#experience" className="text-gray-300 hover:text-white">Resume</a>
                <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </nav>
            {/* Mobile menu (always rendered for smooth transition) */}
            <div
                className={`
                    absolute top-full left-0 w-full bg-gray-900/95 border-b border-gray-800 flex flex-col items-center md:hidden z-40
                    transition-all duration-300 overflow-hidden
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
            >
                <a href="#about" className="py-2 text-gray-300 hover:text-white w-full text-center" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#experience" className="py-2 text-gray-300 hover:text-white w-full text-center" onClick={() => setMenuOpen(false)}>Resume</a>
                <a href="#projects" className="py-2 text-gray-300 hover:text-white w-full text-center" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" className="py-2 text-gray-300 hover:text-white w-full text-center" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </div>
    );
};

export default NavBar;