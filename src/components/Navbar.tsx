import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
                          <img 
                src="/rhycni.png" 
                alt="Rycni Logo" 
                className="h-24 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 