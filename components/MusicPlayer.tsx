import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reliable, calm water sound hosted by Google (won't expire)
  const AUDIO_URL = "https://actions.google.com/sounds/v1/water/gentle_stream.ogg";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => {
                console.error("Audio play failed:", e);
                // Auto-pause UI if play failed (e.g. browser policy)
                setIsPlaying(false);
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Set volume lower for background ambience
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-white/80 dark:bg-stone-800/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-stone-200 dark:border-stone-700 transition-colors duration-300">
      <audio ref={audioRef} loop src={AUDIO_URL} />
      
      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
         <Music className={`w-5 h-5 text-primary ${isPlaying ? 'animate-spin-slow' : ''}`} />
      </div>

      <div className="flex items-center gap-1 pr-2">
        <button 
          onClick={togglePlay}
          className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-full transition-colors text-stone-700 dark:text-stone-200"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button 
          onClick={toggleMute}
          className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-full transition-colors text-stone-500 dark:text-stone-400"
           aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;