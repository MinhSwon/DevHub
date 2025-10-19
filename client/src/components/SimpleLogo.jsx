import React from 'react';

const SimpleLogo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12", 
    large: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-ocean-primary to-ocean-medium rounded-xl flex items-center justify-center relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }}></div>
        </div>
        
        {/* Logo content */}
        <div className="relative z-10 text-center">
          <div className="text-white font-bold text-lg leading-none">UMT</div>
          <div className="text-ocean-light font-black text-xs leading-none">SPORTS</div>
          <div className="text-white font-black text-xs leading-none">HUB</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleLogo;
