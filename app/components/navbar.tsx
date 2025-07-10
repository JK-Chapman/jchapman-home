import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className="flex flex-row bg-gray-900/95 p-4 shadow-md border-b border-gray-800 z-10">
            <div className="text-white items-center text-2xl font-bold mr-5 pr-5">
                <a href="#home" className="text-gray-300 hover:text-white">
                    JC
                </a>
            </div>
            <nav className="flex items-center space-x-4">
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
                <a href="#about" className="text-gray-300 hover:text-white">Resume</a>
                <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </nav>
        </div>
    );
};

export default NavBar;