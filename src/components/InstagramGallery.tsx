import React, { useRef, useState } from "react";
import { ShoppingBag, Play, Pause } from "lucide-react";

const InstagramGallery: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Left: Image */}
        <div className="flex-1 relative">
          <div className="w-full h-96 md:h-[32rem] overflow-hidden rounded-xl shadow-lg relative">
            <img
              src="/asset/6-1.jpg"
              alt="Expedition"
              className="w-full h-full object-cover"
            />
            {/* Shopping Bag Button */}
            <button
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-3 shadow-lg transition-colors"
              aria-label="Shop this product"
            >
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>
        {/* Right: Video */}
        <div className="flex-1 relative">
          <div className="w-full h-96 md:h-[32rem] overflow-hidden rounded-xl shadow-lg relative">
            <video
              ref={videoRef}
              src="/asset/6-2.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Play/Pause Toggle Button */}
            <button
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-3 shadow-lg transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Optional Caption */}
      <div className="max-w-4xl mx-auto mt-6 text-center text-gray-700 text-base">
        The thick ice covering the deepest lake on earth offers a mesmerizing, crystal-clear view into its depths.
      </div>
    </section>
  );
};

export default InstagramGallery; 