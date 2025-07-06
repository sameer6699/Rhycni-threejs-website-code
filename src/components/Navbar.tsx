import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Height of the viewport
      
      // Hide navbar when scrolled past the hero section
      if (scrollPosition > heroHeight * 0.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.profile-dropdown')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
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
            <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">
              About
            </a>
            <a href="#gallery" className="text-white hover:text-gray-300 transition-colors duration-300">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
            <div className="relative profile-dropdown">
              <button 
                onClick={toggleProfileDropdown}
                className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center"
              >
                <img 
                  width="24" 
                  height="24" 
                  src="https://img.icons8.com/material-outlined/96/user--v1.png" 
                  alt="user-profile"
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </button>
              
              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button 
                    onClick={() => {
                      // Handle login action
                      console.log('Login clicked');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => {
                      // Handle signup action
                      console.log('Signup clicked');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
            <a href="#cart" className="text-white hover:text-gray-300 transition-colors duration-300">
              <img 
                width="24" 
                height="24" 
                src="https://img.icons8.com/material-outlined/96/shopping-cart--v1.png" 
                alt="shopping-cart--v1"
                className="w-6 h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 transition-colors duration-300">
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