import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StatsGrid, SimpleChart, ActivityFeed, ProgressRing } from '../components/DataVisualization';
import Loading from '../components/Loading';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [userStats, setUserStats] = useState({
    totalBookings: 12,
    upcomingBookings: 3,
    totalSpent: 2400000,
    favoriteSport: 'Bóng đá'
  });

  // Mock data for charts
  const bookingData = [
    { label: 'T2', value: 4 },
    { label: 'T3', value: 2 },
    { label: 'T4', value: 6 },
    { label: 'T5', value: 3 },
    { label: 'T6', value: 8 },
    { label: 'T7', value: 12 },
    { label: 'CN', value: 7 }
  ];

  const sportData = [
    { label: 'Bóng đá', value: 45, color: '#3b82f6' },
    { label: 'Tennis', value: 25, color: '#10b981' },
    { label: 'Bóng rổ', value: 20, color: '#f59e0b' },
    { label: 'Bơi lội', value: 10, color: '#ef4444' }
  ];

  const statsData = [
    {
      title: 'Tổng đặt sân',
      value: userStats.totalBookings,
      change: 12.5,
      changeType: 'positive',
      icon: (
        <svg className="w-5 h-5 text-umt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
        </svg>
      ),
      format: 'number'
    },
    {
      title: 'Sắp tới',
      value: userStats.upcomingBookings,
      change: -5.2,
      changeType: 'negative',
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      format: 'number'
    },
    {
      title: 'Đã chi tiêu',
      value: userStats.totalSpent,
      change: 8.1,
      changeType: 'positive',
      icon: (
        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
        </svg>
      ),
      format: 'currency'
    },
    {
      title: 'Môn yêu thích',
      value: userStats.favoriteSport,
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    }
  ];

  const activities = [
    {
      type: 'booking',
      title: 'Đặt sân bóng đá A1',
      description: 'Đặt sân thành công cho ngày 20/01/2024',
      time: '2 phút trước',
      status: 'success'
    },
    {
      type: 'payment',
      title: 'Thanh toán thành công',
      description: 'Thanh toán 200,000 VNĐ cho đặt sân',
      time: '1 giờ trước',
      status: 'success'
    },
    {
      type: 'event',
      title: 'Tham gia sự kiện',
      description: 'Đăng ký tham gia giải bóng đá sinh viên',
      time: '3 giờ trước',
      status: 'warning'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [recentBookings, setRecentBookings] = useState([
    {
      id: 1,
      sport: 'Bóng đá',
      court: 'Sân A1',
      date: '2024-01-20',
      time: '18:00-20:00',
      status: 'confirmed',
      price: 200000
    },
    {
      id: 2,
      sport: 'Tennis',
      court: 'Sân T2',
      date: '2024-01-18',
      time: '16:00-18:00',
      status: 'completed',
      price: 300000
    },
    {
      id: 3,
      sport: 'Bóng rổ',
      court: 'Sân B3',
      date: '2024-01-22',
      time: '19:00-21:00',
      status: 'pending',
      price: 150000
    }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: 'Giải bóng đá sinh viên UMT 2024',
      date: '2024-01-25',
      time: '08:00',
      location: 'Sân vận động chính',
      participants: 32,
      maxParticipants: 64
    },
    {
      id: 2,
      title: 'Workshop kỹ thuật Tennis',
      date: '2024-01-28',
      time: '14:00',
      location: 'Sân Tennis T1',
      participants: 15,
      maxParticipants: 20
    }
  ]);

  const tabs = [
    { id: 'overview', name: 'Tổng quan', icon: '📊' },
    { id: 'bookings', name: 'Đặt sân', icon: '🏟️' },
    { id: 'events', name: 'Sự kiện', icon: '🎉' },
    { id: 'profile', name: 'Hồ sơ', icon: '👤' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'completed': return 'Hoàn thành';
      case 'cancelled': return 'Đã hủy';
      default: return 'Không xác định';
    }
  };

  if (isLoading) {
    return <Loading type="skeleton" text="Đang tải dashboard..." overlay={true} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-display-lg text-gray-900 mb-2 animate-fade-in">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-delay-200">
            Quản lý đặt sân và theo dõi hoạt động thể thao của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 animate-slide-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-umt-red rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">Thành viên VIP</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-umt-red text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl mr-3">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {/* Stats Cards */}
                <StatsGrid data={statsData} columns={4} />

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card-elevated">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Đặt sân theo tuần</h3>
                    </div>
                    <div className="p-6">
                      <SimpleChart 
                        data={bookingData} 
                        type="bar" 
                        color="#3b82f6"
                        height={200}
                      />
                    </div>
                  </div>

                  <div className="card-elevated">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Phân bố môn thể thao</h3>
                    </div>
                    <div className="p-6 flex items-center justify-center">
                      <ProgressRing 
                        value={75} 
                        max={100} 
                        size={160}
                        color="#10b981"
                        showPercentage={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <ActivityFeed activities={activities} maxItems={5} />

                {/* Recent Bookings */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Đặt sân gần đây</h2>
                    <Link to="/booking" className="text-umt-red hover:text-red-700 font-medium">
                      Đặt sân mới
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-umt-blue rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">
                              {booking.sport === 'Bóng đá' ? '⚽' : booking.sport === 'Tennis' ? '🎾' : '🏀'}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{booking.sport} - {booking.court}</h3>
                            <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                            {getStatusText(booking.status)}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">{booking.price.toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Sự kiện sắp tới</h2>
                    <Link to="/events" className="text-umt-red hover:text-red-700 font-medium">
                      Xem tất cả
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-umt-blue to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🎉</span>
                          </div>
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm opacity-90">{event.date} • {event.time} • {event.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                            {event.participants}/{event.maxParticipants} người
                          </div>
                          <button className="mt-2 bg-white text-umt-blue px-4 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                            Tham gia
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Lịch sử đặt sân</h2>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-umt-red text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                        Tất cả
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Sắp tới
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Hoàn thành
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-umt-blue rounded-lg flex items-center justify-center">
                              <span className="text-2xl text-white">
                                {booking.sport === 'Bóng đá' ? '⚽' : booking.sport === 'Tennis' ? '🎾' : '🏀'}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{booking.sport} - {booking.court}</h3>
                              <p className="text-gray-600">{booking.date} • {booking.time}</p>
                              <p className="text-sm text-gray-500">Mã đặt sân: #{booking.id.toString().padStart(6, '0')}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                              {getStatusText(booking.status)}
                            </span>
                            <p className="text-lg font-semibold text-gray-900 mt-2">
                              {booking.price.toLocaleString('vi-VN')} VNĐ
                            </p>
                            <div className="flex space-x-2 mt-3">
                              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                Chi tiết
                              </button>
                              {booking.status === 'pending' && (
                                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-300">
                                  Hủy
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Sự kiện đã tham gia</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-umt-red to-red-600 rounded-lg flex items-center justify-center">
                              <span className="text-2xl text-white">🎉</span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                              <p className="text-gray-600">{event.date} • {event.time}</p>
                              <p className="text-sm text-gray-500">{event.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                              Đã tham gia
                            </div>
                            <p className="text-sm text-gray-600">
                              {event.participants}/{event.maxParticipants} người tham gia
                            </p>
                            <button className="mt-3 px-4 py-2 bg-umt-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                              Xem chi tiết
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Thông tin cá nhân</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        defaultValue="0123456789"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ngày sinh</label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-umt-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                      Cập nhật thông tin
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Đổi mật khẩu</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu hiện tại</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu mới</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu mới</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <button className="bg-umt-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                      Đổi mật khẩu
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
