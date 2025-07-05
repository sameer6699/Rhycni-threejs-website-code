import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Star, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const products = productsRef.current;

    if (section && title && products) {
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

      // Products animation
      gsap.fromTo(products.children, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: products,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const products = [
    {
      name: "Eigerjoch Pro IN Hooded Jacket",
      category: "Outerwear",
      price: "$899",
      rating: 4.9,
      image: "/jacket.jpg",
      features: ["Ultra-light Pertex® Quantum Pro", "Water-repellent 90/10 goose down", "Fill power 850"],
      temperature: "-40°C"
    },
    {
      name: "Nordwand Knit High GTX®",
      category: "Footwear",
      price: "$349",
      rating: 4.8,
      image: "/boots.jpg",
      features: ["3D knitted textile", "High-performance cold insulation", "Insulation rating: -30°C"],
      temperature: "-30°C"
    },
    {
      name: "Nordwand MIPS Helmet",
      category: "Safety",
      price: "$199",
      rating: 4.9,
      image: "/helmet.jpg",
      features: ["Advanced safety test", "Reinforced front, back and sides", "MIPS technology"],
      temperature: "All conditions"
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-6xl md:text-7xl font-black text-white mb-8">
            Expedition Gear
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Professional equipment designed for extreme conditions. The same gear that protects 
            athletes in the world's most challenging environments.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              
              {/* Product Image */}
              <div className="relative h-80 bg-gradient-to-br from-blue-900/30 to-black/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <ShoppingBag size={32} className="text-white/60" />
                    </div>
                    <p className="text-white/60 text-sm">{product.category}</p>
                  </div>
                </div>
                
                {/* Temperature Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1 border border-white/10">
                  <span className="text-white text-sm font-mono">{product.temperature}</span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1 border border-white/10">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-white mb-4">{product.price}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <ShoppingBag size={18} />
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap size={48} className="text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Complete Your Expedition Kit
            </h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Discover the full range of professional-grade equipment designed for extreme conditions 
              and unparalleled performance.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;