import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SimpleLogo from '../components/SimpleLogo';
import UMTSportsFacilities from '../components/UMTSportsFacilities';
import SportsEquipment from '../components/SportsEquipment';
import AthleteSilhouettes from '../components/AthleteSilhouettes';
import SocialIcons from '../components/SocialIcons';

const UMTShowcase = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-ocean-deep via-ocean-dark to-ocean-primary text-white py-20 relative overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Logo className="w-40 h-28" size="xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-4 animate-fade-in">
              🏟️ UMT SPORTS HUB
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay-200">
              Khu phức hợp thể thao hiện đại với sân bóng đá, bóng rổ và không gian xanh
            </p>
            <p className="text-lg mb-8 opacity-80 animate-fade-in-delay-400">
              Trải nghiệm thiết kế trực quan, hiện đại với Ocean Deep Theme
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Sports Equipment */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <SportsEquipment />
            </div>

            {/* Center - Main Content */}
            <div className="lg:col-span-1 text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Cơ Sở Vật Chất UMT</h2>
                <p className="text-lg opacity-90 mb-6">
                  Sân bóng đá hiện đại với hệ thống chiếu sáng chuyên nghiệp
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-white text-ocean-primary hover:bg-ocean-pale font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🏠 Trang Chủ
                </Link>
                <Link
                  to="/booking"
                  className="border-2 border-white text-white hover:bg-white hover:text-ocean-primary font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  ⚽ Đặt Sân
                </Link>
                <Link
                  to="/facilities"
                  className="bg-coral hover:bg-coral-light text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🏟️ Cơ Sở
                </Link>
              </div>
            </div>

            {/* Right Side - Athletes & Social */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-end space-y-8">
              <div className="flex justify-center lg:justify-end">
                <AthleteSilhouettes />
              </div>
              <div className="flex justify-center lg:justify-end">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UMT Sports Facilities Showcase */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🏟️ Khu Phức Hợp Thể Thao UMT</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Hình ảnh thực tế từ trên cao cho thấy khu phức hợp thể thao hiện đại của UMT
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Facilities Image */}
            <div className="order-2 lg:order-1">
              <UMTSportsFacilities />
            </div>
            
            {/* Facilities Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-primary text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚽</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Sân Bóng Đá Hiện Đại</h3>
                    <p className="text-text-secondary">
                      Sân cỏ nhân tạo chất lượng cao với hệ thống chiếu sáng chuyên nghiệp, phục vụ 24/7
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Sân Bóng Rổ Tiêu Chuẩn</h3>
                    <p className="text-text-secondary">
                      Nhiều sân bóng rổ với mặt sân chuyên nghiệp, phù hợp cho thi đấu và luyện tập
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌳</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Khuôn Viên Xanh Mát</h3>
                    <p className="text-text-secondary">
                      Không gian xanh rộng lớn với cây cối, tạo môi trường trong lành và thư giãn
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-medium text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Tòa Nhà UMT</h3>
                    <p className="text-text-secondary">
                      Tòa nhà hiện đại với đầy đủ tiện nghi, phục vụ các hoạt động thể thao và học tập
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Showcase */}
      <div className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🏷️ Logo Nổi Bật</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Logo UMT Sports Hub được thiết kế nổi bật với Ocean Deep Theme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Logo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-bold text-text-primary mb-4">Main Logo</h3>
              <div className="flex justify-center mb-4">
                <Logo className="w-32 h-20" size="default" />
              </div>
              <p className="text-sm text-text-secondary">Logo chính với gradient Ocean Deep</p>
            </div>

            {/* Large Logo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-bold text-text-primary mb-4">Large Logo</h3>
              <div className="flex justify-center mb-4">
                <Logo className="w-40 h-28" size="xl" />
              </div>
              <p className="text-sm text-text-secondary">Logo lớn cho header và banner</p>
            </div>

            {/* Simple Logo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-bold text-text-primary mb-4">Simple Logo</h3>
              <div className="flex justify-center mb-4">
                <SimpleLogo className="w-16 h-16" size="default" />
              </div>
              <p className="text-sm text-text-secondary">Logo đơn giản cho top header</p>
            </div>

            {/* Small Logo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-bold text-text-primary mb-4">Small Logo</h3>
              <div className="flex justify-center mb-4">
                <Logo className="w-24 h-16" size="small" />
              </div>
              <p className="text-sm text-text-secondary">Logo nhỏ cho mobile và compact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Showcase */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🧭 Navigation Trực Quan</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Thanh điều hướng được thiết kế lại với layout trực quan và hiện đại
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="/"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🏠</span>
                <span className="text-xs font-medium">Trang chủ</span>
              </Link>
              <Link
                to="/booking"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⚽</span>
                <span className="text-xs font-medium">Đặt sân</span>
              </Link>
              <Link
                to="/shop"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🛒</span>
                <span className="text-xs font-medium">Cửa hàng</span>
              </Link>
              <Link
                to="/facilities"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🏟️</span>
                <span className="text-xs font-medium">Cơ sở</span>
              </Link>
              <Link
                to="/events"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🎉</span>
                <span className="text-xs font-medium">Sự kiện</span>
              </Link>
              <Link
                to="/news"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📰</span>
                <span className="text-xs font-medium">Tin tức</span>
              </Link>
              <Link
                to="/contact"
                className="nav-link flex flex-col items-center p-4 rounded-xl hover:bg-ocean-pale transition-all duration-300 group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="text-xs font-medium">Liên hệ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="py-20 bg-gradient-to-r from-bg-secondary to-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">✨ Tính Năng Nổi Bật</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Giao diện trực quan, hiện đại với Ocean Deep Theme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <span className="text-3xl">🏟️</span>
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">Cơ Sở Vật Chất</h3>
              <p className="text-text-secondary text-lg">Sân bóng đá, bóng rổ hiện đại với hệ thống chiếu sáng chuyên nghiệp</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">Thiết Kế Hiện Đại</h3>
              <p className="text-text-secondary text-lg">Ocean Deep Theme với màu xanh nước biển đậm làm chủ đạo</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">Responsive Design</h3>
              <p className="text-text-secondary text-lg">Giao diện tối ưu cho mọi thiết bị từ desktop đến mobile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Demo */}
      <div className="bg-gradient-to-r from-ocean-deep to-ocean-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Logo className="w-16 h-12" size="default" />
              <div>
                <h3 className="text-xl font-bold">UMT SPORT HUB</h3>
                <p className="text-sm text-gray-400">Trải nghiệm thể thao thông minh</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Khu phức hợp thể thao hiện đại với giao diện trực quan, logo nổi bật và layout cân đối
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                📧 support@umt.edu.vn
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                📞 123456
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                🌐 www.umt.edu.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMTShowcase;
