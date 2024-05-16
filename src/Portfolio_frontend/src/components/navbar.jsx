import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const handleDownloadCV = () => {
           
            const link = document.createElement('a');
            link.href = myCV; 
            link.download = 'Chirag_cv.pdf'; 
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link); 
        };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-custom-dark position-fixed border border-custom-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" className="text-cyan hover:shadow-antiquewhite rounded-lg text-4xl font-bold border p-3 border-cyan">
                        {'>'} My Portfolio 
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm hover:shadow-antiquewhite text-xl">
                                Home
                            </a>
                            <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md hover:shadow-antiquewhite text-sm text-xl">
                                About
                            </a>
                            <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md hover:shadow-antiquewhite text-sm text-xl">
                                Projects
                            </a>
                            <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md hover:shadow-antiquewhite text-sm text-xl">
                                Contact
                            </a>
                            <button className="bg-cyan hover:bg-blue-700 hover:text-white text-gray font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-95 transition duration-300"  
                    onClick={() => window.open('https://drive.google.com/file/d/1vBxfzMbJ8tv8Fr87SLsy5CK3Yf5v0qp7/view?usp=sharing', '_blank')}>
              Download CV
               </button>

                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
                            Contact
                        </a>
                        {/* Add the Download PDF button here as well */}
                        <button className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-95 transition duration-300"  
                    onClick={() => window.open('https://drive.google.com/file/d/1vBxfzMbJ8tv8Fr87SLsy5CK3Yf5v0qp7/view?usp=sharing', '_blank')}>
              Download CV
               </button>
                        
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
