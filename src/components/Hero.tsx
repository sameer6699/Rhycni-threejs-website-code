import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPlayButtonRef = useRef<HTMLButtonElement>(null);
  const exploreButtonRef = useRef<HTMLButtonElement>(null);
  const [showVideoButton, setShowVideoButton] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Explore button animation
    gsap.fromTo(exploreButtonRef.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
      }
    );

    // Video control - stop at 0:15 seconds
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (video.currentTime >= 15) {
          video.pause();
          setShowVideoButton(true);
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  // GSAP animation for video play button when it appears
  useEffect(() => {
    if (showVideoButton && videoPlayButtonRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(videoPlayButtonRef.current, 
        {
          scale: 0,
          opacity: 0,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      )
      .to(videoPlayButtonRef.current, {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      }, "-=0.4");
    }
  }, [showVideoButton]);

  const handleVideoButtonClick = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setShowVideoButton(false);
    }
  };

  const handleExploreClick = () => {
    // Scroll to the next section or navigate to explore page
    const nextSection = document.querySelector('#experience') || document.querySelector('#technology');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/static/img/Ryhan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-6 relative">
        {/* Content can be added here if needed */}
      </div>

      {/* Explore Rycni Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button
          ref={exploreButtonRef}
          onClick={handleExploreClick}
          className="group flex items-center space-x-3 px-8 py-4 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full text-white font-semibold tracking-wider hover:bg-white/25 transition-all duration-300 shadow-2xl hover:shadow-glow-blue hover:scale-105"
        >
          <span>EXPLORE RYCNI</span>
          <ArrowRight 
            size={20} 
            className="group-hover:translate-x-1 transition-transform duration-300" 
          />
        </button>
      </div>

      {/* Enhanced Video Play Button - Bottom Right Corner */}
      {showVideoButton && (
        <div className="absolute bottom-8 right-8 z-20">
          <button
            ref={videoPlayButtonRef}
            onClick={handleVideoButtonClick}
            className="group relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-indigo-500/40 backdrop-blur-lg border-2 border-cyan-400/60 rounded-full hover:from-cyan-500/60 hover:via-blue-500/60 hover:to-indigo-500/60 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-glow-cyan"
          >
            <Play 
              size={36} 
              className="text-white ml-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
            />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/70 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 animate-pulse"></div>
          </button>
        </div>
      )}

      {/* Premium Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl animate-float"></div>
    </div>
  );
};

export default Hero;