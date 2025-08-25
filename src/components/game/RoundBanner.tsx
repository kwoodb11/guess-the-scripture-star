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
        return 'bg-game-success/10 border-game-success/30';
      case 'error':
        return 'bg-destructive/10 border-destructive/30';
      case 'info':
        return 'bg-game-info/10 border-game-info/30';
      default:
        return 'bg-muted/10 border-border/30';
    }
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto p-4 ${getBgColor()} animate-fade-in mb-6`}>
      <div className="flex items-center justify-center gap-3">
        {getIcon()}
        <p className="text-sm font-medium text-foreground text-center">{message}</p>
      </div>
    </Card>
  );
};