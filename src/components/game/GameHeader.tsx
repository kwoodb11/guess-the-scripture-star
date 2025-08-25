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
        <h1 className="text-3xl md:text-4xl font-pixel text-primary text-glow animate-neon-glow mb-2 text-shadow-pixel">
          GUESS WHO
        </h1>
        <p className="text-sm md:text-base font-pixel text-secondary text-glow">BIBLE CHARACTERS</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border-2 border-primary p-4 shadow-pixel pixel-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary text-primary-foreground shadow-pixel">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-muted-foreground uppercase">LEVEL</p>
              <p className="text-xl font-pixel text-primary text-glow">{level}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border-2 border-game-success p-4 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-game-success text-background shadow-pixel">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-muted-foreground uppercase">SCORE</p>
              <p className="text-xl font-pixel text-game-success text-glow">{totalScore}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border-2 border-game-warning p-4 shadow-pixel">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-game-warning text-background shadow-pixel">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-pixel text-muted-foreground uppercase">POINTS</p>
              <p className="text-xl font-pixel text-game-warning text-glow">{currentPoints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};