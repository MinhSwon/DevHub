import React from 'react';

const UMTSportsFacilities = () => {
  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Main Background - Football Field */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600">
        {/* Field Lines */}
        <div className="absolute inset-0">
          {/* Center Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
          
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Goal Areas */}
          <div className="absolute top-1/2 left-4 w-16 h-24 border-2 border-white transform -translate-y-1/2">
            <div className="absolute top-1/2 right-0 w-8 h-16 border-2 border-white border-l-0 transform -translate-y-1/2"></div>
          </div>
          <div className="absolute top-1/2 right-4 w-16 h-24 border-2 border-white transform -translate-y-1/2">
            <div className="absolute top-1/2 left-0 w-8 h-16 border-2 border-white border-r-0 transform -translate-y-1/2"></div>
          </div>
          
          {/* Penalty Areas */}
          <div className="absolute top-1/2 left-0 w-24 h-32 border-2 border-white transform -translate-y-1/2">
            <div className="absolute top-1/2 right-0 w-12 h-20 border-2 border-white border-l-0 transform -translate-y-1/2"></div>
          </div>
          <div className="absolute top-1/2 right-0 w-24 h-32 border-2 border-white transform -translate-y-1/2">
            <div className="absolute top-1/2 left-0 w-12 h-20 border-2 border-white border-r-0 transform -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Field Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      {/* Basketball Courts */}
      <div className="absolute top-4 right-4 w-32 h-20 bg-orange-500 rounded-lg opacity-90">
        <div className="absolute inset-1 border-2 border-white rounded"></div>
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* UMT Building */}
      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
        <div className="w-16 h-12 bg-gradient-to-br from-ocean-primary to-ocean-medium rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">UMT</span>
        </div>
      </div>
      
      {/* Lighting Towers */}
      <div className="absolute top-8 left-1/4 w-1 h-16 bg-gray-600">
        <div className="absolute -top-2 -left-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-8 right-1/4 w-1 h-16 bg-gray-600">
        <div className="absolute -top-2 -left-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-8 left-1/3 w-1 h-16 bg-gray-600">
        <div className="absolute -top-2 -left-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-8 right-1/3 w-1 h-16 bg-gray-600">
        <div className="absolute -top-2 -left-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Trees and Greenery */}
      <div className="absolute bottom-4 left-8 w-8 h-8 bg-green-600 rounded-full opacity-80"></div>
      <div className="absolute bottom-4 right-8 w-8 h-8 bg-green-600 rounded-full opacity-80"></div>
      <div className="absolute top-1/2 left-2 w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
      <div className="absolute top-1/2 right-2 w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
      
      {/* Water Area (River/Lake) */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-8 bg-gradient-to-b from-blue-400 to-blue-600 opacity-80">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '8px 8px'
        }}></div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Title Overlay */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
          <h3 className="text-xl font-bold text-ocean-primary mb-2">🏟️ UMT Sports Complex</h3>
          <p className="text-sm text-text-secondary">
            Sân bóng đá hiện đại với hệ thống chiếu sáng chuyên nghiệp
          </p>
          <div className="flex items-center mt-2 space-x-4 text-xs text-text-secondary">
            <span>⚽ Sân bóng đá</span>
            <span>🏀 Sân bóng rổ</span>
            <span>🌳 Khuôn viên xanh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMTSportsFacilities;
