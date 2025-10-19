import React from 'react';
import SimpleLogo from './SimpleLogo';

const TopHeader = () => {
  return (
           <div className="bg-gradient-to-r from-ocean-primary to-ocean-medium text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left side - Brand */}
          <div className="flex items-center space-x-3">
            <SimpleLogo className="w-8 h-8" size="small" />
            <div className="hidden sm:block">
              <span className="font-bold text-sm">UMT SPORT HUB</span>
              <span className="text-xs opacity-90 ml-2">Trung tâm thể thao hàng đầu</span>
            </div>
          </div>
          
          {/* Right side - Contact & Offer */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span>📞</span>
                <span className="font-semibold">123456</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📧</span>
                <span className="font-semibold">support@umt.edu.vn</span>
              </div>
            </div>
            <a 
              href="#" 
                     className="bg-coral hover:bg-coral-light text-white px-2 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap"
            >
              🎓 UMT - Giảm 20%
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
