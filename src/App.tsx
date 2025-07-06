import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import InstagramGallery from './components/InstagramGallery';
import Expedition from './components/Expedition';
import Products from './components/Products';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling and animations
    gsap.set("body", { overflow: "hidden" });
    gsap.to("body", { overflow: "auto", delay: 1 });

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-40"
          poster="/hero-poster.jpg"
          onError={(e) => {
            // Fallback to background image if video fails to load
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Expedition />
        <InstagramGallery />
        <Products />
        <Technology />
        <Contact />
      </main>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;