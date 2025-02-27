// src/components/PegSlot.tsx
'use client';
import { Color } from '../types/game';

interface PegSlotProps {
  color: Color | null;
  onClick: () => void;
}

export function PegSlot({ color, onClick }: PegSlotProps) {
  const getMarbleClass = (color: Color | null): string => {
    if (!color) return "w-8 h-8 rounded-full bg-white border-2 border-gray-300 cursor-pointer";
    
    const baseClasses = "relative w-8 h-8 mt-10 rounded-full shadow-inner-marble shadow-outer-marble cursor-pointer";
    const colorClasses: Record<Color, string> = {
      red: "bg-red-marble",
      purple: "bg-purple-marble",
      blue: "bg-blue-marble",
      green: "bg-green-marble",
      yellow: "bg-yellow-marble",
    };
    return `${baseClasses} ${colorClasses[color]}`;
  };

  return (
    <div onClick={onClick}>
      {color ? (
        <div className={getMarbleClass(color)}>
          <div className="absolute top-0.5 left-1 w-11/12 h-11/12 rounded-full bg-marble-before filter blur-xs z-2"></div>
          <div className="absolute top-1 left-2 w-full h-full rounded-full bg-marble-after transform -translate-x-3 -translate-y-3 skew-x-2 filter blur-sm"></div>
        </div>
      ) : (
        <div className={getMarbleClass(null)} />
      )}
    </div>
  );
}