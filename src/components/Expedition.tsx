import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Thermometer, Wind, Mountain, Compass, Users, ChevronLeft, ChevronRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Expedition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery items
  const galleryItems = [
    { type: 'image', src: '/asset/6-1.jpg', alt: 'Expedition Image 1' },
    { type: 'video', src: '/asset/6-2.mp4', alt: 'Expedition Video' },
    { type: 'image', src: '/asset/6-3.jpg', alt: 'Expedition Image 2' },
    { type: 'image', src: '/asset/6-4.jpg', alt: 'Expedition Image 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (section && image && content) {
      // Parallax effect for the image
      gsap.to(image, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Content animation
      gsap.fromTo(content, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Expedition Gallery */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 shadow-2xl">
              {/* Gallery Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <img 
                      src="/rhycni.png" 
                      alt="Rhycni" 
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Rhycni Expedition</div>
                    <div className="text-sm text-gray-400">Alpine Pro Collection</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>

              {/* Gallery Content */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Current Slide */}
                <div className="w-full h-full relative">
                  {galleryItems[currentSlide].type === 'video' ? (
                    <video
                      src={galleryItems[currentSlide].src}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={galleryItems[currentSlide].src}
                      alt={galleryItems[currentSlide].alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Video Play Icon Overlay */}
                  {galleryItems[currentSlide].type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Expedition Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">Expedition</span>
                  </div>

                  {/* Temperature Badge */}
                  <div className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-white">-40°C</span>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 border border-white/20 shadow-lg"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 border border-white/20 shadow-lg"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-black/40 backdrop-blur-sm rounded-full h-1">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${((currentSlide + 1) / galleryItems.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-white/80">Slide {currentSlide + 1} of {galleryItems.length}</span>
                    <span className="text-xs text-white/80">Alpine Pro</span>
                  </div>
                </div>
              </div>

              {/* Gallery Footer */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-6">
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Explore
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-white">
                    Alpine Pro Collection
                  </div>
                  <div className="text-sm text-gray-400">
                    Extreme conditions tested • Premium materials • Professional grade
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Temperature: -40°C to +20°C</span>
                    <span>•</span>
                    <span>Waterproof: 20,000mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="space-y-8 pt-16">
            {/* Rhycni Brand Info */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none">
                Rhycni Expedition
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-sm uppercase tracking-wider">Premium Outdoor Clothing</span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Rhycni pushes the boundaries of outdoor apparel, creating premium clothing that withstands 
                  the most extreme conditions while maintaining style and comfort for modern adventurers.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wider mb-2">Founded</div>
                  <div className="text-white text-lg font-medium">2020</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wider mb-2">Collections</div>
                  <div className="text-white text-lg font-medium">Alpine • Urban • Tech</div>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Alpine Pro Collection
              </h3>
              <p className="text-white/70 mb-6">
                Our flagship collection designed for extreme mountain conditions, featuring cutting-edge materials 
                and innovative design for ultimate performance and protection.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Advanced moisture-wicking technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Sustainable materials and ethical production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Temperature regulation down to -40°C</span>
                </div>
              </div>
              
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
                Explore Collection
              </button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Expedition; 