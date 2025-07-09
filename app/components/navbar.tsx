const NavBar = () => {
    return <div className="flex flex-row bg-gray-800 p-4">
                <div className="text-white items-center text-2xl font-bold mr-5 pr-5">
                    JC
                </div>
                <nav className="flex items-center space-x-4">
                    <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                </nav>
            </div>;
};

export default NavBar;
