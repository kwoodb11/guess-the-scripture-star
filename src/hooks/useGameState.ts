import { useState, useCallback } from 'react';
import { BibleCharacter, getCharactersByLevel } from '@/data/characters';

export interface GameState {
  level: number;
  totalScore: number;
  currentCharacterIndex: number;
  currentClueIndex: number;
  currentPoints: number;
  wrongGuesses: number;
  isGameActive: boolean;
  currentCharacter: BibleCharacter | null;
  levelCharacters: BibleCharacter[];
  message: string;
  messageType: 'success' | 'error' | 'info' | null;
}

const POINTS_PER_CHARACTER = 100;
const POINTS_DEDUCTION = 10;
const MAX_WRONG_GUESSES = 3;
const MAX_CLUES = 5;
const LEVEL_PASSING_SCORE = 800;

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    totalScore: 0,
    currentCharacterIndex: 0,
    currentClueIndex: 0,
    currentPoints: POINTS_PER_CHARACTER,
    wrongGuesses: 0,
    isGameActive: false,
    currentCharacter: null,
    levelCharacters: [],
    message: '',
    messageType: null
  });

  const startGame = useCallback(() => {
    const levelCharacters = getCharactersByLevel(1);
    const shuffled = [...levelCharacters].sort(() => Math.random() - 0.5);
    
    setGameState({
      level: 1,
      totalScore: 0,
      currentCharacterIndex: 0,
      currentClueIndex: 0,
      currentPoints: POINTS_PER_CHARACTER,
      wrongGuesses: 0,
      isGameActive: true,
      currentCharacter: shuffled[0],
      levelCharacters: shuffled,
      message: `Level 1 started! Complete 10 characters to advance.`,
      messageType: 'info'
    });
  }, []);

  const getNextClue = useCallback(() => {
    setGameState(prev => {
      if (!prev.currentCharacter || prev.currentClueIndex >= MAX_CLUES - 1) {
        return prev;
      }

      return {
        ...prev,
        currentClueIndex: prev.currentClueIndex + 1,
        currentPoints: Math.max(0, prev.currentPoints - POINTS_DEDUCTION),
        message: `Clue ${prev.currentClueIndex + 2} revealed. ${prev.currentPoints - POINTS_DEDUCTION} points remaining.`,
        messageType: 'info' as const
      };
    });
  }, []);

  const makeGuess = useCallback((guessedName: string) => {
    setGameState(prev => {
      if (!prev.currentCharacter) return prev;

      const isCorrect = guessedName === prev.currentCharacter.name;
      
      if (isCorrect) {
        const newTotalScore = prev.totalScore + prev.currentPoints;
        const nextIndex = prev.currentCharacterIndex + 1;
        
        if (nextIndex >= prev.levelCharacters.length) {
          // Level complete
          if (newTotalScore >= LEVEL_PASSING_SCORE) {
            // Passed level
            const nextLevel = prev.level + 1;
            const nextLevelCharacters = getCharactersByLevel(nextLevel);
            
            if (nextLevelCharacters.length === 0) {
              // Game complete
              return {
                ...prev,
                totalScore: newTotalScore,
                isGameActive: false,
                message: `🎉 Congratulations! You completed the entire game with ${newTotalScore} points!`,
                messageType: 'success'
              };
            }
            
            // Start next level
            const shuffled = [...nextLevelCharacters].sort(() => Math.random() - 0.5);
            return {
              ...prev,
              level: nextLevel,
              totalScore: newTotalScore,
              currentCharacterIndex: 0,
              currentClueIndex: 0,
              currentPoints: POINTS_PER_CHARACTER,
              wrongGuesses: 0,
              currentCharacter: shuffled[0],
              levelCharacters: shuffled,
              message: `🎊 Level ${prev.level} complete! Starting Level ${nextLevel}...`,
              messageType: 'success'
            };
          } else {
            // Failed level
            const shuffled = [...prev.levelCharacters].sort(() => Math.random() - 0.5);
            return {
              ...prev,
              totalScore: 0, // Reset score on level failure
              currentCharacterIndex: 0,
              currentClueIndex: 0,
              currentPoints: POINTS_PER_CHARACTER,
              wrongGuesses: 0,
              currentCharacter: shuffled[0],
              levelCharacters: shuffled,
              message: `❌ Level failed! You need 800+ points to advance. Starting over...`,
              messageType: 'error'
            };
          }
        } else {
          // Next character in same level
          return {
            ...prev,
            totalScore: newTotalScore,
            currentCharacterIndex: nextIndex,
            currentClueIndex: 0,
            currentPoints: POINTS_PER_CHARACTER,
            wrongGuesses: 0,
            currentCharacter: prev.levelCharacters[nextIndex],
            message: `✅ Correct! +${prev.currentPoints} points. Next character...`,
            messageType: 'success'
          };
        }
      } else {
        // Wrong guess
        const newWrongGuesses = prev.wrongGuesses + 1;
        const newPoints = Math.max(0, prev.currentPoints - POINTS_DEDUCTION);
        
        if (newWrongGuesses >= MAX_WRONG_GUESSES) {
          // Too many wrong guesses, move to next character with 0 points
          const nextIndex = prev.currentCharacterIndex + 1;
          
          if (nextIndex >= prev.levelCharacters.length) {
            // Level complete with failure
            const shuffled = [...prev.levelCharacters].sort(() => Math.random() - 0.5);
            return {
              ...prev,
              totalScore: 0,
              currentCharacterIndex: 0,
              currentClueIndex: 0,
              currentPoints: POINTS_PER_CHARACTER,
              wrongGuesses: 0,
              currentCharacter: shuffled[0],
              levelCharacters: shuffled,
              message: `❌ Too many wrong guesses! The answer was ${prev.currentCharacter.name}. Level restarting...`,
              messageType: 'error'
            };
          } else {
            return {
              ...prev,
              currentCharacterIndex: nextIndex,
              currentClueIndex: 0,
              currentPoints: POINTS_PER_CHARACTER,
              wrongGuesses: 0,
              currentCharacter: prev.levelCharacters[nextIndex],
              message: `❌ Too many wrong guesses! The answer was ${prev.currentCharacter.name}. Next character...`,
              messageType: 'error'
            };
          }
        } else {
          return {
            ...prev,
            wrongGuesses: newWrongGuesses,
            currentPoints: newPoints,
            message: `❌ Wrong! ${MAX_WRONG_GUESSES - newWrongGuesses} guesses left. -10 points.`,
            messageType: 'error'
          };
        }
      }
    });
  }, []);

  const getCurrentClue = useCallback(() => {
    if (!gameState.currentCharacter) return '';
    return gameState.currentCharacter.clues[gameState.currentClueIndex] || '';
  }, [gameState.currentCharacter, gameState.currentClueIndex]);

  return {
    gameState,
    startGame,
    getNextClue,
    makeGuess,
    getCurrentClue
  };
};