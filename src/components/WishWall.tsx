import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Wish {
  id: string;
  from: string;
  text: string;
  date: string;
}

const WishWall = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [wishFrom, setWishFrom] = useState("");
  const [wishText, setWishText] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedWishes = localStorage.getItem('birthdayWishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      from: wishFrom.trim() || "Anonymous",
      text: wishText.trim(),
      date: new Date().toISOString()
    };

    const updatedWishes = [...wishes, newWish];
    setWishes(updatedWishes);
    localStorage.setItem('birthdayWishes', JSON.stringify(updatedWishes));
    
    setWishFrom("");
    setWishText("");
    
    toast({
      title: "Wish posted! 🎉",
      description: "Your birthday wish has been added to the wall.",
    });
  };

  const clearWishes = () => {
    if (window.confirm('Clear all wishes?')) {
      setWishes([]);
      localStorage.removeItem('birthdayWishes');
      toast({
        title: "Wishes cleared",
        description: "All wishes have been removed from the wall.",
      });
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading text-center mb-8 text-foreground">
        Wish Wall
      </h2>
      
      <Card className="p-6 shadow-soft mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your name (optional)"
            value={wishFrom}
            onChange={(e) => setWishFrom(e.target.value)}
            className="font-body"
          />
          <Textarea
            placeholder="Write your birthday wish..."
            value={wishText}
            onChange={(e) => setWishText(e.target.value)}
            required
            className="min-h-24 font-body"
          />
          <div className="flex justify-between items-center">
            <Button 
              type="button" 
              variant="outline" 
              onClick={clearWishes}
              className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              Clear All
            </Button>
            <Button type="submit" variant="default">
              Post Wish 💝
            </Button>
          </div>
        </form>
      </Card>

      <div className="space-y-4 max-h-60 overflow-y-auto">
        {wishes.length === 0 ? (
          <Card className="p-4 text-center text-muted-foreground">
            <p>No wishes yet. Be the first to leave a birthday message! 🎂</p>
          </Card>
        ) : (
          wishes.map((wish) => (
            <Card key={wish.id} className="p-4 shadow-soft hover:shadow-magical transition-all duration-300">
              <div className="font-body">
                <p className="font-semibold text-primary mb-2">{wish.from} says:</p>
                <p className="text-foreground leading-relaxed">{wish.text}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date(wish.date).toLocaleDateString()}
                </p>
              </div>
            </Card>
          ))
        )}
      </div>
    </section>
  );
};

export default WishWall;