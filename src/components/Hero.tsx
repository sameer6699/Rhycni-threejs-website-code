import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPlayButtonRef = useRef<HTMLButtonElement>(null);
  const [showVideoButton, setShowVideoButton] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero animations
    tl.from(playButtonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // Floating animation for play button
    gsap.to(playButtonRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

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
          <source src="/static/assets/img/Ryhan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-6 relative">
        {/* Premium Expedition Badge */}
        <div className="mb-8">
          <span className="inline-block px-6 py-3 bg-white/15 backdrop-blur-lg border border-white/25 rounded-full text-sm font-semibold text-white tracking-wider shadow-lg">
            EXPEDITION BAIKAL
          </span>
        </div>

        {/* Enhanced Play Button */}
        <div className="flex justify-center mb-16">
          <button 
            ref={playButtonRef}
            className="group relative flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-glow-blue"
          >
            <Play 
              size={36} 
              className="text-white ml-1 group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-white/20"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown 
          size={28} 
          className="text-white/80 animate-bounce-slow" 
        />
      </div>

      {/* Enhanced Video Play Button - Bottom Right Corner */}
      {showVideoButton && (
        <div className="absolute bottom-8 right-8 z-20">
          <button
            ref={videoPlayButtonRef}
            onClick={handleVideoButtonClick}
            className="group relative flex items-center justify-center w-18 h-18 bg-white/25 backdrop-blur-lg border-2 border-white/40 rounded-full hover:bg-white/35 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-glow-blue"
          >
            <Play 
              size={32} 
              className="text-white ml-1 group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></div>
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