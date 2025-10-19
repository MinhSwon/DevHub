import React from 'react';

const SportsEquipment = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Pickleball Paddle */}
      <div className="relative">
        <div className="w-16 h-20 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg transform rotate-12 shadow-lg">
          <div className="absolute inset-2 bg-white opacity-20 rounded"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Soccer Ball */}
      <div className="relative">
        <div className="w-12 h-12 bg-black rounded-full shadow-lg">
          <div className="absolute inset-2 bg-white rounded-full"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1/2 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1/2 right-1 w-1 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Basketball */}
      <div className="relative">
        <div className="w-10 h-10 bg-orange-500 rounded-full shadow-lg">
          <div className="absolute inset-1 border border-black rounded-full"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Pickleball */}
      <div className="relative">
        <div className="w-8 h-8 bg-orange-500 rounded-full shadow-lg">
          <div className="absolute inset-1 bg-white rounded-full"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SportsEquipment;
