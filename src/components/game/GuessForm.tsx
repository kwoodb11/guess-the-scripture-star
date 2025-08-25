import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Send } from "lucide-react";
import { useState } from "react";

interface GuessFormProps {
  characters: Array<{
    name: string;
    gender: 'male' | 'female';
  }>;
  onGuess: (name: string) => void;
  isLoading?: boolean;
}

export const GuessForm = ({ characters, onGuess, isLoading }: GuessFormProps) => {
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [selectedName, setSelectedName] = useState<string>('');

  const filteredCharacters = characters.filter(character => 
    genderFilter === 'all' || character.gender === genderFilter
  );

  const handleGuess = () => {
    if (selectedName) {
      onGuess(selectedName);
      setSelectedName('');
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto p-6 bg-card border-2 border-secondary shadow-pixel animate-scale-in">
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="p-2 bg-secondary text-secondary-foreground shadow-pixel">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-pixel text-secondary text-glow uppercase">MAKE GUESS</h3>
          </div>
          <p className="text-xs font-pixel text-muted-foreground uppercase">FILTER AND CHOOSE</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-pixel text-foreground mb-2 block uppercase">GENDER:</label>
            <Select value={genderFilter} onValueChange={(value: 'all' | 'male' | 'female') => setGenderFilter(value)}>
              <SelectTrigger className="border-2 border-border bg-input shadow-pixel font-pixel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-2 border-border bg-card shadow-pixel">
                <SelectItem value="all" className="font-pixel">ALL CHARACTERS</SelectItem>
                <SelectItem value="male" className="font-pixel">MEN</SelectItem>
                <SelectItem value="female" className="font-pixel">WOMEN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-pixel text-foreground mb-2 block uppercase">CHARACTER:</label>
            <Select value={selectedName} onValueChange={setSelectedName}>
              <SelectTrigger className="border-2 border-border bg-input shadow-pixel font-pixel">
                <SelectValue placeholder="SELECT CHARACTER..." />
              </SelectTrigger>
              <SelectContent className="max-h-60 border-2 border-border bg-card shadow-pixel">
                {filteredCharacters.map((character) => (
                  <SelectItem key={character.name} value={character.name} className="font-pixel">
                    {character.name.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleGuess}
            disabled={!selectedName || isLoading}
            size="lg"
            variant="neon"
            className="w-full font-pixel"
          >
            <Send className="w-4 h-4 mr-2" />
            SUBMIT GUESS
          </Button>
        </div>
      </div>
    </Card>
  );
};