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
    <Card className="w-full max-w-xl mx-auto p-6 bg-card/90 backdrop-blur-sm border-border/50 shadow-gentle animate-scale-in">
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Make Your Guess</h3>
          </div>
          <p className="text-sm text-muted-foreground">Select a gender filter and choose a character</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Gender Filter:</label>
            <Select value={genderFilter} onValueChange={(value: 'all' | 'male' | 'female') => setGenderFilter(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Characters</SelectItem>
                <SelectItem value="male">Men</SelectItem>
                <SelectItem value="female">Women</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Choose Character:</label>
            <Select value={selectedName} onValueChange={setSelectedName}>
              <SelectTrigger>
                <SelectValue placeholder="Select a character..." />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {filteredCharacters.map((character) => (
                  <SelectItem key={character.name} value={character.name}>
                    {character.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleGuess}
            disabled={!selectedName || isLoading}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Guess
          </Button>
        </div>
      </div>
    </Card>
  );
};