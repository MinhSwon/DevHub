import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "text-xs",
    default: "text-sm", 
    large: "text-base",
    xl: "text-lg"
  };

  const containerSizes = {
    small: "w-20 h-12",
    default: "w-28 h-18", 
    large: "w-36 h-24",
    xl: "w-44 h-28"
  };

  return (
    <div className={`relative ${containerSizes[size]} ${className}`}>
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean-dark to-ocean-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Logo content */}
        <div className="relative z-10 p-3">
          {/* UMT + LL Symbol */}
          <div className="flex items-center mb-1">
            <span className="text-white font-black text-xl tracking-wider drop-shadow-lg">UMT</span>
            <div className="relative ml-2">
              {/* LL Symbol */}
              <div className="flex items-center">
                {/* Red L (horizontal) */}
                <div className="w-3 h-1 bg-coral rounded-sm"></div>
                {/* Blue L (vertical) */}
                <div className="w-1 h-3 bg-ocean-light rounded-sm ml-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* SPORTS */}
          <div className="mb-0.5">
            <span className="text-ocean-light font-black text-2xl tracking-wider drop-shadow-lg">SPORTS</span>
          </div>
          
          {/* HUB */}
          <div className="text-right">
            <span className="text-white font-black text-lg tracking-wider drop-shadow-lg">HUB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
