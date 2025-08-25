import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Minus } from "lucide-react";

interface ClueCardProps {
  clue: string;
  clueNumber: number;
  onAnotherClue: () => void;
  isLoading?: boolean;
}

export const ClueCard = ({ clue, clueNumber, onAnotherClue, isLoading }: ClueCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-card/95 to-accent/30 backdrop-blur-sm border-border/50 shadow-gentle animate-fade-in">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-primary/10 animate-glow-pulse">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Clue #{clueNumber}</h2>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6 border border-border/30">
          <p className="text-lg leading-relaxed text-foreground font-medium">
            {clue}
          </p>
        </div>
        
        <Button 
          onClick={onAnotherClue}
          variant="outline"
          size="lg"
          disabled={isLoading}
          className="group border-game-warning/30 text-game-warning hover:bg-game-warning/10 hover:border-game-warning/50"
        >
          <Minus className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          Another Clue (-10 pts)
        </Button>
      </div>
    </Card>
  );
};