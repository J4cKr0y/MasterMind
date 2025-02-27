// src/app/page.tsx
import { Suspense } from 'react';
import { generateSecretCode } from '../lib/gameLogic';
import GameBoard from '../components/GameBoard';
import Loading from '../components/Loading';

export default function Home() {
  const secretCode = generateSecretCode();
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Mastermind</h1>
      <Suspense fallback={<Loading />}>
        <GameBoard initialSecretCode={secretCode} />
      </Suspense>
    </div>
  );
}