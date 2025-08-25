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
    <Card className="w-full max-w-2xl mx-auto p-6 bg-card pixel-border-thick shadow-pixel-thick animate-fade-in">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-primary text-primary-foreground shadow-pixel pixel-border">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-pixel text-primary text-outline uppercase font-bold">CLUE #{clueNumber}</h2>
        </div>
        
        <div className="bg-input pixel-border-thick p-6 shadow-pixel">
          <p className="text-sm font-pixel leading-relaxed text-foreground font-bold">
            {clue}
          </p>
        </div>
        
        <Button 
          onClick={onAnotherClue}
          variant="outline"
          size="lg"
          disabled={isLoading}
          className="font-pixel"
        >
          <Minus className="w-4 h-4 mr-2" />
          ANOTHER CLUE (-10 PTS)
        </Button>
      </div>
    </Card>
  );
};