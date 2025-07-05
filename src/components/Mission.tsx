import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';

const Mission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !horizontal) return;

    const cards = horizontal.querySelectorAll('.mission-card');
    const scrollWidth = horizontal.scrollWidth - horizontal.clientWidth;

    // Horizontal scroll animation
    gsap.to(horizontal, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Cards animation
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          y: 100, 
          opacity: 0,
          rotationY: 45 
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left right",
            end: "right left",
            scrub: 0.5,
            containerAnimation: gsap.to(horizontal, {x: -scrollWidth})
          }
        }
      );
    });

  }, []);

  const missions = [
    {
      icon: <Target className="text-primary-400" size={48} />,
      title: "Vision",
      content: "To revolutionize the fashion industry by merging cutting-edge technology with timeless design principles, creating garments that tell stories and inspire confidence.",
      gradient: "from-primary-500/20 to-transparent",
      glow: "glow-blue"
    },
    {
      icon: <Lightbulb className="text-accent-400" size={48} />,
      title: "Innovation",
      content: "We push boundaries by experimenting with sustainable materials, smart fabrics, and digital design processes that respect both creativity and environmental responsibility.",
      gradient: "from-accent-500/20 to-transparent",
      glow: "glow-green"
    },
    {
      icon: <Users className="text-gold-400" size={48} />,
      title: "Community",
      content: "Building a global community of fashion enthusiasts who value authenticity, creativity, and the power of self-expression through thoughtfully crafted clothing.",
      gradient: "from-gold-500/20 to-transparent",
      glow: "glow-gold"
    },
    {
      icon: <Zap className="text-purple-400" size={48} />,
      title: "Impact",
      content: "Creating positive change in the fashion ecosystem through ethical practices, fair trade partnerships, and designs that empower individuals to express their unique identity.",
      gradient: "from-purple-500/20 to-transparent",
      glow: "glow-purple"
    }
  ];

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-dark-gradient">
      {/* Premium background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-500/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div ref={horizontalRef} className="flex h-full items-center" style={{ width: '400vw' }}>
        {/* Enhanced Title Section */}
        <div className="w-screen flex items-center justify-center px-20">
          <div className="text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 gradient-text text-shadow-lg">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-shadow">
              Driven by purpose, guided by creativity, and committed to excellence in every thread.
            </p>
          </div>
        </div>

        {/* Enhanced Mission Cards */}
        {missions.map((mission, index) => (
          <div key={index} className="w-screen flex items-center justify-center px-20">
            <div className={`mission-card glass-effect-dark rounded-3xl p-12 max-w-2xl text-center transform perspective-1000 relative overflow-hidden hover-lift ${mission.glow}`}>
              {/* Enhanced card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} opacity-60`}></div>
              
              <div className="relative z-10">
                <div className="mb-8 flex justify-center">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                    {mission.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white text-shadow">
                  {mission.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed text-shadow">
                  {mission.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;