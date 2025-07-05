import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Cpu, Scissors, Package, Sparkles, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = document.querySelectorAll('.process-step');
    const connections = document.querySelectorAll('.connection-line');

    steps.forEach((step, index) => {
      gsap.fromTo(step, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8,
          rotation: 10
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          }
        }
      );

      // Animate connection lines
      if (index < connections.length) {
        gsap.fromTo(connections[index], 
          { 
            scaleX: 0,
            opacity: 0
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 0.3,
            }
          }
        );
      }
    });

    // Floating animation for icons
    gsap.to(".process-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

  }, []);

  const steps = [
    {
      icon: <Palette className="text-glow-blue" size={48} />,
      title: "Concept & Design",
      description: "Every piece begins with a spark of creativity. Our designers blend art, culture, and innovation to create unique concepts that resonate with modern aesthetics.",
      quirk: "💡 Over 1000 sketches for every final design",
      gradient: "from-glow-blue/20 to-transparent"
    },
    {
      icon: <Cpu className="text-glow-green" size={48} />,
      title: "Tech Integration",
      description: "We leverage cutting-edge technology including 3D modeling, AI-assisted pattern making, and sustainable material research to bring ideas to life.",
      quirk: "🤖 AI helps us predict fashion trends 6 months ahead",
      gradient: "from-glow-green/20 to-transparent"
    },
    {
      icon: <Scissors className="text-glow-orange" size={48} />,
      title: "Craftsmanship",
      description: "Master artisans combine traditional techniques with modern precision. Every stitch, seam, and detail is executed with meticulous attention to quality.",
      quirk: "✂️ Our seamstresses average 15 years of experience",
      gradient: "from-glow-orange/20 to-transparent"
    },
    {
      icon: <Package className="text-glow-purple" size={48} />,
      title: "Sustainable Packaging",
      description: "From eco-friendly materials to plastic-free packaging, we ensure your Rhycni experience is beautiful inside and out while respecting our planet.",
      quirk: "🌱 100% biodegradable packaging made from recycled materials",
      gradient: "from-glow-purple/20 to-transparent"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-dark-gradient-alt py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-glow-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-br from-glow-green/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-glow-purple/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text text-shadow-glow">
            Our Process
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed">
            From concept to creation, every step is infused with creativity, technology, and uncompromising quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center mb-20 last:mb-0">
              {/* Step content */}
              <div className={`process-step flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`glass-effect-dark rounded-3xl p-8 card-hover relative overflow-hidden`}>
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-30`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="process-icon mr-4 p-3 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-600/30">
                        {step.icon}
                      </div>
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-dark-50 mr-4">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-2xl font-bold text-dark-50">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-dark-200 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center text-sm text-dark-300">
                      <Sparkles size={16} className="mr-2" />
                      {step.quirk}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className={`connection-line hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex justify-center py-8">
                    <ArrowRight size={32} className="text-dark-400 transform rotate-90 lg:rotate-0" />
                  </div>
                </div>
              )}

              {/* Visual element */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-0'}`}>
                <div className={`h-64 bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl flex items-center justify-center relative overflow-hidden border border-dark-600/30`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`}></div>
                  
                  <div className="text-6xl opacity-30 relative z-10">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;