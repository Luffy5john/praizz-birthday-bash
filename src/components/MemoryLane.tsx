import { Card } from "@/components/ui/card";

const memories = [
  { 
    src: "/lovable-uploads/e192eb2e-70ae-4382-96e7-aa1808a5ba47.png", 
    caption: "Squad goals with heart filters! 💕" 
  },
  { 
    src: "/lovable-uploads/ed714416-b0ee-4643-b9ac-066e76e33a7d.png", 
    caption: "Evening adventures with the crew" 
  },
  { 
    src: "/lovable-uploads/bb8da2c3-7c52-4e30-9d20-ad652bf7edb6.png", 
    caption: "Academic life memories - thumbs up! 👍" 
  },
  { 
    src: "/lovable-uploads/b48d8839-1aef-417b-9574-19d41e3ca3ec.png", 
    caption: "Beautiful face paint and traditional vibes" 
  },
  { 
    src: "/lovable-uploads/5dc47ef4-b8b0-483a-bae9-4a5d065c050d.png", 
    caption: "Nature adventures with the best company" 
  },
  { 
    src: "/lovable-uploads/acd1eff1-d4db-4d52-b07a-5f1da0a9c443.png", 
    caption: "Puppy filter cuteness overload! 🐶" 
  },
  { 
    src: "/lovable-uploads/f8badc97-d07b-4e32-9276-5f547aea5773.png", 
    caption: "More puppy filter fun with bestie!" 
  },
  { 
    src: "/lovable-uploads/edaacc49-80b4-4f89-8684-070b0fcc9957.png", 
    caption: "Heart filter magic ✨" 
  },
  { 
    src: "/lovable-uploads/0a1f06b9-fbaf-4542-8461-0f8544060613.png", 
    caption: "Selfie masters with heart filters 💖" 
  },
  { 
    src: "/lovable-uploads/f840836b-49bd-4694-81fe-b48efb122dec.png", 
    caption: "Peaceful moments and sweet dreams" 
  }
];

const MemoryLane = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading text-center mb-8 text-foreground">
        Memory Lane
      </h2>
      <div className="max-h-[60vh] overflow-y-auto px-2 space-y-6">
        {memories.map((memory, index) => (
          <Card 
            key={index}
            className="overflow-hidden shadow-soft hover:shadow-magical transition-all duration-300 transform hover:scale-105 max-w-lg mx-auto"
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-muted-foreground font-body text-sm">
                {memory.caption}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MemoryLane;