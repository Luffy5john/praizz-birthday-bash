import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  // Default background music
  const defaultMusic = "https://cdn.pixabay.com/download/audio/2023/10/12/audio_2ce7e8a5b3.mp3?filename=soft-piano-ambient-174482.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      setCurrentUrl(defaultMusic);
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      toast({
        title: "Playback Error",
        description: "Unable to play the audio. Please check the URL or try again.",
        variant: "destructive"
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const loadMusic = () => {
    if (!inputUrl.trim()) {
      toast({
        title: "No URL provided",
        description: "Please enter a valid audio URL.",
        variant: "destructive"
      });
      return;
    }

    // Convert YouTube URL to embed format (for demonstration - in production you'd need proper audio extraction)
    let processedUrl = inputUrl.trim();
    
    // For demo purposes, we'll use the default music
    // In a real app, you'd need to handle YouTube URLs properly
    if (processedUrl.includes('youtube.com') || processedUrl.includes('youtu.be')) {
      toast({
        title: "YouTube URLs not supported",
        description: "Please use a direct audio file URL (.mp3, .wav, etc.)",
        variant: "destructive"
      });
      return;
    }

    setCurrentUrl(processedUrl);
    setIsPlaying(false);
    
    toast({
      title: "Music loaded! 🎵",
      description: "Your custom music has been loaded. Click play to start!",
    });
  };

  const resetToDefault = () => {
    setCurrentUrl(defaultMusic);
    setInputUrl("");
    setIsPlaying(false);
    toast({
      title: "Reset to default music",
      description: "Soft piano ambient music loaded.",
    });
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 mb-8">
      <h2 className="text-3xl md:text-4xl font-heading text-center mb-8 text-foreground">
        Birthday Playlist 🎵
      </h2>
      
      <Card className="p-6 shadow-soft bg-gradient-soft">
        <div className="space-y-4">
          {/* Music URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Add Your Music (Direct Audio URL):
            </label>
            <div className="flex gap-2">
              <Input
                placeholder="Paste audio URL here (.mp3, .wav, etc.)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={loadMusic} variant="outline">
                Load
              </Button>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              onClick={togglePlay}
              variant="celebration"
              size="lg"
              className="w-16 h-16 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </Button>
            
            <Button
              onClick={toggleMute}
              variant="outline"
              size="lg"
              className="w-12 h-12 rounded-full"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Reset Button */}
          <div className="text-center pt-2">
            <Button 
              onClick={resetToDefault} 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Reset to default music
            </Button>
          </div>

          {/* Currently Playing */}
          <div className="text-center text-sm text-muted-foreground">
            {currentUrl === defaultMusic ? (
              "♪ Soft Piano Ambient ♪"
            ) : (
              "♪ Custom Music Loaded ♪"
            )}
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentUrl}
          loop
          onEnded={() => setIsPlaying(false)}
          onError={() => {
            setIsPlaying(false);
            toast({
              title: "Audio Error",
              description: "Failed to load the audio file. Please check the URL.",
              variant: "destructive"
            });
          }}
        />
      </Card>
    </section>
  );
};

export default MusicPlayer;