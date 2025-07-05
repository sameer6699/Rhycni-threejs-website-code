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
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img 
                src="/rhycni.png" 
                alt="Rycni Logo" 
                className="h-10 w-auto filter brightness-0 invert font-bold"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#experience" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow">
                EXPERIENCE
              </a>
              <a href="#technology" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow">
                TECHNOLOGY
              </a>
              <a href="#discover" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow">
                DISCOVER
              </a>
              <a href="#watch" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow">
                WATCH
              </a>
            </div>
          </div>

          {/* Enhanced Right side */}
          <div className="flex items-center space-x-6">
            {/* Premium Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
                EN
              </button>
              <span className="text-white/30">|</span>
              <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
                DE
              </button>
              <span className="text-white/30">|</span>
              <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
                FR
              </button>
            </div>

            {/* Enhanced Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/90 transition-colors duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/15 bg-black/50 backdrop-blur-lg rounded-lg">
            <div className="flex flex-col space-y-4 pt-6 px-4">
              <a href="#experience" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow py-2">
                EXPERIENCE
              </a>
              <a href="#technology" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow py-2">
                TECHNOLOGY
              </a>
              <a href="#discover" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow py-2">
                DISCOVER
              </a>
              <a href="#watch" className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider hover:text-shadow-glow py-2">
                WATCH
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/15">
                <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
                  DE
                </button>
                <span className="text-white/30">|</span>
                <button className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-semibold hover:text-shadow-glow">
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