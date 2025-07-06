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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Instagram-style Gallery */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Gallery Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <img 
                      src="/rhycni.png" 
                      alt="Rhycni" 
                      className="w-6 h-6 object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">rhycni_expedition</div>
                    <div className="text-xs text-gray-500">Premium Outdoor Gear</div>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>

              {/* Gallery Content */}
              <div className="relative aspect-[4/5] bg-gray-100">
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
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Gallery Footer */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  rhycni_expedition
                </div>
                <div className="text-sm text-gray-600">
                  Alpine Pro Collection • Extreme conditions tested • Premium materials
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {currentSlide + 1} of {galleryItems.length} • 2 hours ago
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="space-y-8">
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

            {/* Expedition Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Compass size={24} className="text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Adventure Ready</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Designed for real expeditions, tested in extreme conditions by professional athletes and explorers.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Mountain size={24} className="text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Mountain Proven</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Every piece tested in the world's most challenging mountain environments for ultimate reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expedition; 