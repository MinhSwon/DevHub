import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const userProfile = {
    id: 1,
    name: 'Nguyễn Văn Minh',
    email: 'minh.nguyen@umt.edu.vn',
    studentId: 'UMT2024001',
    department: 'Công nghệ thông tin',
    year: 'Năm 3',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
    bio: 'Sinh viên UMT đam mê thể thao, đặc biệt là bóng đá và chạy bộ. Luôn tích cực tham gia các hoạt động thể thao của trường.',
    phone: '0123456789',
    dateOfBirth: '2002-05-15',
    height: 175,
    weight: 70,
    bloodType: 'A+',
    emergencyContact: 'Nguyễn Thị Lan - 0987654321',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    joinDate: '2023-09-01',
    lastActive: '2024-02-14',
    isVerified: true,
    isPremium: true
  };

  const sportsProfile = {
    favoriteSports: ['Bóng đá', 'Chạy bộ', 'Tennis'],
    skillLevel: {
      'Bóng đá': 'Advanced',
      'Chạy bộ': 'Intermediate',
      'Tennis': 'Beginner'
    },
    achievements: [
      { id: 1, title: 'Vô địch giải bóng đá sinh viên UMT 2023', sport: 'Bóng đá', date: '2023-12-15', level: 'Gold' },
      { id: 2, title: 'Top 10 giải marathon TP.HCM', sport: 'Chạy bộ', date: '2023-11-20', level: 'Silver' },
      { id: 3, title: 'Hoàn thành 100km chạy bộ', sport: 'Chạy bộ', date: '2023-10-30', level: 'Bronze' },
      { id: 4, title: 'Thành viên tích cực nhất tháng', sport: 'Tổng hợp', date: '2023-09-30', level: 'Gold' }
    ],
    stats: {
      totalWorkouts: 156,
      totalDuration: 2340, // minutes
      caloriesBurned: 18750,
      currentStreak: 12,
      longestStreak: 28,
      totalDistance: 450, // km
      averagePace: '5:30', // min/km
      personalRecords: {
        '5K': '22:15',
        '10K': '47:30',
        'Half Marathon': '1:45:20',
        'Marathon': '3:52:15'
      }
    }
  };

  const socialStats = {
    followers: 245,
    following: 189,
    teamsJoined: 3,
    eventsParticipated: 28,
    postsCreated: 45,
    likesReceived: 1234,
    commentsReceived: 567
  };

  const recentActivities = [
    { id: 1, type: 'workout', title: 'Chạy bộ buổi sáng', time: '2 giờ trước', icon: '🏃' },
    { id: 2, type: 'achievement', title: 'Nhận huy hiệu "Kiên trì"', time: '1 ngày trước', icon: '🏆' },
    { id: 3, type: 'team', title: 'Tham gia trận đấu với đội CNTT', time: '2 ngày trước', icon: '⚽' },
    { id: 4, type: 'event', title: 'Đăng ký giải marathon TP.HCM', time: '3 ngày trước', icon: '🎉' },
    { id: 5, type: 'social', title: 'Chia sẻ thành tích chạy bộ', time: '4 ngày trước', icon: '📱' }
  ];

  const tabs = [
    { id: 'overview', name: 'Tổng quan', icon: '📊' },
    { id: 'sports', name: 'Thể thao', icon: '⚽' },
    { id: 'achievements', name: 'Thành tích', icon: '🏆' },
    { id: 'social', name: 'Xã hội', icon: '👥' },
    { id: 'settings', name: 'Cài đặt', icon: '⚙️' }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Beginner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAchievementColor = (level) => {
    switch (level) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800';
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="relative h-48 md:h-64">
            <img
              src={userProfile.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Edit Cover Button */}
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              📷 Thay đổi ảnh bìa
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt="Avatar"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-umt-blue text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  📷
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                      {userProfile.isVerified && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                          ✓ Xác thực
                        </span>
                      )}
                      {userProfile.isPremium && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                          👑 Premium
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{userProfile.department} • {userProfile.year}</p>
                    <p className="text-gray-600 mb-2">MSSV: {userProfile.studentId}</p>
                    <p className="text-gray-600">{userProfile.bio}</p>
                  </div>

                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-umt-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      {isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa hồ sơ'}
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      Chia sẻ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover-lift">
            <div className="text-2xl font-bold text-gray-900">{sportsProfile.stats.totalWorkouts}</div>
            <div className="text-sm text-gray-600">Buổi tập</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover-lift">
            <div className="text-2xl font-bold text-gray-900">{formatDuration(sportsProfile.stats.totalDuration)}</div>
            <div className="text-sm text-gray-600">Tổng thời gian</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover-lift">
            <div className="text-2xl font-bold text-gray-900">{sportsProfile.stats.caloriesBurned.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Calories</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover-lift">
            <div className="text-2xl font-bold text-gray-900">{sportsProfile.stats.currentStreak}</div>
            <div className="text-sm text-gray-600">Ngày liên tiếp</div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'border-umt-red bg-red-50 text-umt-red'
                    : 'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ℹ️ Thông tin cá nhân</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{userProfile.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <p className="text-gray-900">{userProfile.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
                    <p className="text-gray-900">{new Date(userProfile.dateOfBirth).toLocaleDateString('vi-VN')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chiều cao</label>
                    <p className="text-gray-900">{userProfile.height} cm</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cân nặng</label>
                    <p className="text-gray-900">{userProfile.weight} kg</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nhóm máu</label>
                    <p className="text-gray-900">{userProfile.bloodType}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Liên hệ khẩn cấp</label>
                    <p className="text-gray-900">{userProfile.emergencyContact}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                    <p className="text-gray-900">{userProfile.address}</p>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🕒 Hoạt động gần đây</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-2xl mr-4">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{activity.title}</div>
                        <div className="text-sm text-gray-600">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Social Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">👥 Thống kê xã hội</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Người theo dõi</span>
                    <span className="font-medium">{socialStats.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Đang theo dõi</span>
                    <span className="font-medium">{socialStats.following}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Đội đã tham gia</span>
                    <span className="font-medium">{socialStats.teamsJoined}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sự kiện tham gia</span>
                    <span className="font-medium">{socialStats.eventsParticipated}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Thống kê nhanh</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Chuỗi dài nhất</span>
                    <span className="font-medium">{sportsProfile.stats.longestStreak} ngày</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tổng quãng đường</span>
                    <span className="font-medium">{sportsProfile.stats.totalDistance} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tốc độ TB</span>
                    <span className="font-medium">{sportsProfile.stats.averagePace}/km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sports' && (
          <div className="space-y-6">
            {/* Favorite Sports */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">⚽ Môn thể thao yêu thích</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sportsProfile.favoriteSports.map((sport, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                    <div className="text-3xl mb-2">
                      {sport === 'Bóng đá' ? '⚽' : sport === 'Chạy bộ' ? '🏃' : sport === 'Tennis' ? '🎾' : '🏆'}
                    </div>
                    <div className="font-medium text-gray-900">{sport}</div>
                    <div className={`text-sm px-2 py-1 rounded-full mt-2 ${getLevelColor(sportsProfile.skillLevel[sport])}`}>
                      {sportsProfile.skillLevel[sport]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Records */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏃 Kỷ lục cá nhân</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(sportsProfile.stats.personalRecords).map(([distance, time]) => (
                  <div key={distance} className="bg-gradient-to-br from-umt-blue to-blue-600 text-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{time}</div>
                    <div className="text-sm opacity-90">{distance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 Thành tích</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sportsProfile.achievements.map((achievement) => (
                  <div key={achievement.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">
                          {achievement.level === 'Gold' ? '🥇' : achievement.level === 'Silver' ? '🥈' : '🥉'}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.sport}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAchievementColor(achievement.level)}`}>
                        {achievement.level}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(achievement.date).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">👥 Hoạt động xã hội</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{socialStats.followers}</div>
                  <div className="text-sm text-gray-600">Người theo dõi</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{socialStats.following}</div>
                  <div className="text-sm text-gray-600">Đang theo dõi</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{socialStats.teamsJoined}</div>
                  <div className="text-sm text-gray-600">Đội đã tham gia</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{socialStats.eventsParticipated}</div>
                  <div className="text-sm text-gray-600">Sự kiện tham gia</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{socialStats.postsCreated}</div>
                  <div className="text-sm text-gray-600">Bài viết đã tạo</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{socialStats.likesReceived}</div>
                  <div className="text-sm text-gray-600">Lượt thích nhận</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Cài đặt tài khoản</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thông báo</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Nhận thông báo về sự kiện mới</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Nhận thông báo về đội nhóm</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm text-gray-700">Nhận email marketing</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quyền riêng tư</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Hiển thị hồ sơ công khai</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span className="text-sm text-gray-700">Cho phép người khác tìm thấy tôi</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm text-gray-700">Hiển thị hoạt động tập luyện</span>
                    </label>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-umt-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    Lưu cài đặt
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    Đặt lại
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
