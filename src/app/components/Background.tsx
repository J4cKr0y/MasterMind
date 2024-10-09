//scr/app/components/Background.tsx
import React from 'react';

const Background: React.FC = () => {
  return (
    <div data-name="Background" className="flex flex-col justify-center items-center h-screen">

      <div data-name="Title" className="text-center mb-8">
        <h1 className="text-4xl font-bold">MasterMind</h1>
      </div>
      
      <div data-name="Game" className="flex w-full h-full justify-center">

        <div  data-name="Board" className="w-1/3 h-5/6 bg-gray-200 flex flex-col justify-around items-center">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div key={`Line${rowIndex}`} className="flex justify-around w-full">
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <div key={`Column${colIndex}`} data-name={`Line${rowIndex}Column${colIndex}`} className="w-8 h-8 bg-white border border-gray-400 rounded-full"></div>
              ))}
            </div>
          ))}
        </div>
{/*<div className="w-8 h-8 bg-red-500 border border-red-400 rounded-full"></div>
<div className="w-8 h-8 bg-blue-500 border border-blue-400 rounded-full"></div>
<div className="w-8 h-8 bg-green-500 border border-green-400 rounded-full"></div>
<div className="w-8 h-8 bg-yellow-500 border border-yellow-400 rounded-full"></div>
<div className="w-8 h-8 bg-purple-500 border border-purple-400 rounded-full"></div>*/}
         <div data-name="Pick up zone" className="w-1/6 h-1/2 bg-gray-300 flex flex-col justify-around items-center ml-4">
          {['red', 'purple', 'blue', 'green', 'yellow'].map((color, index) => (
            <div key={`marble${index}`} data-name={`marble${index}`} className={`w-8 h-8 bg-${color}-500 border border-${color}-400 rounded-full`}></div>
          ))}
        </div> 

      </div>
    </div>
  );
};

export default Background;
