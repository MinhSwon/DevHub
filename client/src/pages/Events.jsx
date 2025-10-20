import React, { useState, useEffect } from 'react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};
      
      events.forEach(event => {
        const eventTime = new Date(`${event.date} ${event.time}`).getTime();
        const distance = eventTime - now;
        
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          newTimeLeft[event.id] = { days, hours, minutes, seconds };
        } else {
          newTimeLeft[event.id] = null;
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🎉' },
    { id: 'tournament', name: 'Giải đấu', icon: '🏆' },
    { id: 'workshop', name: 'Workshop', icon: '🎓' },
    { id: 'social', name: 'Sự kiện xã hội', icon: '👥' },
    { id: 'training', name: 'Khóa học', icon: '💪' }
  ];

  const dateFilters = [
    { id: 'all', name: 'Tất cả thời gian' },
    { id: 'today', name: 'Hôm nay' },
    { id: 'week', name: 'Tuần này' },
    { id: 'month', name: 'Tháng này' }
  ];

  const events = [
    {
      id: 1,
      title: 'Giải bóng đá sinh viên UMT 2024',
      category: 'tournament',
      date: '2024-02-15',
      time: '08:00',
      endTime: '18:00',
      location: 'Sân vận động chính',
      description: 'Giải đấu bóng đá lớn nhất trong năm với sự tham gia của 32 đội bóng từ các khoa trong trường.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=600&h=400&fit=crop',
      participants: 320,
      maxParticipants: 640,
      price: 0,
      status: 'upcoming',
      organizer: 'CLB Thể thao UMT',
      tags: ['Bóng đá', 'Sinh viên', 'Giải đấu'],
      featured: true,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Workshop kỹ thuật Tennis cơ bản',
      category: 'workshop',
      date: '2024-02-20',
      time: '14:00',
      endTime: '17:00',
      location: 'Sân Tennis T1',
      description: 'Học các kỹ thuật cơ bản của Tennis với huấn luyện viên chuyên nghiệp.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      participants: 15,
      maxParticipants: 20,
      price: 50000,
      status: 'upcoming',
      organizer: 'CLB Tennis UMT',
      tags: ['Tennis', 'Kỹ thuật', 'Học tập'],
      featured: false,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Khóa học bơi lội cho người mới bắt đầu',
      category: 'training',
      date: '2024-02-01',
      time: '16:00',
      endTime: '18:00',
      location: 'Bể bơi Olympic',
      description: 'Khóa học bơi lội 8 buổi dành cho người mới bắt đầu với huấn luyện viên chuyên nghiệp.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      participants: 12,
      maxParticipants: 15,
      price: 800000,
      status: 'upcoming',
      organizer: 'Trung tâm Bơi lội UMT',
      tags: ['Bơi lội', 'Khóa học', 'Người mới']
    },
    {
      id: 4,
      title: 'Giải cầu lông mở rộng UMT 2024',
      category: 'tournament',
      date: '2024-02-05',
      time: '09:00',
      endTime: '17:00',
      location: 'Sân cầu lông C1-C4',
      description: 'Giải cầu lông mở rộng dành cho tất cả sinh viên và cán bộ với giải thưởng hấp dẫn.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      participants: 80,
      maxParticipants: 128,
      price: 100000,
      status: 'upcoming',
      organizer: 'CLB Cầu lông UMT',
      tags: ['Cầu lông', 'Giải đấu', 'Mở rộng']
    },
    {
      id: 5,
      title: 'Sự kiện kết nối cộng đồng thể thao',
      category: 'social',
      date: '2024-02-10',
      time: '18:00',
      endTime: '21:00',
      location: 'Hội trường A',
      description: 'Sự kiện giao lưu và kết nối giữa các thành viên cộng đồng thể thao UMT.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      participants: 50,
      maxParticipants: 100,
      price: 0,
      status: 'upcoming',
      organizer: 'Cộng đồng UMT',
      tags: ['Giao lưu', 'Cộng đồng', 'Kết nối']
    },
    {
      id: 6,
      title: 'Workshop Yoga và Thiền',
      category: 'workshop',
      date: '2024-02-15',
      time: '07:00',
      endTime: '09:00',
      location: 'Sân Yoga',
      description: 'Buổi tập Yoga và Thiền buổi sáng để bắt đầu ngày mới với năng lượng tích cực.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      participants: 25,
      maxParticipants: 30,
      price: 0,
      status: 'upcoming',
      organizer: 'CLB Yoga UMT',
      tags: ['Yoga', 'Thiền', 'Sức khỏe']
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'Sắp diễn ra';
      case 'ongoing': return 'Đang diễn ra';
      case 'completed': return 'Đã kết thúc';
      case 'cancelled': return 'Đã hủy';
      default: return 'Không xác định';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Sự Kiện Thể Thao
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Tham gia các sự kiện thể thao, giải đấu và hoạt động cộng đồng tại UMT Sports Hub
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-slide-in-left">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sự kiện..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'border-umt-red bg-red-50 text-umt-red'
                      : 'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            🔥 Sự Kiện Nổi Bật
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.filter(event => event.featured).map((event, index) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-umt-red to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ SỰ KIỆN NỔI BẬT
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.price === 0 ? 'Miễn phí' : `${event.price.toLocaleString('vi-VN')} VNĐ`}
                    </span>
                  </div>
                  
                  {/* Countdown Timer */}
                  {timeLeft[event.id] && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg">
                        <div className="text-center mb-2">
                          <span className="text-sm font-medium">Còn lại:</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="bg-umt-red rounded-lg p-2">
                            <div className="text-lg font-bold">{timeLeft[event.id].days}</div>
                            <div className="text-xs">Ngày</div>
                          </div>
                          <div className="bg-umt-blue rounded-lg p-2">
                            <div className="text-lg font-bold">{timeLeft[event.id].hours}</div>
                            <div className="text-xs">Giờ</div>
                          </div>
                          <div className="bg-green-600 rounded-lg p-2">
                            <div className="text-lg font-bold">{timeLeft[event.id].minutes}</div>
                            <div className="text-xs">Phút</div>
                          </div>
                          <div className="bg-yellow-600 rounded-lg p-2">
                            <div className="text-lg font-bold">{timeLeft[event.id].seconds}</div>
                            <div className="text-xs">Giây</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
                    </svg>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{event.time} - {event.endTime}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <span>{event.participants}/{event.maxParticipants} người</span>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-umt-red to-red-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-umt-red to-red-600 text-white py-3 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                      Đăng ký ngay
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            📅 Tất Cả Sự Kiện
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.filter(event => !event.featured).map((event, index) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                    {getStatusText(event.status)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.price === 0 ? 'Miễn phí' : `${event.price.toLocaleString('vi-VN')} VNĐ`}
                  </span>
                </div>
                
                {/* Mini Countdown Timer */}
                {timeLeft[event.id] && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black bg-opacity-60 text-white p-2 rounded-lg">
                      <div className="flex justify-center space-x-2 text-xs">
                        <span className="bg-umt-red px-2 py-1 rounded">{timeLeft[event.id].days}d</span>
                        <span className="bg-umt-blue px-2 py-1 rounded">{timeLeft[event.id].hours}h</span>
                        <span className="bg-green-600 px-2 py-1 rounded">{timeLeft[event.id].minutes}m</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                    {event.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
                  </svg>
                  <span>{formatDate(event.date)}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>{event.time} - {event.endTime}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{event.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span>{event.participants}/{event.maxParticipants} người</span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-umt-red h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-umt-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                    Đăng ký tham gia
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-umt-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
            Xem thêm sự kiện
          </button>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận thông báo sự kiện</h3>
          <p className="text-lg mb-6 opacity-90">
            Nhận thông báo về các sự kiện thể thao mới nhất và cơ hội tham gia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-umt-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
