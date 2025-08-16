import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/birthday-hero-bg.jpg";

interface BirthdayIntroProps {
  friendName: string;
  onStart: () => void;
}

const BirthdayIntro = ({ friendName, onStart }: BirthdayIntroProps) => {
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
          onClick={onStart}
          className="animate-bounce hover:animate-none transition-all duration-300"
        >
          Start the celebration
        </Button>
      </div>
    </section>
  );
};

export default BirthdayIntro;