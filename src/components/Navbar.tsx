import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Navbar animation
    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white tracking-wider">
              MAMMUT
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#experience" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                EXPERIENCE
              </a>
              <a href="#technology" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                TECHNOLOGY
              </a>
              <a href="#discover" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                DISCOVER
              </a>
              <a href="#watch" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                WATCH
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                EN
              </button>
              <span className="text-white/20">|</span>
              <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                DE
              </button>
              <span className="text-white/20">|</span>
              <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                FR
              </button>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/80 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-6">
              <a href="#experience" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                EXPERIENCE
              </a>
              <a href="#technology" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                TECHNOLOGY
              </a>
              <a href="#discover" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                DISCOVER
              </a>
              <a href="#watch" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider">
                WATCH
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                  EN
                </button>
                <span className="text-white/20">|</span>
                <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                  DE
                </button>
                <span className="text-white/20">|</span>
                <button className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium">
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 