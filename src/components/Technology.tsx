import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Droplets } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Technology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (section && title && cards) {
      // Title animation
      gsap.fromTo(title, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      gsap.fromTo(cards.children, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-black via-blue-950/20 to-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-6xl md:text-7xl font-black text-white mb-8">
            GORE-TEX PRO
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Superior GORE-TEX PRO technology offers uncompromising protection in any weather conditions 
            as well as maximum durability for extreme expeditions.
          </p>
        </div>

        {/* Technology Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Weather Protection */}
          <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
              <Shield size={32} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Weather Protection
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Advanced 3-layer design provides ultimate protection against wind, rain, and snow while maintaining breathability.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white/80 text-sm">28k mm water column test</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Unrestricted freedom of motion</span>
              </div>
            </div>
          </div>

          {/* Card 2: Durability */}
          <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
              <Zap size={32} className="text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Maximum Durability
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Reinforced construction withstands the harshest conditions and extreme wear from professional use.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Reinforced front, back and sides</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Advanced safety testing</span>
              </div>
            </div>
          </div>

          {/* Card 3: Breathability */}
          <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
              <Droplets size={32} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Superior Breathability
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Innovative membrane technology ensures optimal moisture management and comfort during intense activity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Moisture-wicking technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Temperature regulation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready for Extreme Conditions
            </h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Experience the same technology that protects professional athletes in the world's most challenging environments.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300">
              Explore Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 