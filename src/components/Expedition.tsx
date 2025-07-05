import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Thermometer, Wind } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Expedition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
          
          {/* Left: Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-900/50 to-black/50 rounded-2xl">
                {/* Placeholder for climber image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dani Arnold</h3>
                    <p className="text-white/60 text-sm">Pro Team Mountaineering</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span className="text-white text-sm font-mono">N64º49'15"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer size={16} className="text-red-400" />
                    <span className="text-white text-sm font-mono">-14°C</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind size={16} className="text-gray-400" />
                    <span className="text-white text-sm font-mono">79 BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Climber Info */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none">
                Dani Arnold
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-sm uppercase tracking-wider">Pro Team Mountaineering</span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  One of the top Swiss speed climbers, Dani Arnold embarks on an expedition to a place so extreme, 
                  few athletes have dared to explore it.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wider mb-2">Date of Birth</div>
                  <div className="text-white text-lg font-medium">22 Feb 1984</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wider mb-2">At Mammut since</div>
                  <div className="text-white text-lg font-medium">2011</div>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Eigerjoch Pro IN Hooded Jacket
              </h3>
              <p className="text-white/70 mb-6">
                Designed for extremely cold and harsh conditions, keeping him warm even when temperatures drop to -40°C.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Ultra-light Pertex® Quantum Pro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Water-repellent 90/10 goose down</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Fill power 850 - The warmest jacket Mammut offers</span>
                </div>
              </div>
              
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
                Shop Jacket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expedition; 