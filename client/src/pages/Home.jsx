import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-deep via-ocean-dark to-ocean-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🏟️ UMT SPORT HUB
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Trải nghiệm thể thao thông minh cùng UMT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-ocean-primary hover:bg-ocean-pale font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                ⚽ Đặt Sân Ngay
              </Link>
              <Link
                to="/facilities"
                className="border-2 border-white text-white hover:bg-white hover:text-ocean-primary font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                🏟️ Khám Phá Cơ Sở
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UMT Sport Hub</h2>
            <p className="text-xl text-gray-600">Nền tảng thể thao toàn diện cho sinh viên UMT</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-umt-blue to-blue-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-sm">Trang chính</div>
            </div>
            <div className="bg-gradient-to-br from-umt-red to-red-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">Tính năng</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">Hoàn thành</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gradient-to-r from-bg-secondary to-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
            <p className="text-xl text-gray-600">Khám phá các tính năng mạnh mẽ của UMT Sport Hub</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/dashboard" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm">Thống kê cá nhân và hoạt động</p>
            </Link>
            
            <Link to="/community" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Bảng xếp hạng và thử thách</p>
            </Link>
            
            <Link to="/events" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Events</h3>
              <p className="text-gray-600 text-sm">Sự kiện và lịch thi đấu</p>
            </Link>
            
            <Link to="/training" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600 text-sm">Theo dõi luyện tập</p>
            </Link>
            
            <Link to="/teams" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teams</h3>
              <p className="text-gray-600 text-sm">Quản lý đội nhóm</p>
            </Link>
            
            <Link to="/profile" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile</h3>
              <p className="text-gray-600 text-sm">Hồ sơ cá nhân</p>
            </Link>
            
            <Link to="/media" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Media</h3>
              <p className="text-gray-600 text-sm">Video và blog</p>
            </Link>
            
            <Link to="/achievements" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h3>
              <p className="text-gray-600 text-sm">Huy hiệu và thành tích</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-umt-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Bắt đầu ngay hôm nay!</h2>
          <p className="text-xl mb-8 opacity-90">Tham gia cộng đồng thể thao UMT và trải nghiệm những tính năng tuyệt vời</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-umt-blue hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white hover:bg-white hover:text-umt-blue font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
