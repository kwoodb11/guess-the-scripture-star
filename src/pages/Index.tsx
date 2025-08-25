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
      <div className="min-h-screen bg-background py-12 px-4 scanlines">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6 p-4 bg-card border-2 border-primary shadow-pixel">
              <div className="p-2 bg-primary text-primary-foreground shadow-pixel">
                <BookOpen className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-pixel text-primary text-glow animate-neon-glow text-shadow-pixel">
                GUESS WHO
              </h1>
            </div>
            <p className="text-lg md:text-xl font-pixel text-secondary text-glow mb-4">BIBLE CHARACTERS</p>
            <p className="text-xs font-pixel text-muted-foreground max-w-2xl mx-auto leading-relaxed uppercase">
              Test your biblical knowledge! Guess characters with fewest clues. 
              Score 800+ points per level to advance!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border-2 border-primary p-6 shadow-pixel">
              <h3 className="text-sm font-pixel mb-3 text-primary text-glow uppercase">🎯 OBJECTIVE</h3>
              <p className="text-xs font-pixel text-muted-foreground">GUESS BIBLE CHARACTERS USING FEWEST CLUES</p>
            </div>
            <div className="bg-card border-2 border-game-success p-6 shadow-pixel">
              <h3 className="text-sm font-pixel mb-3 text-game-success text-glow uppercase">⭐ SCORING</h3>
              <p className="text-xs font-pixel text-muted-foreground">START 100 POINTS, LOSE 10 PER CLUE/GUESS</p>
            </div>
            <div className="bg-card border-2 border-game-warning p-6 shadow-pixel">
              <h3 className="text-sm font-pixel mb-3 text-game-warning text-glow uppercase">🚀 PROGRESS</h3>
              <p className="text-xs font-pixel text-muted-foreground">SCORE 800+ TO ADVANCE LEVELS</p>
            </div>
          </div>

          {gameState.totalScore > 0 && (
            <div className="mb-8 p-6 bg-card border-2 border-game-success shadow-pixel">
              <p className="text-sm font-pixel text-game-success text-glow uppercase">
                🎉 PREVIOUS SCORE: {gameState.totalScore} POINTS
              </p>
              <p className="text-xs font-pixel text-muted-foreground mt-2 uppercase">
                {gameState.message}
              </p>
            </div>
          )}

          <Button 
            onClick={handleStartGame} 
            size="lg" 
            variant="neon"
            className="px-12 py-6 text-sm font-pixel"
          >
            <Play className="w-6 h-6 mr-3" />
            START BIBLICAL JOURNEY
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 scanlines">
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
            
            <div className="bg-card border-2 border-accent p-4 shadow-pixel">
              <div className="text-center space-y-2">
                <p className="text-xs font-pixel text-muted-foreground uppercase">PROGRESS</p>
                <p className="text-sm font-pixel text-accent text-glow">
                  CHARACTER {gameState.currentCharacterIndex + 1} OF {gameState.levelCharacters.length}
                </p>
                <div className="w-full bg-muted border-2 border-muted h-4 shadow-pixel">
                  <div 
                    className="bg-primary h-full transition-all duration-500 shadow-neon"
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