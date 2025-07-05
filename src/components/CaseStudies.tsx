import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const studies = document.querySelectorAll('.case-study');
    
    studies.forEach((study, index) => {
      // Parallax effect for images
      const image = study.querySelector('.case-image');
      if (image) {
        gsap.to(image, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: study,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      }

      // Reveal animation for content
      const content = study.querySelector('.case-content');
      if (content) {
        gsap.fromTo(content, 
          { 
            x: index % 2 === 0 ? -100 : 100, 
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: study,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Sticky section animation
    const stickyElements = document.querySelectorAll('.sticky-element');
    stickyElements.forEach((element, index) => {
      gsap.fromTo(element, 
        { 
          y: 50, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.3,
          }
        }
      );
    });

  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Tech Fashion Week 2024",
      subtitle: "Revolutionizing runway with AR experiences",
      description: "We partnered with leading tech companies to create the first fully immersive AR fashion show, where virtual and physical garments blended seamlessly.",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Attendees", value: "10K+", icon: <Users size={20} className="text-glow-blue" /> },
        { label: "AR Interactions", value: "50K+", icon: <Award size={20} className="text-glow-green" /> },
        { label: "Media Coverage", value: "500+", icon: <Calendar size={20} className="text-glow-orange" /> }
      ],
      tags: ["AR/VR", "Fashion Show", "Innovation", "Technology"],
      year: "2024",
      gradient: "from-glow-blue/20 to-transparent"
    },
    {
      id: 2,
      title: "Sustainable Urban Collection",
      subtitle: "Zero-waste fashion meets street style",
      description: "Our groundbreaking collection proved that sustainable fashion doesn't compromise on style, using 100% recycled materials and innovative manufacturing processes.",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Waste Reduced", value: "95%", icon: <Award size={20} className="text-glow-green" /> },
        { label: "Units Sold", value: "25K+", icon: <Users size={20} className="text-glow-blue" /> },
        { label: "CO2 Saved", value: "10 tons", icon: <Calendar size={20} className="text-glow-orange" /> }
      ],
      tags: ["Sustainability", "Urban", "Zero-waste", "Innovation"],
      year: "2023",
      gradient: "from-glow-green/20 to-transparent"
    },
    {
      id: 3,
      title: "AI-Powered Personalization",
      subtitle: "Custom fit technology for every body",
      description: "Using machine learning algorithms, we created a personalization engine that generates custom-fit patterns for individual body types, reducing returns by 80%.",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { label: "Fit Accuracy", value: "98%", icon: <Award size={20} className="text-glow-purple" /> },
        { label: "Return Rate", value: "-80%", icon: <Users size={20} className="text-glow-blue" /> },
        { label: "Customers", value: "100K+", icon: <Calendar size={20} className="text-glow-orange" /> }
      ],
      tags: ["AI", "Personalization", "Technology", "Custom Fit"],
      year: "2023",
      gradient: "from-glow-purple/20 to-transparent"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-dark-gradient-alt py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-glow-blue/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-glow-green/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-glow-purple/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text text-shadow-glow">
            Case Studies
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed">
            Real projects, real impact. See how we're pushing the boundaries of fashion and technology.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="case-study relative">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-3xl border border-dark-600/30">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="case-image w-full h-96 object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-glow-blue to-glow-green text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        {study.year}
                      </span>
                    </div>
                    {/* Image overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="case-content lg:w-1/2">
                  <div className={`sticky-element glass-effect-dark rounded-3xl p-8 relative overflow-hidden`}>
                    {/* Card background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-dark-50 mb-2">{study.title}</h3>
                      <p className="text-xl text-glow-blue mb-6">{study.subtitle}</p>
                      <p className="text-dark-200 mb-8 leading-relaxed">
                        {study.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {study.stats.map((stat, idx) => (
                          <div key={idx} className="text-center p-4 rounded-2xl bg-dark-800/30 backdrop-blur-sm border border-dark-600/20">
                            <div className="flex justify-center mb-2">
                              {stat.icon}
                            </div>
                            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-sm text-dark-300">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className="bg-dark-700/50 text-dark-200 px-3 py-1 rounded-full text-sm border border-dark-600/30 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="flex items-center btn-primary px-6 py-3 rounded-xl font-semibold">
                        <span className="mr-2">View Full Case Study</span>
                        <ExternalLink size={20} />
                      </button>
                    </div>
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

export default CaseStudies;