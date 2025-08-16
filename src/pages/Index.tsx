import { useState } from "react";
import BirthdayIntro from "@/components/BirthdayIntro";
import MemoryLane from "@/components/MemoryLane";
import BirthdayPoem from "@/components/BirthdayPoem";
import WishWall from "@/components/WishWall";

import BirthdayFinale from "@/components/BirthdayFinale";

const Index = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const friendName = "Praizz";

  const startCelebration = () => {
    setShowMainContent(true);
  };

  if (!showMainContent) {
    return (
      <BirthdayIntro 
        friendName={friendName} 
        onStart={startCelebration} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b shadow-soft">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-xl font-bold text-center font-body">
            🎉 Happy Birthday {friendName}! 🎉
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        <MemoryLane />
        <BirthdayPoem friendName={friendName} />
        <WishWall />
        <BirthdayFinale friendName={friendName} />
      </main>
    </div>
  );
};

export default Index;