import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('history');

  const sections = [
    { id: 'history', name: 'Lịch sử', icon: '📚' },
    { id: 'mission', name: 'Sứ mệnh', icon: '🎯' },
    { id: 'team', name: 'Đội ngũ', icon: '👥' },
    { id: 'facilities', name: 'Cơ sở vật chất', icon: '🏟️' }
  ];

  const teamMembers = [
    {
      name: 'Nguyễn Văn A',
      position: 'Giám đốc',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Hơn 10 năm kinh nghiệm trong lĩnh vực thể thao và quản lý'
    },
    {
      name: 'Trần Thị B',
      position: 'Phó Giám đốc',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Chuyên gia về phát triển cộng đồng thể thao'
    },
    {
      name: 'Lê Văn C',
      position: 'Trưởng phòng Kỹ thuật',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Chuyên gia công nghệ và hệ thống quản lý'
    },
    {
      name: 'Phạm Thị D',
      position: 'Trưởng phòng Dịch vụ',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Chuyên gia về dịch vụ khách hàng và trải nghiệm người dùng'
    }
  ];

  const facilities = [
    {
      name: 'Sân bóng đá',
      count: 8,
      description: 'Sân cỏ nhân tạo hiện đại với hệ thống chiếu sáng LED',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=600&h=400&fit=crop',
      features: ['Cỏ nhân tạo chất lượng cao', 'Hệ thống chiếu sáng LED', 'Lưới bảo vệ an toàn']
    },
    {
      name: 'Sân Tennis',
      count: 4,
      description: 'Sân tennis đạt tiêu chuẩn quốc tế với mặt sân chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      features: ['Mặt sân cứng chuyên nghiệp', 'Hệ thống thoát nước tốt', 'Khu vực nghỉ ngơi']
    },
    {
      name: 'Sân bóng rổ',
      count: 6,
      description: 'Sân bóng rổ trong nhà và ngoài trời với thiết bị hiện đại',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
      features: ['Sàn gỗ chuyên nghiệp', 'Hệ thống điều hòa', 'Thiết bị tập luyện']
    },
    {
      name: 'Bể bơi',
      count: 2,
      description: 'Bể bơi Olympic và bể bơi trẻ em với hệ thống lọc nước hiện đại',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      features: ['Hệ thống lọc nước tự động', 'Khu vực thay đồ riêng biệt', 'Huấn luyện viên chuyên nghiệp']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Về UMT Sports Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Trung tâm thể thao hàng đầu với cơ sở vật chất hiện đại và dịch vụ chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 animate-slide-in-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nội dung</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-umt-red text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl mr-3">{section.icon}</span>
                    <span className="font-medium">{section.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* History Section */}
            {activeSection === 'history' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lịch sử phát triển</h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-umt-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2018</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thành lập</h3>
                        <p className="text-gray-600">
                          UMT Sports Hub được thành lập với mục tiêu mang đến trải nghiệm thể thao 
                          tốt nhất cho sinh viên và cộng đồng.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-umt-red rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2020</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mở rộng cơ sở</h3>
                        <p className="text-gray-600">
                          Xây dựng thêm 4 sân tennis và 2 bể bơi, nâng tổng số sân thể thao lên 20 sân.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-umt-green rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2022</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Công nghệ hóa</h3>
                        <p className="text-gray-600">
                          Triển khai hệ thống đặt sân trực tuyến và ứng dụng di động, 
                          phục vụ hơn 10,000 người dùng.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-umt-yellow rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2024</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Hiện tại</h3>
                        <p className="text-gray-600">
                          Trở thành trung tâm thể thao hàng đầu với 500+ sân thể thao, 
                          phục vụ hơn 50,000 lượt đặt sân mỗi năm.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mission Section */}
            {activeSection === 'mission' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Sứ mệnh & Tầm nhìn</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-umt-blue to-blue-600 text-white p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">Sứ mệnh</h3>
                      <p className="text-lg">
                        Mang đến trải nghiệm thể thao tuyệt vời cho mọi người, 
                        góp phần xây dựng cộng đồng khỏe mạnh và năng động.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-umt-red to-red-600 text-white p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">Tầm nhìn</h3>
                      <p className="text-lg">
                        Trở thành trung tâm thể thao hàng đầu Việt Nam, 
                        tiên phong trong ứng dụng công nghệ và dịch vụ.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Giá trị cốt lõi</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-umt-blue rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl text-white">⚡</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Năng động</h4>
                        <p className="text-sm text-gray-600">Luôn cập nhật và đổi mới</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-umt-red rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl text-white">🤝</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Đồng hành</h4>
                        <p className="text-sm text-gray-600">Cùng phát triển với khách hàng</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-umt-green rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl text-white">🏆</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Xuất sắc</h4>
                        <p className="text-sm text-gray-600">Chất lượng dịch vụ hàng đầu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Team Section */}
            {activeSection === 'team' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Đội ngũ lãnh đạo</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="text-center hover-lift">
                        <div className="relative mb-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-umt-red rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-umt-red font-medium mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Facilities Section */}
            {activeSection === 'facilities' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cơ sở vật chất</h2>
                  <div className="space-y-8">
                    {facilities.map((facility, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover-lift">
                        <div className="md:flex">
                          <div className="md:w-1/2">
                            <img
                              src={facility.image}
                              alt={facility.name}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                          <div className="md:w-1/2 p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl font-semibold text-gray-900">{facility.name}</h3>
                              <span className="bg-umt-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                                {facility.count} sân
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{facility.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-gray-900">Tính năng:</h4>
                              <ul className="space-y-1">
                                {facility.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-umt-red rounded-full mr-3"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">UMT Sports Hub trong số liệu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Sân thể thao</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Lượt đặt sân/năm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Thành viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
