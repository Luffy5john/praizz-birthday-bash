import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BirthdayFinaleProps {
  friendName: string;
}

const BirthdayFinale = ({ friendName }: BirthdayFinaleProps) => {
  const [isFireworksActive, setIsFireworksActive] = useState(false);

  const startFireworks = () => {
    setIsFireworksActive(true);
    
    // Reset fireworks after animation
    setTimeout(() => {
      setIsFireworksActive(false);
    }, 3000);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 mb-12">
      <h2 className="text-3xl md:text-4xl font-heading text-center mb-8 text-foreground">
        Finale
      </h2>
      
      <Card className="relative p-12 shadow-celebration bg-gradient-primary text-white text-center overflow-hidden">
        {/* Fireworks Animation */}
        {isFireworksActive && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-accent rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
        )}
        
        <div className="relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl mb-8 animate-pulse">
            Happy Birthday {friendName}!
          </h1>
          
          <p className="font-body text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            May this special day bring you endless joy, laughter, and beautiful memories. 
            Here's to another year of amazing adventures and friendship! 🎂✨
          </p>
          
          <Button 
            variant="secondary"
            size="lg"
            onClick={startFireworks}
            disabled={isFireworksActive}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 animate-bounce hover:animate-none"
          >
            {isFireworksActive ? "🎆 Celebrating! 🎆" : "Celebrate! 🎆"}
          </Button>
          
          <div className="mt-8 text-sm opacity-75">
            <p>🎈 Wishing you the happiest of birthdays! 🎈</p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default BirthdayFinale;