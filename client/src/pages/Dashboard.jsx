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
    favoriteSport: 'Bóng đá',
    totalSteps: 125000,
    weeklyGoal: 100000,
    achievements: 8,
    teamMemberships: 2,
    challengesCompleted: 5,
    currentRank: 15,
    totalRank: 120
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
    { label: 'Bóng đá', value: 45, color: '#0057B7' },
    { label: 'Tennis', value: 25, color: '#DA291C' },
    { label: 'Bóng rổ', value: 20, color: '#FF6B35' },
    { label: 'Bơi lội', value: 10, color: '#28A745' }
  ];

  const statsData = [
    {
      title: 'Tổng đặt sân',
      value: userStats.totalBookings,
      change: 12.5,
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-umt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
        </svg>
      ),
      format: 'number'
    },
    {
      title: 'Bước chân tuần',
      value: userStats.totalSteps,
      change: 25.0,
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      format: 'steps'
    },
    {
      title: 'Thành tích',
      value: userStats.achievements,
      change: 2,
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      format: 'number'
    },
    {
      title: 'Xếp hạng',
      value: `#${userStats.currentRank}`,
      change: -3,
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-umt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      )
    }
  ];

  const activities = [
    {
      type: 'achievement',
      title: 'Nhận huy hiệu "Chạy bộ 5km"',
      description: 'Hoàn thành thử thách chạy bộ tuần này',
      time: '5 phút trước',
      status: 'success',
      icon: '🏆'
    },
    {
      type: 'challenge',
      title: 'Thử thách mới: "Plank 3 phút"',
      description: 'Thử thách mới đã được mở khóa',
      time: '1 giờ trước',
      status: 'info',
      icon: '💪'
    },
    {
      type: 'team',
      title: 'Được mời tham gia đội bóng đá',
      description: 'Đội "UMT Warriors" mời bạn tham gia',
      time: '2 giờ trước',
      status: 'warning',
      icon: '⚽'
    },
    {
      type: 'ranking',
      title: 'Tăng hạng lên #15',
      description: 'Xếp hạng toàn trường tăng 3 bậc',
      time: '3 giờ trước',
      status: 'success',
      icon: '📈'
    },
    {
      type: 'booking',
      title: 'Đặt sân bóng đá A1',
      description: 'Đặt sân thành công cho ngày 20/01/2024',
      time: '4 giờ trước',
      status: 'success',
      icon: '🏟️'
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
    { id: 'training', name: 'Luyện tập', icon: '💪' },
    { id: 'community', name: 'Cộng đồng', icon: '👥' },
    { id: 'achievements', name: 'Thành tích', icon: '🏆' },
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
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale">
        {/* Header */}
             <div className="bg-gradient-to-r from-ocean-deep via-ocean-dark to-ocean-primary text-white py-16 relative overflow-hidden">
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
                 <div className="text-center">
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">👤 Tài Khoản Cá Nhân</h1>
                   <p className="text-xl opacity-90 max-w-3xl mx-auto">
                     Quản lý đặt sân, theo dõi hoạt động thể thao và cập nhật thông tin cá nhân
                   </p>
                 </div>
               </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">🎓 Thành viên UMT</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-umt-red text-white px-2 py-1 rounded-full">
                      Giảm giá 20%
                    </span>
                  </div>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-umt-blue to-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-umt-light-blue hover:text-umt-blue'
                    }`}
                  >
                    <span className="text-xl mr-3">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Thao tác nhanh</h4>
                <div className="space-y-2">
                  <Link
                    to="/booking"
                    className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-umt-light-blue hover:text-umt-blue rounded-lg transition-colors duration-200"
                  >
                    <span className="mr-2">⚽</span>
                    Đặt sân mới
                  </Link>
                  <Link
                    to="/shop"
                    className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-umt-light-blue hover:text-umt-blue rounded-lg transition-colors duration-200"
                  >
                    <span className="mr-2">🛒</span>
                    Mua sắm
                  </Link>
                  <Link
                    to="/events"
                    className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-umt-light-blue hover:text-umt-blue rounded-lg transition-colors duration-200"
                  >
                    <span className="mr-2">🎉</span>
                    Sự kiện
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {statsData.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900 mt-1">
                            {stat.format === 'currency' 
                              ? `${stat.value.toLocaleString('vi-VN')}₫`
                              : stat.format === 'steps'
                              ? `${stat.value.toLocaleString('vi-VN')} bước`
                              : stat.format === 'number'
                              ? stat.value
                              : stat.value
                            }
                          </p>
                          {stat.change && (
                            <p className={`text-sm mt-1 ${
                              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {stat.changeType === 'positive' ? '↗' : '↘'} {Math.abs(stat.change)}%
                            </p>
                          )}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-xl flex items-center justify-center">
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Đặt sân theo tuần</h3>
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {bookingData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div 
                            className="bg-gradient-to-t from-umt-blue to-blue-600 rounded-t-lg w-full transition-all duration-500 hover:from-blue-600 hover:to-blue-700"
                            style={{ height: `${(item.value / 12) * 200}px` }}
                          ></div>
                          <span className="text-xs text-gray-600 mt-2">{item.label}</span>
                          <span className="text-xs font-semibold text-umt-blue">{item.value}</span>
                    </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Phân bố môn thể thao</h3>
                    <div className="space-y-4">
                      {sportData.map((sport, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: sport.color }}
                            ></div>
                            <span className="text-sm font-medium text-gray-700">{sport.label}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full"
                                style={{ 
                                  width: `${sport.value}%`,
                                  backgroundColor: sport.color 
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 w-8">{sport.value}%</span>
                          </div>
                    </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Bookings */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">🏟️ Đặt sân gần đây</h2>
                    <Link to="/booking" className="bg-gradient-to-r from-umt-red to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium">
                      Đặt sân mới
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">
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
                          <p className="text-sm text-gray-600 mt-1">{booking.price.toLocaleString('vi-VN')}₫</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">📱 Hoạt động gần đây</h2>
                    <Link to="/community" className="text-umt-blue hover:text-blue-700 font-medium">
                      Xem tất cả
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{activity.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{activity.title}</h3>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            activity.status === 'success' ? 'bg-green-100 text-green-800' :
                            activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                            activity.status === 'info' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">🎉 Sự kiện sắp tới</h2>
                    <Link to="/events" className="text-umt-blue hover:text-blue-700 font-medium">
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
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">📅 Lịch sử đặt sân</h2>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gradient-to-r from-umt-red to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200">
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
                            <div className="w-16 h-16 bg-gradient-to-br from-umt-blue to-blue-600 rounded-lg flex items-center justify-center">
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
                              {booking.price.toLocaleString('vi-VN')}₫
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
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🎉 Sự kiện đã tham gia</h2>
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
                            <button className="mt-3 px-4 py-2 bg-gradient-to-r from-umt-blue to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
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

            {/* Training Tab */}
            {activeTab === 'training' && (
              <div className="space-y-6">
                {/* Weekly Goal Progress */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🎯 Mục tiêu tuần này</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                          <circle 
                            cx="50" cy="50" r="40" 
                            stroke="#10b981" 
                            strokeWidth="8" 
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - userStats.totalSteps / userStats.weeklyGoal)}`}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900">
                            {Math.round((userStats.totalSteps / userStats.weeklyGoal) * 100)}%
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900">Bước chân</h3>
                      <p className="text-sm text-gray-600">{userStats.totalSteps.toLocaleString('vi-VN')} / {userStats.weeklyGoal.toLocaleString('vi-VN')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-white">🏃</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Chạy bộ</h3>
                      <p className="text-sm text-gray-600">3/5 buổi</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-umt-red to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-white">💪</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Gym</h3>
                      <p className="text-sm text-gray-600">2/4 buổi</p>
                    </div>
                  </div>
                </div>

                {/* Current Challenges */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🔥 Thử thách đang tham gia</h2>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏃</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Chạy 5km trong tuần</h3>
                            <p className="text-sm text-gray-600">Còn lại 2 ngày</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <span className="text-sm text-gray-600">3/5 km</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">💪</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Plank 3 phút mỗi ngày</h3>
                            <p className="text-sm text-gray-600">Còn lại 4 ngày</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-32 bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                          </div>
                          <span className="text-sm text-gray-600">3/7 ngày</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Community Tab */}
            {activeTab === 'community' && (
              <div className="space-y-6">
                {/* Leaderboard */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🏆 Bảng xếp hạng UMT</h2>
                  <div className="space-y-4">
                    {[1,2,3,4,5].map((rank) => (
                      <div key={rank} className={`flex items-center justify-between p-4 rounded-lg ${
                        rank === userStats.currentRank ? 'bg-gradient-to-r from-umt-blue to-blue-600 text-white' : 'bg-gray-50'
                      }`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            rank <= 3 ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
                          }`}>
                            {rank}
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              {rank === userStats.currentRank ? 'Bạn' : `Sinh viên ${rank}`}
                            </h3>
                            <p className="text-sm opacity-75">
                              {rank === userStats.currentRank ? 'Khoa CNTT' : 'Khoa CNTT'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{12500 - rank * 200} điểm</p>
                          <p className="text-sm opacity-75">{15 - rank} hoạt động</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teams */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">👥 Đội của bạn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl text-white">⚽</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">UMT Warriors</h3>
                          <p className="text-sm text-gray-600">Đội bóng đá</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">8/11 thành viên</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Hoạt động</span>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-umt-red to-red-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl text-white">🏃</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Running Club</h3>
                          <p className="text-sm text-gray-600">Câu lạc bộ chạy bộ</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">15/20 thành viên</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Hoạt động</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-6">
                {/* Achievement Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{userStats.achievements}</h3>
                    <p className="text-gray-600">Huy hiệu đã nhận</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{userStats.challengesCompleted}</h3>
                    <p className="text-gray-600">Thử thách hoàn thành</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-umt-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📈</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">#{userStats.currentRank}</h3>
                    <p className="text-gray-600">Xếp hạng hiện tại</p>
                  </div>
                </div>

                {/* Recent Achievements */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🏆 Thành tích gần đây</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'Chạy bộ 5km', description: 'Hoàn thành thử thách chạy bộ', icon: '🏃', date: 'Hôm nay' },
                      { title: 'Thành viên tích cực', description: 'Tham gia 10 hoạt động', icon: '⭐', date: '2 ngày trước' },
                      { title: 'Đội trưởng', description: 'Tạo đội đầu tiên', icon: '👑', date: '1 tuần trước' },
                      { title: 'Người mới', description: 'Tham gia UMT Sport Hub', icon: '🎉', date: '2 tuần trước' }
                    ].map((achievement, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-xl">{achievement.icon}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.date}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">👤 Thông tin cá nhân</h2>
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
                        defaultValue="john.doe@umt.edu.vn"
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
                    <button className="bg-gradient-to-r from-umt-red to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium">
                      Cập nhật thông tin
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">🔒 Đổi mật khẩu</h2>
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
                    <button className="bg-gradient-to-r from-umt-blue to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
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
