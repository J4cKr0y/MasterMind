// src/components/GameBoard.tsx
'use client';
import { useState } from 'react';
import { Color, Board, Feedback } from '../types/game';
import { checkGuess } from '../lib/gameLogic';
import { PegSlot } from './PegSlot';
import { FeedbackRow } from './FeedbackRow';
import { GameControls } from './GameControls';

interface GameBoardProps {
  readonly initialSecretCode: Color[];
}

export default function GameBoard({ initialSecretCode }: GameBoardProps) {
  const [board, setBoard] = useState<Board>(
    Array(10).fill(null).map(() => Array(4).fill(null))
  );
  const [feedback, setFeedback] = useState<Feedback[]>(
    Array(10).fill(Array(4).fill(null))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const placePeg = (colIndex: number) => {
    if (gameOver || !selectedColor || board[currentRow][colIndex] !== null) return;

    const newBoard = [...board];
    newBoard[currentRow] = [...newBoard[currentRow]];
    newBoard[currentRow][colIndex] = selectedColor;
    setBoard(newBoard);
  };

  const validateRow = () => {
    const currentGuess = board[currentRow];
    if (currentGuess.includes(null)) return;

    const { feedback: newFeedback, isWin } = checkGuess(
      currentGuess as Color[], 
      initialSecretCode
    );

    const newFeedbacks = [...feedback];
    newFeedbacks[currentRow] = newFeedback;
    setFeedback(newFeedbacks);

    if (isWin) {
      setGameOver(true);
      setHasWon(true);
    } else if (currentRow === 9) {
      setGameOver(true);
    } else {
      setCurrentRow(currentRow + 1);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 mb-4">
            <div className="flex gap-2">
              {row.map((color, colIndex) => (
                <PegSlot
                  key={colIndex}
                  color={color}
                  onClick={() => rowIndex === currentRow && placePeg(colIndex)}
                />
              ))}
            </div>
            <FeedbackRow feedback={feedback[rowIndex]} />
          </div>
        ))}
      </div>

      <GameControls
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        onValidate={validateRow}
        canValidate={!board[currentRow].includes(null)}
        gameOver={gameOver}
        hasWon={hasWon}
      />
    </div>
  );
}