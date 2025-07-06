import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

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
                  <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-gray-400/20 rounded-xl flex items-center justify-center shadow-lg">
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
                  <div className="w-2 h-2 bg-white rounded-full"></div>
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
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-black">-40°C</span>
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
                      className="bg-gradient-to-r from-white to-gray-400 h-1 rounded-full transition-all duration-300"
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
                  <button className="bg-gradient-to-r from-white to-gray-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-gray-200 hover:to-gray-500 transition-all duration-300">
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

          {/* Right: Image Gallery Card */}
          <div ref={contentRef} className="pt-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-gray-400/20 rounded-xl flex items-center justify-center shadow-lg">
                    <img 
                      src="/rhycni.png" 
                      alt="Rhycni" 
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Rhycni Collection</div>
                    <div className="text-sm text-gray-400">Alpine Pro Gallery</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>

              {/* Image Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Large Image */}
                  <div className="col-span-2 relative aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-600">
                    <img
                      src="/asset/6-1.jpg"
                      alt="Alpine Pro Collection"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">Featured</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-black">-40°C</span>
                    </div>
                  </div>
                  
                  {/* Smaller Images */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-600">
                    <img
                      src="/asset/6-3.jpg"
                      alt="Mountain Gear"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <span className="text-xs font-semibold text-white">Alpine</span>
                    </div>
                  </div>
                  
                  <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-600">
                    <img
                      src="/asset/6-4.jpg"
                      alt="Urban Collection"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <span className="text-xs font-semibold text-white">Urban</span>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Alpine Pro Collection</span>
                    <span className="text-xs text-gray-400">3 images</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Premium outdoor gear designed for extreme mountain conditions
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Temperature: -40°C to +20°C</span>
                    <span>•</span>
                    <span>Waterproof: 20,000mm</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-between">
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
                  <button className="bg-gradient-to-r from-white to-gray-400 text-black px-6 py-3 rounded-lg text-sm font-semibold hover:from-gray-200 hover:to-gray-500 transition-all duration-300">
                    View Gallery
                  </button>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="text-sm font-semibold text-white">
                    Alpine Pro Collection
                  </div>
                  <div className="text-sm text-gray-400">
                    Extreme conditions tested • Premium materials • Professional grade
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Collections: 3</span>
                    <span>•</span>
                    <span>Images: 12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expedition; 