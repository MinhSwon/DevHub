import React from 'react';

const SimpleLogo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-20 h-6",
    default: "w-24 h-8", 
    large: "w-28 h-10",
    xl: "w-32 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src="/umt-logo.svg"
        alt="UMT Sport Hub"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};

export default SimpleLogo;
