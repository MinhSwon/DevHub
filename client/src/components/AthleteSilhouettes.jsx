import React from 'react';

const AthleteSilhouettes = () => {
  return (
    <div className="flex items-end space-x-4">
      {/* Athlete 1 - Volleyball/Basketball */}
      <div className="relative">
        <div className="w-16 h-20 bg-white rounded-full opacity-80">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
          {/* Body */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-white rounded-full"></div>
          {/* Arms */}
          <div className="absolute top-6 left-2 w-2 h-6 bg-white rounded-full transform rotate-45"></div>
          <div className="absolute top-6 right-2 w-2 h-6 bg-white rounded-full transform -rotate-45"></div>
          {/* Legs */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-white rounded-full"></div>
        </div>
        {/* Ball */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
      </div>

      {/* Athlete 2 - Tennis/Badminton */}
      <div className="relative">
        <div className="w-14 h-20 bg-white rounded-full opacity-80">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
          {/* Body */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-7 bg-white rounded-full"></div>
          {/* Arms */}
          <div className="absolute top-5 left-1 w-1.5 h-5 bg-white rounded-full transform rotate-30"></div>
          <div className="absolute top-5 right-1 w-1.5 h-5 bg-white rounded-full transform -rotate-30"></div>
          {/* Legs */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-5 bg-white rounded-full"></div>
        </div>
        {/* Ball */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Athlete 3 - Soccer */}
      <div className="relative">
        <div className="w-16 h-20 bg-white rounded-full opacity-80">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
          {/* Body */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-7 bg-white rounded-full"></div>
          {/* Arms */}
          <div className="absolute top-5 left-1 w-1.5 h-5 bg-white rounded-full transform rotate-20"></div>
          <div className="absolute top-5 right-1 w-1.5 h-5 bg-white rounded-full transform -rotate-20"></div>
          {/* Legs */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-5 bg-white rounded-full"></div>
        </div>
        {/* Ball */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full">
          <div className="absolute inset-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AthleteSilhouettes;
