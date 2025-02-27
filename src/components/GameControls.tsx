// src/components/GameControls.tsx
'use client';
import { Color } from '../types/game';
import Marbles from './Marbles';

interface GameControlsProps {
  selectedColor: Color | null;
  onSelectColor: (color: Color) => void;
  onValidate: () => void;
  canValidate: boolean;
  gameOver: boolean;
  hasWon: boolean;
}

export function GameControls({
  selectedColor,
  onSelectColor,
  onValidate,
  canValidate,
  gameOver,
  hasWon
}: GameControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
        <Marbles onSelectColor={onSelectColor} selectedColor={selectedColor} />
      </div>
      
      <button
        onClick={onValidate}
        disabled={!canValidate || gameOver}
        className="px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition"
      >
        Valider
      </button>
      
      {gameOver && (
        <>
          <div className="text-center text-xl font-medium text-gray-700">
            {hasWon 
              ? "Félicitations ! Vous avez gagné !" 
              : "Game Over ! La partie est terminée."
            }
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 transition"
          >
            Nouvelle partie
          </button>
        </>
      )}
    </div>
  );
}
