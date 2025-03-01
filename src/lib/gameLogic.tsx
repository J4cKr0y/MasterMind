// src/lib/gameLogic.tsx
import { Color, CodePeg } from '../types/game';

export const generateSecretCode = (): Color[] => {
  const colors: Color[] = ['red', 'purple', 'blue', 'green', 'yellow'];
  return Array(4).fill(null).map(() => 
    colors[Math.floor(Math.random() * colors.length)]
  );
};

export const checkGuess = (guess: Color[], secretCode: Color[]) => {
  const codeCopy = [...secretCode] as CodePeg[];
  const guessCopy = [...guess] as CodePeg[];
  let blacks = 0;
  let whites = 0;
  
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] === codeCopy[i]) {
      blacks++;
      guessCopy[i] = codeCopy[i] = null;
    }
  }
  
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] !== null) {
      const index = codeCopy.indexOf(guessCopy[i]);
      if (index !== -1) {
        whites++;
        codeCopy[index] = null;
      }
    }
  }
  
  return {
    feedback: [
      ...Array(blacks).fill('black'),
      ...Array(whites).fill('white'),
      ...Array(4 - blacks - whites).fill(null)
    ] as ('black' | 'white' | null)[],
    isWin: blacks === 4
  };
};