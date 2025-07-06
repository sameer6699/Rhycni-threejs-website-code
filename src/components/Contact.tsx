import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;

    if (section && title && form) {
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

      // Form animation
      gsap.fromTo(form, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-black via-gray-900/10 to-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-6xl md:text-7xl font-black text-white mb-8">
            Join the Expedition
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to push your limits? Connect with our team of experts and discover 
            how our technology can enhance your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div ref={formRef} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300">
                  <option value="" className="bg-black">Select a subject</option>
                  <option value="expedition" className="bg-black">Expedition Planning</option>
                  <option value="equipment" className="bg-black">Equipment Consultation</option>
                  <option value="training" className="bg-black">Training Programs</option>
                  <option value="partnership" className="bg-black">Partnership Opportunities</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  placeholder="Tell us about your expedition plans..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Expedition Headquarters</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our team of experienced mountaineers and outdoor professionals are here to support 
                your next adventure. Whether you're planning a solo expedition or leading a team, 
                we have the expertise and equipment to ensure your success.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-white/70">expeditions@mammut.com</p>
                  <p className="text-white/50 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-white/70">+41 44 888 88 88</p>
                  <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM CET</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-white/70">Seon, Switzerland</p>
                  <p className="text-white/50 text-sm">Global shipping available</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-2">Emergency Support</h4>
              <p className="text-white/70 text-sm mb-3">
                For urgent expedition support or emergency situations, contact our 24/7 hotline.
              </p>
              <p className="text-white font-mono text-lg">+41 44 888 88 99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;