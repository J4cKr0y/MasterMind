'use client';
import React, { useState, useEffect } from 'react';
import Marbles from './Marbles';

type Color = 'red' | 'purple' | 'blue' | 'green' | 'yellow';
type Row = (Color | null)[];
type Board = Row[];
type Feedback = ('black' | 'white' | null)[];

const getMarbleClass = (color: Color | null): string => {
  if (!color) return "w-8 h-8 rounded-full bg-white border-2 border-gray-300";
  
  const baseClasses = "relative w-8 h-8 mt-10 rounded-full shadow-inner-marble shadow-outer-marble";
  const colorClasses: Record<Color, string> = {
    red: "bg-red-marble",
    purple: "bg-purple-marble",
    blue: "bg-blue-marble",
    green: "bg-green-marble",
    yellow: "bg-yellow-marble",
  };
  return `${baseClasses} ${colorClasses[color]}`;
};

const Game = () => {
  const [board, setBoard] = useState<Board>(Array(10).fill(null).map(() => Array(4).fill(null)));
  const [secretCode, setSecretCode] = useState<Color[]>([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [feedback, setFeedback] = useState<Feedback[]>(Array(10).fill(Array(4).fill(null)));
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const colors: Color[] = ['red', 'purple', 'blue', 'green', 'yellow'];
    const code: Color[] = Array(4).fill(null).map(() => 
      colors[Math.floor(Math.random() * colors.length)]
    );
    setSecretCode(code);
  }, []);

  const checkGuess = (guess: Color[]) => {
    const codeCopy = [...secretCode];
    const guessCopy = [...guess];
    let blacks = 0;
    let whites = 0;
    
    for (let i = 0; i < 4; i++) {
      if (guessCopy[i] === codeCopy[i]) {
        blacks++;
        guessCopy[i] = codeCopy[i] = null as any;
      }
    }
    
    for (let i = 0; i < 4; i++) {
      if (guessCopy[i] !== null) {
        const index = codeCopy.indexOf(guessCopy[i]);
        if (index !== -1) {
          whites++;
          codeCopy[index] = null as any;
        }
      }
    }
    
    const newFeedback: Feedback = [
      ...Array(blacks).fill('black'),
      ...Array(whites).fill('white'),
      ...Array(4 - blacks - whites).fill(null)
    ];
    
    return newFeedback;
  };

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

    const newFeedback = checkGuess(currentGuess as Color[]);
    const newFeedbacks = [...feedback];
    newFeedbacks[currentRow] = newFeedback;
    setFeedback(newFeedbacks);

    if (newFeedback.filter(f => f === 'black').length === 4) {
      setGameOver(true);
      setHasWon(true);
    } else if (currentRow === 9) {
      setGameOver(true);
    } else {
      setCurrentRow(currentRow + 1);
    }
  };

  const FeedbackPeg = ({ type }: { type: 'black' | 'white' | null }) => {
    if (type === null) return (
      <div className="w-3 h-3 rounded-full bg-gray-300" />
    );

    const tooltipText = type === 'black'
      ? "Bonne couleur à la bonne position !"
      : "Bonne couleur mais mauvaise position";

    return (
      <div className="group relative">
        <div className={`w-3 h-3 rounded-full ${
          type === 'black' ? 'bg-gray-900' : 'bg-gray-100'
        } cursor-help`} />
        <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
          {tooltipText}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700">Mastermind</h1>
        {gameOver && (
          <div className="mt-4 text-xl font-medium text-gray-700">
            {hasWon 
              ? "Félicitations ! Vous avez gagné !" 
              : "Game Over ! La partie est terminée."
            }
          </div>
        )}
      </div>

      <div className="flex gap-8">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 mb-4">
              <div className="flex gap-2">
                {row.map((color, colIndex) => (
                  <div
                    key={colIndex}
                    onClick={() => rowIndex === currentRow && placePeg(colIndex)}
                  >
                    {color ? (
                      <div className={getMarbleClass(color)}>
                        <div className="absolute top-0.5 left-1 w-11/12 h-11/12 rounded-full bg-marble-before filter blur-xs z-2"></div>
                        <div className="absolute top-1 left-2 w-full h-full rounded-full bg-marble-after transform -translate-x-3 -translate-y-3 skew-x-2 filter blur-sm"></div>
                      </div>
                    ) : (
                      <div className={getMarbleClass(null)} />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-1 w-8">
                {feedback[rowIndex].map((type, i) => (
                  <FeedbackPeg key={i} type={type} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 p-4 rounded-lg shadow-md">
            <Marbles onSelectColor={setSelectedColor} selectedColor={selectedColor} />
          </div>
          
          <button
            onClick={validateRow}
            disabled={board[currentRow].includes(null) || gameOver}
            className="px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 transition"
          >
            Valider
          </button>
          
          {gameOver && (
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 transition"
            >
              Nouvelle partie
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;