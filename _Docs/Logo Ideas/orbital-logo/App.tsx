import React from 'react';
import SpaceLogo from './components/SpaceLogo';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-gray-950 overflow-hidden text-white">
      {/* Background Stars Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-1/4 left-1/4 opacity-70 animate-pulse"></div>
        <div className="absolute w-[3px] h-[3px] bg-blue-300 rounded-full top-1/3 left-2/3 opacity-50"></div>
        <div className="absolute w-[1px] h-[1px] bg-white rounded-full top-1/2 left-1/2 opacity-80"></div>
        <div className="absolute w-[2px] h-[2px] bg-purple-300 rounded-full top-3/4 left-1/5 opacity-60 animate-pulse"></div>
        <div className="absolute w-[1px] h-[1px] bg-white rounded-full top-10 left-10 opacity-40"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full bottom-10 right-20 opacity-70"></div>
      </div>
      
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center p-8">
        <div className="mb-12 text-center opacity-60 tracking-widest text-sm font-light uppercase">
          Interact with the debris
        </div>
        
        <SpaceLogo />
        
        <div className="mt-20 opacity-30 text-xs font-mono">
          Hover over pieces to activate orbit
        </div>
      </div>
    </div>
  );
};

export default App;