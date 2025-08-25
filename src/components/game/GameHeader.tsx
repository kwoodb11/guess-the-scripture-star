import { Crown, Star, Target } from "lucide-react";

interface GameHeaderProps {
  level: number;
  totalScore: number;
  currentPoints: number;
}

export const GameHeader = ({ level, totalScore, currentPoints }: GameHeaderProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
          Guess Who
        </h1>
        <p className="text-xl text-muted-foreground">Bible Characters</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-gentle">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="text-2xl font-bold text-foreground">{level}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-gentle">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-game-success/10">
              <Star className="w-6 h-6 text-game-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Score</p>
              <p className="text-2xl font-bold text-foreground">{totalScore}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-gentle">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-game-warning/10">
              <Target className="w-6 h-6 text-game-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Points Left</p>
              <p className="text-2xl font-bold text-foreground">{currentPoints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};