import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SimpleLogo from '../components/SimpleLogo';
import SportsEquipment from '../components/SportsEquipment';
import AthleteSilhouettes from '../components/AthleteSilhouettes';
import SocialIcons from '../components/SocialIcons';

const OceanThemeDemo = () => {
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
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-4 animate-fade-in">
              🌊 OCEAN DEEP THEME
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay-200">
              Giao diện mới với màu xanh nước biển đậm
            </p>
            <p className="text-lg mb-8 opacity-80 animate-fade-in-delay-400">
              Trải nghiệm thiết kế hiện đại, chuyên nghiệp và thân thiện với người dùng
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
                <div className="flex justify-center mb-6">
                  <Logo className="w-32 h-20" size="default" />
                </div>
                <h2 className="text-3xl font-bold mb-4">UMT SPORTS HUB</h2>
                <p className="text-lg opacity-90 mb-6">
                  Thiết kế mới với Ocean Deep Theme
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
                  to="/shop"
                  className="bg-coral hover:bg-coral-light text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🛒 Cửa Hàng
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

      {/* Color Palette Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🎨 Bảng Màu Ocean Deep</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Hệ thống màu sắc mới với xanh nước biển đậm làm chủ đạo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Ocean Colors */}
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-deep rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Deep</h3>
              <p className="text-sm text-text-secondary">#0B1426</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-dark rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Dark</h3>
              <p className="text-sm text-text-secondary">#1A2332</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-primary rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Primary</h3>
              <p className="text-sm text-text-secondary">#1E3A8A</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-medium rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Medium</h3>
              <p className="text-sm text-text-secondary">#3B82F6</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-light rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Light</h3>
              <p className="text-sm text-text-secondary">#60A5FA</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ocean-pale rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Ocean Pale</h3>
              <p className="text-sm text-text-secondary">#DBEAFE</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Accent Colors */}
            <div className="text-center">
              <div className="w-20 h-20 bg-coral rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Coral</h3>
              <p className="text-sm text-text-secondary">#FF6B6B</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-coral-light rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Coral Light</h3>
              <p className="text-sm text-text-secondary">#FFB3B3</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Gold</h3>
              <p className="text-sm text-text-secondary">#F59E0B</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-light rounded-xl mx-auto mb-3 shadow-lg"></div>
              <h3 className="font-semibold text-text-primary">Gold Light</h3>
              <p className="text-sm text-text-secondary">#FCD34D</p>
            </div>
          </div>
        </div>
      </div>

      {/* Components Showcase */}
      <div className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🧩 Components Showcase</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Các components đã được cập nhật với theme mới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Logo Components</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <Logo className="w-24 h-16 mx-auto mb-3" size="default" />
                  <p className="text-sm text-text-secondary">Main Logo</p>
                </div>
                <div className="text-center">
                  <SimpleLogo className="w-16 h-16 mx-auto mb-3" size="default" />
                  <p className="text-sm text-text-secondary">Simple Logo</p>
                </div>
              </div>
            </div>

            {/* Sports Equipment Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Sports Equipment</h3>
              <div className="flex justify-center">
                <SportsEquipment />
              </div>
            </div>

            {/* Athletes Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Athlete Silhouettes</h3>
              <div className="flex justify-center">
                <AthleteSilhouettes />
              </div>
            </div>

            {/* Social Icons Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Social Icons</h3>
              <div className="flex justify-center">
                <SocialIcons />
              </div>
            </div>

            {/* Button Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Button Styles</h3>
              <div className="space-y-4">
                <button className="w-full bg-ocean-primary text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Primary Button
                </button>
                <button className="w-full bg-coral text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Coral Button
                </button>
                <button className="w-full border-2 border-ocean-primary text-ocean-primary hover:bg-ocean-primary hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Card Showcase */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-primary mb-6">Card Styles</h3>
              <div className="space-y-4">
                <div className="bg-ocean-pale p-4 rounded-lg">
                  <h4 className="font-semibold text-ocean-primary mb-2">Ocean Pale Card</h4>
                  <p className="text-text-secondary text-sm">Background với màu xanh nhạt</p>
                </div>
                <div className="bg-gradient-to-r from-ocean-primary to-ocean-medium text-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gradient Card</h4>
                  <p className="text-sm opacity-90">Gradient từ xanh chính đến xanh trung bình</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Demo */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🧭 Navigation Demo</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Thanh điều hướng với theme mới
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="bg-ocean-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-ocean-medium transition-colors duration-200"
              >
                🏠 Trang Chủ
              </Link>
              <Link
                to="/booking"
                className="text-text-secondary hover:text-ocean-primary font-medium px-6 py-3 rounded-lg hover:bg-ocean-pale transition-colors duration-200"
              >
                ⚽ Đặt Sân
              </Link>
              <Link
                to="/shop"
                className="text-text-secondary hover:text-ocean-primary font-medium px-6 py-3 rounded-lg hover:bg-ocean-pale transition-colors duration-200"
              >
                🛒 Cửa Hàng
              </Link>
              <Link
                to="/dashboard"
                className="text-text-secondary hover:text-ocean-primary font-medium px-6 py-3 rounded-lg hover:bg-ocean-pale transition-colors duration-200"
              >
                📊 Dashboard
              </Link>
              <Link
                to="/about"
                className="text-text-secondary hover:text-ocean-primary font-medium px-6 py-3 rounded-lg hover:bg-ocean-pale transition-colors duration-200"
              >
                ℹ️ Giới Thiệu
              </Link>
              <Link
                to="/contact"
                className="text-text-secondary hover:text-ocean-primary font-medium px-6 py-3 rounded-lg hover:bg-ocean-pale transition-colors duration-200"
              >
                📞 Liên Hệ
              </Link>
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
              Giao diện mới với Ocean Deep Theme - Thiết kế hiện đại, chuyên nghiệp
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

export default OceanThemeDemo;
