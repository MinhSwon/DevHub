import React from 'react';
import SportsEquipment from '../components/SportsEquipment';
import AthleteSilhouettes from '../components/AthleteSilhouettes';
import SocialIcons from '../components/SocialIcons';
import Logo from '../components/Logo';

const BannerDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-umt-light-blue">
      {/* Banner Hero Section */}
      <div className="relative bg-gradient-to-br from-umt-blue via-blue-700 to-blue-900 text-white" 
           style={{ height: '100vh' }}>
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Left Side - Sports Equipment */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <SportsEquipment />
              </div>

              {/* Center - Main Content */}
              <div className="lg:col-span-1 text-center">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-4">
                    UMT SPORTS HUB
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    Trải nghiệm thể thao thông minh cùng UMT
                  </p>
                  <p className="text-lg mb-8 opacity-80">
                    Khám phá các sân thể thao hiện đại với dịch vụ chuyên nghiệp và công nghệ tiên tiến
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-umt-blue hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    ⚽ Đặt Sân Ngay
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-umt-blue font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    🔍 Tìm Kiếm Nâng Cao
                  </button>
                  <button className="bg-umt-red hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    🛒 Cửa Hàng Thể Thao
                  </button>
                </div>
              </div>

              {/* Right Side - Athletes & Social */}
              <div className="lg:col-span-1 flex flex-col items-center lg:items-end space-y-8">
                {/* Athlete Silhouettes */}
                <div className="flex justify-center lg:justify-end">
                  <AthleteSilhouettes />
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center lg:justify-end">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white opacity-5 rounded-full animate-ping delay-500"></div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-umt-blue mb-4">🎨 Banner Design Mới</h2>
          <p className="text-xl text-gray-600">Thiết kế theo banner quảng cáo với phong cách thể thao năng động</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo Demo */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">🏷️ Logo Mới</h3>
            <div className="flex justify-center mb-4">
              <Logo className="w-32 h-20" size="default" />
            </div>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✅ UMT màu trắng</li>
              <li>✅ SPORTS màu cyan</li>
              <li>✅ HUB màu trắng căn phải</li>
              <li>✅ Biểu tượng LL đỏ/xanh</li>
              <li>✅ Họa tiết lưới nền</li>
            </ul>
          </div>

          {/* Sports Equipment Demo */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">⚽ Dụng Cụ Thể Thao</h3>
            <div className="flex justify-center mb-4">
              <SportsEquipment />
            </div>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✅ Vợt pickleball teal</li>
              <li>✅ Bóng đá đen trắng</li>
              <li>✅ Bóng rổ cam</li>
              <li>✅ Bóng pickleball cam</li>
            </ul>
          </div>

          {/* Athletes Demo */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">🏃 Hình Bóng VĐV</h3>
            <div className="flex justify-center mb-4">
              <AthleteSilhouettes />
            </div>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✅ VĐV bóng chuyền/rổ</li>
              <li>✅ VĐV tennis/cầu lông</li>
              <li>✅ VĐV bóng đá</li>
              <li>✅ Silhouette trắng</li>
            </ul>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎨 Bảng Màu Mới</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-umt-blue rounded-lg mx-auto mb-3 shadow-lg"></div>
              <p className="font-semibold text-gray-900">UMT Blue</p>
              <p className="text-sm text-gray-600">#0057B7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-lg mx-auto mb-3 shadow-lg"></div>
              <p className="font-semibold text-gray-900">Cyan</p>
              <p className="text-sm text-gray-600">#22D3EE</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-umt-red rounded-lg mx-auto mb-3 shadow-lg"></div>
              <p className="font-semibold text-gray-900">UMT Red</p>
              <p className="text-sm text-gray-600">#DA291C</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-400 rounded-lg mx-auto mb-3 shadow-lg"></div>
              <p className="font-semibold text-gray-900">Teal</p>
              <p className="text-sm text-gray-600">#2DD4BF</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">✨ Tính Năng Mới</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2">Banner Hero</h4>
              <p className="text-sm opacity-90">Thiết kế banner theo phong cách quảng cáo thể thao</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚽</div>
              <h4 className="font-semibold mb-2">Dụng Cụ Thể Thao</h4>
              <p className="text-sm opacity-90">Icon dụng cụ thể thao với màu sắc chân thực</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏃</div>
              <h4 className="font-semibold mb-2">Hình Bóng VĐV</h4>
              <p className="text-sm opacity-90">Silhouette vận động viên tạo cảm giác năng động</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDemo;
