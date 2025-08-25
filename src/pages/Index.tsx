import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GameHeader } from "@/components/game/GameHeader";
import { ClueCard } from "@/components/game/ClueCard";
import { GuessForm } from "@/components/game/GuessForm";
import { RoundBanner } from "@/components/game/RoundBanner";
import { useGameState } from "@/hooks/useGameState";
import { getAllCharacterNames } from "@/data/characters";
import { Play, BookOpen } from "lucide-react";

const Index = () => {
  const { gameState, startGame, getNextClue, makeGuess, getCurrentClue } = useGameState();
  const [showBanner, setShowBanner] = useState(false);

  const handleStartGame = () => {
    startGame();
  };

  const handleNextClue = () => {
    getNextClue();
  };

  const handleGuess = (guessedName: string) => {
    makeGuess(guessedName);
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 3000);
  };

  const allCharacters = getAllCharacterNames();

  if (!gameState.isGameActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 p-4 rounded-full bg-primary/10">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Guess Who
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">Bible Characters</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Test your biblical knowledge! Guess the character with the fewest clues to earn maximum points. 
              Score 800+ points per level to advance!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-gentle">
              <h3 className="text-xl font-semibold mb-3 text-foreground">🎯 Objective</h3>
              <p className="text-muted-foreground">Guess Bible characters using the fewest clues possible</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-gentle">
              <h3 className="text-xl font-semibold mb-3 text-foreground">⭐ Scoring</h3>
              <p className="text-muted-foreground">Start with 100 points, lose 10 for each clue or wrong guess</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-gentle">
              <h3 className="text-xl font-semibold mb-3 text-foreground">🚀 Progress</h3>
              <p className="text-muted-foreground">Score 800+ points to advance to harder levels</p>
            </div>
          </div>

          {gameState.totalScore > 0 && (
            <div className="mb-8 p-6 bg-gradient-to-r from-game-success/10 to-game-success/5 rounded-xl border border-game-success/30">
              <p className="text-lg font-semibold text-foreground">
                🎉 Previous Score: {gameState.totalScore} points
              </p>
              <p className="text-muted-foreground">
                {gameState.message}
              </p>
            </div>
          )}

          <Button 
            onClick={handleStartGame} 
            size="lg" 
            variant="divine"
            className="px-12 py-6 text-lg font-semibold"
          >
            <Play className="w-6 h-6 mr-3" />
            Start Biblical Journey
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <GameHeader 
          level={gameState.level}
          totalScore={gameState.totalScore}
          currentPoints={gameState.currentPoints}
        />

        <RoundBanner 
          message={gameState.message}
          type={gameState.messageType}
          visible={showBanner}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <ClueCard 
              clue={getCurrentClue()}
              clueNumber={gameState.currentClueIndex + 1}
              onAnotherClue={handleNextClue}
              isLoading={false}
            />
          </div>

          <div className="space-y-6">
            <GuessForm 
              characters={allCharacters}
              onGuess={handleGuess}
              isLoading={false}
            />
            
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-gentle">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Progress</p>
                <p className="text-lg font-semibold">
                  Character {gameState.currentCharacterIndex + 1} of {gameState.levelCharacters.length}
                </p>
                <div className="w-full bg-muted/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((gameState.currentCharacterIndex + 1) / gameState.levelCharacters.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;