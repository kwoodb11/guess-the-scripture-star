import { Crown, Star, Target } from "lucide-react";

interface GameHeaderProps {
  level: number;
  totalScore: number;
  currentPoints: number;
}

export const GameHeader = ({ level, totalScore, currentPoints }: GameHeaderProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 scanlines">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-pixel text-primary text-outline mb-2 font-bold">
          GUESS WHO
        </h1>
        <p className="text-sm md:text-base font-pixel text-secondary text-outline font-bold">BIBLE CHARACTERS</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card pixel-border-thick p-4 shadow-pixel-thick">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary text-primary-foreground shadow-pixel pixel-border">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-card-foreground uppercase font-bold">LEVEL</p>
              <p className="text-xl font-pixel text-primary text-outline font-bold">{level}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card pixel-border-thick p-4 shadow-pixel-thick">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-game-success text-card-foreground shadow-pixel pixel-border">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-card-foreground uppercase font-bold">SCORE</p>
              <p className="text-xl font-pixel text-game-success text-outline font-bold">{totalScore}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card pixel-border-thick p-4 shadow-pixel-thick">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-game-warning text-foreground shadow-pixel pixel-border">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-card-foreground uppercase font-bold">POINTS</p>
              <p className="text-xl font-pixel text-game-warning text-outline font-bold">{currentPoints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};