import React, { useEffect, useState } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [communityPosts, setCommunityPosts] = useState([]);
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(false);
  const [communityError, setCommunityError] = useState('');

  const sports = [
    { id: 'all', name: 'Tất cả', icon: '🏟️' },
    { id: 'football', name: 'Bóng đá', icon: '⚽' },
    { id: 'basketball', name: 'Bóng rổ', icon: '🏀' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'running', name: 'Chạy bộ', icon: '🏃' },
    { id: 'gym', name: 'Gym', icon: '💪' }
  ];

  const periods = [
    { id: 'week', name: 'Tuần này' },
    { id: 'month', name: 'Tháng này' },
    { id: 'semester', name: 'Học kỳ' },
    { id: 'year', name: 'Năm học' }
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: 'Nguyễn Văn A',
      avatar: '👨‍💻',
      department: 'Khoa CNTT',
      class: 'IT21A',
      points: 12500,
      activities: 45,
      sport: 'football',
      badge: '🥇'
    },
    {
      rank: 2,
      name: 'Trần Thị B',
      avatar: '👩‍🎓',
      department: 'Khoa Kinh tế',
      class: 'KT21B',
      points: 11800,
      activities: 42,
      sport: 'basketball',
      badge: '🥈'
    },
    {
      rank: 3,
      name: 'Lê Văn C',
      avatar: '👨‍🎓',
      department: 'Khoa CNTT',
      class: 'IT21C',
      points: 11200,
      activities: 38,
      sport: 'tennis',
      badge: '🥉'
    },
    {
      rank: 4,
      name: 'Phạm Thị D',
      avatar: '👩‍💻',
      department: 'Khoa CNTT',
      class: 'IT21A',
      points: 10800,
      activities: 35,
      sport: 'running',
      badge: '🏅'
    },
    {
      rank: 5,
      name: 'Hoàng Văn E',
      avatar: '👨‍🎓',
      department: 'Khoa Kinh tế',
      class: 'KT21A',
      points: 10200,
      activities: 32,
      sport: 'gym',
      badge: '🏅'
    },
    {
      rank: 15,
      name: 'Bạn',
      avatar: '👤',
      department: 'Khoa CNTT',
      class: 'IT21A',
      points: 8500,
      activities: 25,
      sport: 'football',
      badge: '⭐',
      isCurrentUser: true
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Chạy 5km trong tuần',
      description: 'Hoàn thành 5km chạy bộ trong 7 ngày',
      icon: '🏃',
      participants: 156,
      maxParticipants: 200,
      endDate: '2024-01-28',
      reward: 'Huy hiệu + 500 điểm',
      difficulty: 'medium',
      progress: 60
    },
    {
      id: 2,
      title: 'Plank 3 phút mỗi ngày',
      description: 'Thực hiện plank 3 phút liên tục mỗi ngày trong tuần',
      icon: '💪',
      participants: 89,
      maxParticipants: 150,
      endDate: '2024-01-30',
      reward: 'Huy hiệu + 300 điểm',
      difficulty: 'hard',
      progress: 40
    },
    {
      id: 3,
      title: 'Tham gia 3 trận bóng đá',
      description: 'Tham gia ít nhất 3 trận đấu bóng đá trong tuần',
      icon: '⚽',
      participants: 234,
      maxParticipants: 300,
      endDate: '2024-01-29',
      reward: 'Huy hiệu + 400 điểm',
      difficulty: 'easy',
      progress: 80
    },
    {
      id: 4,
      title: 'Tập gym 4 buổi',
      description: 'Hoàn thành 4 buổi tập gym trong tuần',
      icon: '🏋️',
      participants: 67,
      maxParticipants: 100,
      endDate: '2024-01-31',
      reward: 'Huy hiệu + 600 điểm',
      difficulty: 'hard',
      progress: 25
    }
  ];

  const teams = [
    {
      id: 1,
      name: 'UMT Warriors',
      sport: 'football',
      icon: '⚽',
      members: 8,
      maxMembers: 11,
      captain: 'Nguyễn Văn A',
      description: 'Đội bóng đá chuyên nghiệp của UMT',
      wins: 12,
      losses: 3,
      status: 'recruiting'
    },
    {
      id: 2,
      name: 'Running Club UMT',
      sport: 'running',
      icon: '🏃',
      members: 15,
      maxMembers: 20,
      captain: 'Trần Thị B',
      description: 'Câu lạc bộ chạy bộ cho mọi cấp độ',
      wins: 8,
      losses: 2,
      status: 'active'
    },
    {
      id: 3,
      name: 'Basketball Titans',
      sport: 'basketball',
      icon: '🏀',
      members: 10,
      maxMembers: 12,
      captain: 'Lê Văn C',
      description: 'Đội bóng rổ thi đấu giải đấu',
      wins: 15,
      losses: 5,
      status: 'full'
    }
  ];

  const tabs = [
    { id: 'leaderboard', name: 'Bảng xếp hạng', icon: '🏆' },
    { id: 'challenges', name: 'Thử thách', icon: '🔥' },
    { id: 'teams', name: 'Đội nhóm', icon: '👥' },
    { id: 'events', name: 'Sự kiện', icon: '🎉' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'Dễ';
      case 'medium': return 'Trung bình';
      case 'hard': return 'Khó';
      default: return 'Không xác định';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'recruiting': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'full': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'recruiting': return 'Đang tuyển';
      case 'active': return 'Hoạt động';
      case 'full': return 'Đã đầy';
      default: return 'Không xác định';
    }
  };

  // Load community posts for events tab (dùng dữ liệu bài viết cộng đồng)
  useEffect(() => {
    const fetchCommunityPosts = async () => {
      setIsLoadingCommunity(true);
      setCommunityError('');
      try {
        const res = await fetch('/api/content/posts/community');
        if (!res.ok) throw new Error('Không tải được bài viết cộng đồng');
        const data = await res.json();
        const mapped = (Array.isArray(data) ? data : []).map((p, idx) => ({
          id: p.id ?? idx + 1,
          title: p.title,
          content: p.content || '',
          date: p.created_at || new Date().toISOString(),
        }));
        setCommunityPosts(mapped);
      } catch (err) {
        setCommunityError(err.message || 'Lỗi tải dữ liệu cộng đồng');
      } finally {
        setIsLoadingCommunity(false);
      }
    };

    fetchCommunityPosts();
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">👥 Cộng Đồng Thể Thao</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Kết nối, thi đấu và cùng nhau phát triển trong cộng đồng thể thao UMT
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
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

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Môn thể thao</label>
                    <select
                      value={selectedSport}
                      onChange={(e) => setSelectedSport(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                    >
                      {sports.map((sport) => (
                        <option key={sport.id} value={sport.id}>
                          {sport.icon} {sport.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Thời gian</label>
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                    >
                      {periods.map((period) => (
                        <option key={period.id} value={period.id}>
                          {period.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tổng số sinh viên tham gia</p>
                  <p className="text-2xl font-bold text-umt-blue">1,247</p>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">🏆 Bảng xếp hạng {periods.find(p => p.id === selectedPeriod)?.name}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboardData.map((user, index) => (
                  <div key={user.rank} className={`p-6 hover:bg-gray-50 transition-colors duration-300 ${
                    user.isCurrentUser ? 'bg-gradient-to-r from-umt-blue to-blue-600 text-white' : ''
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          user.rank <= 3 ? 'bg-yellow-400 text-white' : 
                          user.isCurrentUser ? 'bg-white text-umt-blue' : 'bg-gray-300 text-gray-700'
                        }`}>
                          {user.rank <= 3 ? user.badge : user.rank}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{user.avatar}</div>
                          <div>
                            <h3 className="font-semibold text-lg">{user.name}</h3>
                            <p className="text-sm opacity-75">{user.department} • {user.class}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-6">
                          <div>
                            <p className="text-sm opacity-75">Điểm số</p>
                            <p className="text-xl font-bold">{user.points.toLocaleString('vi-VN')}</p>
                          </div>
                          <div>
                            <p className="text-sm opacity-75">Hoạt động</p>
                            <p className="text-xl font-bold">{user.activities}</p>
                          </div>
                          <div className="text-2xl">
                            {sports.find(s => s.id === user.sport)?.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🔥 Thử thách đang diễn ra</h2>
                <button className="bg-gradient-to-r from-umt-red to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium">
                  Tạo thử thách mới
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{challenge.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{challenge.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                            {getDifficultyText(challenge.difficulty)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Còn lại</p>
                        <p className="font-semibold text-umt-red">
                          {Math.ceil((new Date(challenge.endDate) - new Date()) / (1000 * 60 * 60 * 24))} ngày
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Tiến độ</span>
                        <span className="font-semibold">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-umt-blue to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          {challenge.participants}/{challenge.maxParticipants} người tham gia
                        </span>
                        <span className="font-semibold text-umt-red">{challenge.reward}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-umt-blue to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
                        Tham gia
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">👥 Đội nhóm thể thao</h2>
                <button className="bg-gradient-to-r from-umt-red to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium">
                  Tạo đội mới
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <div key={team.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl text-white">{team.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{team.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(team.status)}`}>
                          {getStatusText(team.status)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{team.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Đội trưởng:</span>
                        <span className="font-semibold">{team.captain}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Thành viên:</span>
                        <span className="font-semibold">{team.members}/{team.maxMembers}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Thành tích:</span>
                        <span className="font-semibold">{team.wins}W - {team.losses}L</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      {team.status === 'recruiting' ? (
                        <button className="flex-1 bg-gradient-to-r from-umt-blue to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
                          Tham gia
                        </button>
                      ) : team.status === 'full' ? (
                        <button className="flex-1 bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed font-medium">
                          Đã đầy
                        </button>
                      ) : (
                        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium">
                          Xem chi tiết
                        </button>
                      )}
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Thông tin
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🎉 Sự kiện cộng đồng</h2>
              </div>
              {communityError && (
                <div className="mb-4 text-sm text-red-600">{communityError}</div>
              )}
              {isLoadingCommunity ? (
                <div className="text-center py-8 text-sm text-gray-500">
                  Đang tải sự kiện cộng đồng...
                </div>
              ) : (
                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {post.date &&
                            new Date(post.date).toLocaleString('vi-VN')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.content}
                      </p>
                    </div>
                  ))}
                  {communityPosts.length === 0 && !communityError && (
                    <div className="text-center py-8 text-sm text-gray-500">
                      Chưa có sự kiện cộng đồng nào.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
