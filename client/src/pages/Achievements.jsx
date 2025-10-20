import React, { useState } from 'react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('my-achievements');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      name: 'Người chạy bộ',
      description: 'Chạy tổng cộng 100km',
      icon: '🏃',
      category: 'running',
      rarity: 'common',
      progress: 100,
      maxProgress: 100,
      completed: true,
      completedDate: '2024-01-15',
      points: 100,
      badge: 'bronze'
    },
    {
      id: 2,
      name: 'Sức mạnh',
      description: 'Tập gym 30 buổi',
      icon: '💪',
      category: 'strength',
      rarity: 'common',
      progress: 100,
      maxProgress: 100,
      completed: true,
      completedDate: '2024-01-20',
      points: 150,
      badge: 'silver'
    },
    {
      id: 3,
      name: 'Kiên trì',
      description: 'Tập liên tiếp 7 ngày',
      icon: '🔥',
      category: 'consistency',
      rarity: 'uncommon',
      progress: 100,
      maxProgress: 100,
      completed: true,
      completedDate: '2024-01-25',
      points: 200,
      badge: 'gold'
    },
    {
      id: 4,
      name: 'Linh hoạt',
      description: 'Tập yoga 20 buổi',
      icon: '🧘',
      category: 'flexibility',
      rarity: 'common',
      progress: 60,
      maxProgress: 100,
      completed: false,
      points: 100,
      badge: 'bronze'
    },
    {
      id: 5,
      name: 'Vận động viên',
      description: 'Tham gia 50 sự kiện thể thao',
      icon: '🏆',
      category: 'participation',
      rarity: 'rare',
      progress: 28,
      maxProgress: 50,
      completed: false,
      points: 500,
      badge: 'platinum'
    },
    {
      id: 6,
      name: 'Lãnh đạo',
      description: 'Làm đội trưởng 1 đội',
      icon: '👑',
      category: 'leadership',
      rarity: 'uncommon',
      progress: 100,
      maxProgress: 100,
      completed: true,
      completedDate: '2024-02-01',
      points: 300,
      badge: 'gold'
    },
    {
      id: 7,
      name: 'Cộng đồng',
      description: 'Có 100 người theo dõi',
      icon: '👥',
      category: 'social',
      rarity: 'rare',
      progress: 45,
      maxProgress: 100,
      completed: false,
      points: 400,
      badge: 'platinum'
    },
    {
      id: 8,
      name: 'Thách thức',
      description: 'Hoàn thành 10 thử thách',
      icon: '🎯',
      category: 'challenge',
      rarity: 'uncommon',
      progress: 70,
      maxProgress: 100,
      completed: false,
      points: 250,
      badge: 'silver'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🎯' },
    { id: 'running', name: 'Chạy bộ', icon: '🏃' },
    { id: 'strength', name: 'Tập lực', icon: '💪' },
    { id: 'flexibility', name: 'Dẻo dai', icon: '🧘' },
    { id: 'participation', name: 'Tham gia', icon: '🏆' },
    { id: 'leadership', name: 'Lãnh đạo', icon: '👑' },
    { id: 'social', name: 'Xã hội', icon: '👥' },
    { id: 'challenge', name: 'Thử thách', icon: '🎯' },
    { id: 'consistency', name: 'Kiên trì', icon: '🔥' }
  ];

  const tabs = [
    { id: 'my-achievements', name: 'Thành tích của tôi', icon: '🏆' },
    { id: 'available', name: 'Có thể đạt được', icon: '🎯' },
    { id: 'leaderboard', name: 'Bảng xếp hạng', icon: '📊' },
    { id: 'rewards', name: 'Phần thưởng', icon: '🎁' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Nguyễn Văn A', points: 2450, achievements: 12, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { rank: 2, name: 'Trần Thị B', points: 2380, achievements: 11, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { rank: 3, name: 'Lê Văn C', points: 2200, achievements: 10, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { rank: 4, name: 'Phạm Thị D', points: 2150, achievements: 9, avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face' },
    { rank: 5, name: 'Hoàng Văn E', points: 2000, achievements: 8, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' }
  ];

  const rewards = [
    {
      id: 1,
      name: 'Giảm giá 20%',
      description: 'Giảm giá 20% cho tất cả dịch vụ',
      icon: '🎫',
      pointsRequired: 1000,
      available: true,
      category: 'discount'
    },
    {
      id: 2,
      name: 'Áo thể thao UMT',
      description: 'Áo thể thao chính thức của UMT',
      icon: '👕',
      pointsRequired: 1500,
      available: true,
      category: 'merchandise'
    },
    {
      id: 3,
      name: 'Huấn luyện viên cá nhân',
      description: '1 buổi huấn luyện cá nhân miễn phí',
      icon: '👨‍🏫',
      pointsRequired: 2000,
      available: true,
      category: 'service'
    },
    {
      id: 4,
      name: 'VIP Membership',
      description: 'Thành viên VIP trong 3 tháng',
      icon: '👑',
      pointsRequired: 3000,
      available: false,
      category: 'membership'
    }
  ];

  const userStats = {
    totalPoints: 1250,
    totalAchievements: 6,
    completedAchievements: 4,
    rank: 15,
    nextRankPoints: 200
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'bronze': return 'bg-orange-100 text-orange-800';
      case 'silver': return 'bg-gray-100 text-gray-800';
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'platinum': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAchievements = achievements.filter(achievement => 
    selectedCategory === 'all' || achievement.category === selectedCategory
  );

  const completedAchievements = filteredAchievements.filter(a => a.completed);
  const availableAchievements = filteredAchievements.filter(a => !a.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            🏆 Hệ Thống Thành Tích
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Thu thập huy hiệu, đạt thành tích và nhận phần thưởng từ cộng đồng thể thao UMT
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-900">{userStats.totalPoints}</div>
            <div className="text-sm text-gray-600">Tổng điểm</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-900">{userStats.completedAchievements}</div>
            <div className="text-sm text-gray-600">Thành tích hoàn thành</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-gray-900">#{userStats.rank}</div>
            <div className="text-sm text-gray-600">Xếp hạng</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-gray-900">{userStats.nextRankPoints}</div>
            <div className="text-sm text-gray-600">Điểm đến hạng tiếp</div>
          </div>
        </div>

        {/* Progress to Next Rank */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📈 Tiến độ lên hạng</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Hạng hiện tại: #{userStats.rank}</span>
            <span className="text-sm font-medium text-gray-700">Cần thêm: {userStats.nextRankPoints} điểm</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-umt-red to-red-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(userStats.totalPoints / (userStats.totalPoints + userStats.nextRankPoints)) * 100}%` }}
            ></div>
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

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-umt-blue bg-blue-50 text-umt-blue'
                    : 'border-gray-200 hover:border-umt-red hover:bg-red-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'my-achievements' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{achievement.icon}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(achievement.badge)}`}>
                        {achievement.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{achievement.description}</p>
                  
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-800 mb-1">✅ Hoàn thành!</div>
                      <div className="text-xs text-green-600">
                        {new Date(achievement.completedDate).toLocaleDateString('vi-VN')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">+{achievement.points} điểm</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'available' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2 opacity-60">{achievement.icon}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(achievement.badge)}`}>
                        {achievement.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{achievement.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Tiến độ</span>
                      <span>{achievement.progress}/{achievement.maxProgress}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-umt-blue to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">+{achievement.points} điểm</div>
                    <div className="text-xs text-gray-500">Khi hoàn thành</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📊 Bảng Xếp Hạng Thành Tích</h3>
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div key={player.rank} className={`flex items-center p-4 rounded-lg ${
                    player.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mr-4">
                      <span className={`font-bold ${
                        player.rank === 1 ? 'text-yellow-600' : 
                        player.rank === 2 ? 'text-gray-600' : 
                        player.rank === 3 ? 'text-orange-600' : 'text-gray-600'
                      }`}>
                        {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : `#${player.rank}`}
                      </span>
                    </div>
                    
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.achievements} thành tích</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{player.points.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">điểm</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className={`bg-white rounded-xl shadow-lg p-6 hover-lift ${
                  !reward.available ? 'opacity-60' : ''
                }`}>
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{reward.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reward.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {reward.available ? 'Có sẵn' : 'Hết hàng'}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{reward.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{reward.description}</p>
                  
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-gray-900">{reward.pointsRequired} điểm</div>
                    <div className="text-xs text-gray-500">Cần để đổi</div>
                  </div>
                  
                  <button 
                    className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 ${
                      reward.available && userStats.totalPoints >= reward.pointsRequired
                        ? 'bg-umt-red text-white hover:bg-red-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!reward.available || userStats.totalPoints < reward.pointsRequired}
                  >
                    {!reward.available ? 'Hết hàng' : 
                     userStats.totalPoints >= reward.pointsRequired ? 'Đổi ngay' : 
                     `Cần thêm ${reward.pointsRequired - userStats.totalPoints} điểm`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
