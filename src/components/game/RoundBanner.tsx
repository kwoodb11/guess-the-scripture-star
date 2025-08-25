import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Info } from "lucide-react";

interface RoundBannerProps {
  message: string;
  type: 'success' | 'error' | 'info' | null;
  visible: boolean;
}

export const RoundBanner = ({ message, type, visible }: RoundBannerProps) => {
  if (!visible || !type) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-game-success" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-destructive" />;
      case 'info':
        return <Info className="w-5 h-5 text-game-info" />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-card border-2 border-game-success shadow-neon';
      case 'error':
        return 'bg-card border-2 border-destructive shadow-pixel';
      case 'info':
        return 'bg-card border-2 border-game-info shadow-pixel';
      default:
        return 'bg-card border-2 border-border shadow-pixel';
    }
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto p-4 ${getBgColor()} animate-fade-in mb-6`}>
      <div className="flex items-center justify-center gap-3">
        {getIcon()}
        <p className="text-xs font-pixel text-foreground text-center uppercase">{message}</p>
      </div>
    </Card>
  );
};