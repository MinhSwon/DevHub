import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdvancedSearch from '../components/AdvancedSearch';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  
  const slides = [
    {
      title: "UMT Sports Hub",
      subtitle: "Trung tâm thể thao hàng đầu",
      description: "Khám phá các sân thể thao hiện đại với dịch vụ chuyên nghiệp",
      bgImage: "bg-gradient-to-br from-umt-blue to-blue-800"
    },
    {
      title: "Đặt Sân Dễ Dàng",
      subtitle: "Hệ thống đặt sân thông minh",
      description: "Đặt sân nhanh chóng, thanh toán an toàn, hỗ trợ 24/7",
      bgImage: "bg-gradient-to-br from-umt-red to-red-800"
    },
    {
      title: "Cộng Đồng Thể Thao",
      subtitle: "Kết nối và thi đấu",
      description: "Tham gia cộng đồng thể thao sôi động, tìm đối thủ phù hợp",
      bgImage: "bg-gradient-to-br from-umt-green to-green-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className={`relative ${slides[currentSlide].bgImage} text-white transition-all duration-1000`} 
           style={{ height: 'calc(100vh - 128px)' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full animate-ping"></div>
        </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="transform transition-all duration-1000 ease-out">
            <h1 className="text-display-2xl md:text-display-xl font-bold uppercase tracking-wider mb-4 animate-fade-in">
              {slides[currentSlide].title}
        </h1>
            <h2 className="text-display-sm md:text-display-md font-semibold mb-4 animate-fade-in-delay-200">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delay-400">
              {slides[currentSlide].description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-600">
            <Link
              to="/booking"
              className="btn-primary text-lg py-4 px-8 micro-scale"
            >
              Đặt Sân Ngay
            </Link>
            <button
              onClick={() => setShowAdvancedSearch(true)}
              className="btn-ghost text-lg py-4 px-8 border-2 border-white text-white hover:bg-white hover:text-umt-blue micro-scale"
            >
              Tìm Kiếm Nâng Cao
            </button>
            <Link
              to="/news"
              className="btn-ghost text-lg py-4 px-8 border-2 border-white text-white hover:bg-white hover:text-umt-blue micro-scale"
            >
              Khám Phá Thêm
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại sao chọn UMT Sports Hub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi mang đến trải nghiệm thể thao tuyệt vời với công nghệ hiện đại và dịch vụ chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-umt-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-umt-red transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Đặt sân nhanh chóng</h3>
              <p className="text-gray-600">Hệ thống đặt sân thông minh, chỉ với vài cú click</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-umt-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-umt-red transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chất lượng đảm bảo</h3>
              <p className="text-gray-600">Sân thể thao đạt tiêu chuẩn quốc tế</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-umt-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-umt-red transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cộng đồng sôi động</h3>
              <p className="text-gray-600">Kết nối với những người yêu thể thao</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-umt-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-counter">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Sân thể thao</div>
            </div>
            <div className="animate-counter">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg">Người dùng</div>
            </div>
            <div className="animate-counter">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg">Lượt đặt sân</div>
            </div>
            <div className="animate-counter">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Search Modal */}
      {showAdvancedSearch && (
        <AdvancedSearch
          onSearch={(filters) => {
            console.log('Search filters:', filters);
            // Handle search logic here
          }}
          onClose={() => setShowAdvancedSearch(false)}
        />
      )}
    </div>
  );
};

export default Home;
