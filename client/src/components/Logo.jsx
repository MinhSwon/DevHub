import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  const containerSizes = {
    small: "w-24 h-8",
    default: "w-32 h-10", 
    large: "w-40 h-12",
    xl: "w-48 h-14"
  };

  return (
    <div className={`${containerSizes[size]} ${className}`}>
      <img
        src="/umt-logo.svg"
        alt="UMT Sport Hub"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
