import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/birthday-hero-bg.jpg";

interface BirthdayIntroProps {
  friendName: string;
  onStart: () => void;
}

const BirthdayIntro = ({ friendName, onStart }: BirthdayIntroProps) => {
  const handleStart = () => {
    // YouTube iframe will autoplay automatically
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
        
        {/* Background Music - YouTube Embed */}
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/QaR31V5xBQ8?autoplay=1&loop=1&playlist=QaR31V5xBQ8&controls=0"
          title="Background Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ display: 'none' }}
        />
      </div>
    </section>
  );
};

export default BirthdayIntro;