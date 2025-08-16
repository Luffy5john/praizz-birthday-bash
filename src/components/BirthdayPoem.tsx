import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BirthdayPoemProps {
  friendName: string;
}

const BirthdayPoem = ({ friendName }: BirthdayPoemProps) => {
  const [currentPoem, setCurrentPoem] = useState(0);

  const poemTemplates = [
    {
      opening: `To ${friendName}, whose light outshines the stars,`,
      lines: [
        "laughter braids gold through ordinary hours,",
        "petals learn your favorite color and bloom,",
        "time pauses to listen when you speak,"
      ],
      closing: "may your wishes arrive early and stay late."
    },
    {
      opening: `${friendName}, today the sky remembers your smile,`,
      lines: [
        "every road bends kindly in your direction,",
        "morning coffee tastes sweeter in your presence,",
        "even the moon saves her brightest glow for you,"
      ],
      closing: "keep the sparkle, keep the gentle thunder."
    },
    {
      opening: `On this day, dear ${friendName}, the world grew brighter,`,
      lines: [
        "butterflies gather to witness your joy,",
        "seasons change but your warmth remains constant,",
        "every moment with you becomes a treasure,"
      ],
      closing: "dance past the edge of every doubt."
    }
  ];

  const generateNewPoem = () => {
    setCurrentPoem((prev) => (prev + 1) % poemTemplates.length);
  };

  const poem = poemTemplates[currentPoem];

  return (
    <section className="w-full max-w-2xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading text-center mb-8 text-foreground">
        A Poem For You
      </h2>
      <Card className="p-8 shadow-soft bg-gradient-soft">
        <div className="font-elegant text-xl md:text-2xl leading-relaxed text-center text-foreground space-y-4">
          <p>{poem.opening}</p>
          {poem.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p className="font-semibold">And today, {poem.closing}</p>
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={generateNewPoem}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            New Poem ✨
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default BirthdayPoem;