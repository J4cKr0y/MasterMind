//scr/app/components/Background.tsx
import React from 'react';
import Marbles from './Marbles'

const Background: React.FC = () => {
  return (
    <div data-name="Background" className="flex flex-col justify-center items-center h-screen">

      <div data-name="Title" className="text-center mb-8">
        <h1 className="text-4xl font-bold">MasterMind</h1>
      </div>
      
      <div data-name="Game" className="flex w-full h-full justify-center">

        <div  data-name="Board" className="w-1/4 h-5/6 bg-gray-200 flex flex-col justify-around items-center">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div key={`Line${rowIndex}`} className="flex justify-around w-full">
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <div key={`Column${colIndex}`} data-name={`Line${rowIndex}Column${colIndex}`} className="w-8 h-8 bg-white border border-gray-400 rounded-full"></div>
              ))}
            </div>
          ))}
        </div>

         <div data-name="Pick up zone" className="w-1/6 h-1/2 bg-gray-300 flex flex-col justify-around items-center ml-4">
        <Marbles />
        </div> 

      </div>
    </div>
  );
};

export default Background;
