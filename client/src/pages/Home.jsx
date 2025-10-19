import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdvancedSearch from '../components/AdvancedSearch';
import SportsEquipment from '../components/SportsEquipment';
import AthleteSilhouettes from '../components/AthleteSilhouettes';
import SocialIcons from '../components/SocialIcons';
import UMTSportsFacilities from '../components/UMTSportsFacilities';

const Home = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  
  const sports = [
    { name: "Bóng đá", icon: "⚽", color: "from-green-400 to-green-600" },
    { name: "Cầu lông", icon: "🏸", color: "from-blue-400 to-blue-600" },
    { name: "Tennis", icon: "🎾", color: "from-yellow-400 to-yellow-600" },
    { name: "Bóng rổ", icon: "🏀", color: "from-orange-400 to-orange-600" },
    { name: "Gym", icon: "💪", color: "from-red-400 to-red-600" },
    { name: "Bơi lội", icon: "🏊", color: "from-cyan-400 to-cyan-600" },
    { name: "Bóng chuyền", icon: "🏐", color: "from-purple-400 to-purple-600" },
    { name: "Bóng bàn", icon: "🏓", color: "from-pink-400 to-pink-600" }
  ];

  const steps = [
    {
      step: "1",
      title: "Chọn sân",
      description: "Tìm kiếm và chọn sân thể thao phù hợp",
      icon: "🔍"
    },
    {
      step: "2", 
      title: "Đặt lịch",
      description: "Chọn thời gian và xác nhận đặt sân",
      icon: "📅"
    },
    {
      step: "3",
      title: "Thanh toán",
      description: "Thanh toán an toàn và nhận xác nhận",
      icon: "💳"
    }
  ];

  return (
    <div className="relative overflow-hidden">
             {/* Hero Section - Ocean Deep Banner */}
             <div className="relative bg-gradient-to-br from-ocean-deep via-ocean-dark to-ocean-primary text-white" 
                  style={{ height: 'calc(100vh - 104px)' }}>
               
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
                         <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-4 animate-fade-in">
                           UMT SPORTS HUB
        </h1>
                         <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay-200">
                           Trải nghiệm thể thao thông minh cùng UMT
                         </p>
                         <p className="text-lg mb-8 opacity-80 animate-fade-in-delay-400">
                           Khám phá các sân thể thao hiện đại với dịch vụ chuyên nghiệp và công nghệ tiên tiến
            </p>
          </div>
          
                       <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-600">
                         <Link
                           to="/booking"
                           className="bg-white text-ocean-primary hover:bg-ocean-pale font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                         >
                           ⚽ Đặt Sân Ngay
                         </Link>
                         <button
                           onClick={() => setShowAdvancedSearch(true)}
                           className="border-2 border-white text-white hover:bg-white hover:text-ocean-primary font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                         >
                           🔍 Tìm Kiếm Nâng Cao
                         </button>
                         <Link
                           to="/shop"
                           className="bg-coral hover:bg-coral-light text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                         >
                           🛒 Cửa Hàng Thể Thao
                         </Link>
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

      {/* Quick Search Section */}
      <div className="py-16 bg-gradient-to-r from-ocean-pale to-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ocean-primary mb-4">Tìm kiếm nhanh</h2>
            <p className="text-xl text-text-secondary">Tìm sân thể thao phù hợp với bạn</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Môn thể thao</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-primary focus:border-ocean-primary">
                  <option>Tất cả</option>
                  <option>Bóng đá</option>
                  <option>Cầu lông</option>
                  <option>Tennis</option>
                  <option>Bóng rổ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngày</label>
                <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-primary focus:border-ocean-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Giờ</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-primary focus:border-ocean-primary">
                  <option>Tất cả</option>
                  <option>06:00 - 08:00</option>
                  <option>08:00 - 10:00</option>
                  <option>10:00 - 12:00</option>
                  <option>14:00 - 16:00</option>
                  <option>16:00 - 18:00</option>
                  <option>18:00 - 20:00</option>
                  <option>20:00 - 22:00</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-ocean-primary to-ocean-medium text-white font-bold py-3 px-6 rounded-lg hover:from-ocean-medium hover:to-ocean-light transition-all duration-300 transform hover:scale-105">
                  🔍 Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sports Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Danh mục môn thể thao</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Khám phá đa dạng các môn thể thao tại UMT Sport Hub
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {sports.map((sport, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${sport.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <span className="text-3xl">{sport.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-ocean-primary transition-colors duration-300">
                  {sport.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UMT Sports Facilities Showcase */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">🏟️ Cơ Sở Vật Chất UMT</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Khám phá khu phức hợp thể thao hiện đại với sân bóng đá, bóng rổ và không gian xanh mát
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
              
              <div className="pt-6">
                <Link
                  to="/facilities"
                  className="inline-flex items-center bg-gradient-to-r from-ocean-primary to-ocean-medium text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">🏟️</span>
                  Khám Phá Cơ Sở Vật Chất
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-bg-secondary to-ocean-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Tại sao chọn UMT Sports Hub?</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Chúng tôi mang đến trải nghiệm thể thao tuyệt vời với công nghệ hiện đại và dịch vụ chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Đặt sân nhanh chóng</h3>
              <p className="text-gray-600 text-lg">Hệ thống đặt sân thông minh với AI, chỉ với vài cú click</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chất lượng đảm bảo</h3>
              <p className="text-gray-600 text-lg">Sân thể thao đạt tiêu chuẩn quốc tế với thiết bị hiện đại</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-coral group-hover:to-coral-light transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cộng đồng sôi động</h3>
              <p className="text-gray-600 text-lg">Kết nối với những người yêu thể thao và tạo dựng mối quan hệ</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Book Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hướng dẫn đặt sân</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chỉ với 3 bước đơn giản, bạn có thể đặt sân và tận hưởng trải nghiệm thể thao tuyệt vời
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-ocean-primary to-ocean-medium text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-gray-100 text-umt-blue font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ocean-primary to-ocean-medium transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-umt-blue via-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">UMT Sport Hub trong số liệu</h2>
            <p className="text-xl opacity-90">Những con số ấn tượng về dịch vụ của chúng tôi</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2 text-yellow-300">500+</div>
              <div className="text-lg">Sân thể thao</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2 text-yellow-300">10K+</div>
              <div className="text-lg">Người dùng</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2 text-yellow-300">50K+</div>
              <div className="text-lg">Lượt đặt sân</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2 text-yellow-300">99%</div>
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
