import { Card } from "@/components/ui/card";
import groupSelfie from "@/assets/group-selfie.jpg";
import childhoodMemory from "@/assets/childhood-memory.jpg";
import friendPortrait from "@/assets/friend-portrait.jpg";
import outdoorAdventure from "@/assets/outdoor-adventure.jpg";
import dogFilterSelfie from "@/assets/dog-filter-selfie.jpg";

const memories = [
  { 
    src: groupSelfie, 
    caption: "The squad that never fails to make me laugh" 
  },
  { 
    src: childhoodMemory, 
    caption: "Precious childhood memories that last forever" 
  },
  { 
    src: friendPortrait, 
    caption: "Gorgeous friend with amazing style" 
  },
  { 
    src: outdoorAdventure, 
    caption: "Adventures in the great outdoors together" 
  },
  { 
    src: dogFilterSelfie, 
    caption: "More dog filter fun 😄" 
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