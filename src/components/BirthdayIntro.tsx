import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/birthday-hero-bg.jpg";
import { useRef } from "react";

interface BirthdayIntroProps {
  friendName: string;
  onStart: () => void;
}

const BirthdayIntro = ({ friendName, onStart }: BirthdayIntroProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    // Start background music
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set to comfortable background level
      audioRef.current.play().catch(e => {
        console.log("Auto-play prevented, music will start after user interaction");
      });
    }
    onStart();
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-center px-5 max-w-4xl">
        <h1 className="font-heading text-white text-6xl md:text-8xl lg:text-9xl mb-6 animate-pulse">
          {friendName}
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 font-body font-light">
          Wishing you a magical, unforgettable birthday ✨
        </p>
        <Button 
          variant="celebration" 
          size="lg"
          onClick={handleStart}
          className="animate-bounce hover:animate-none transition-all duration-300"
        >
          Start the celebration
        </Button>
        
        {/* Background Music */}
        <audio
          ref={audioRef}
          loop
          preload="auto"
        >
          <source src="https://cdn.pixabay.com/download/audio/2023/10/12/audio_2ce7e8a5b3.mp3?filename=soft-piano-ambient-174482.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
};

export default BirthdayIntro;