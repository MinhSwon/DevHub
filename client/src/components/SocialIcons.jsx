import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex flex-col space-y-3">
      {/* Zalo Icon */}
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer shadow-lg">
        <div className="text-white font-bold text-sm">Z</div>
      </div>
      
      {/* Facebook Icon */}
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer shadow-lg">
        <div className="text-white font-bold text-sm">f</div>
      </div>
    </div>
  );
};

export default SocialIcons;
