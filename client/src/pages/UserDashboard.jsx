import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('home');
  const [userStats, setUserStats] = useState({
    eventsJoined: 8,
    teamsJoined: 3,
    achievements: 12,
    coins: 450
  });

  useEffect(() => {
    if (user?.role === 'admin') {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h1 className="text-2xl font-bold text-white">UMT Sport Hub</h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <span className="text-xl">🔔</span>
            </button>
            <div className="bg-white/5 border border-white/20 rounded-lg p-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">👤</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{user?.email?.split('@')[0]}</p>
                <p className="text-gray-400 text-xs">Sinh viên</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 font-medium rounded-lg transition-colors duration-300"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-10">
        {/* Sidebar Tabs */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 mb-8 flex-wrap">
            {[
              { id: 'home', label: '🏠 Trang chủ', icon: '🏠' },
              { id: 'teams', label: '⚽ Đội tuyển', icon: '⚽' },
              { id: 'events', label: '📅 Sự kiện', icon: '📅' },
              { id: 'achievements', label: '🏆 Thành tích', icon: '🏆' },
              { id: 'profile', label: '👤 Hồ sơ', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Home Tab */}
          {activeTab === 'home' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-xl p-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Chào mừng bạn trở lại! 👋
                </h2>
                <p className="text-gray-300 mb-6">
                  Hôm nay là ngày để chinh phục những thử thách mới trong thể thao
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                    Khám phá sự kiện
                  </button>
                  <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-300">
                    Xem đội của bạn
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Sự kiện tham gia', value: userStats.eventsJoined, icon: '📅', color: 'blue' },
                  { label: 'Đội tham gia', value: userStats.teamsJoined, icon: '⚽', color: 'purple' },
                  { label: 'Thành tích', value: userStats.achievements, icon: '🏆', color: 'yellow' },
                  { label: 'Sport Coins', value: userStats.coins, icon: '💰', color: 'green' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className="text-4xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Events */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🔥 Sự kiện nổi bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Football Tournament 2025',
                      date: '25/11/2025',
                      location: 'Sân UMT',
                      participants: 120,
                      status: 'Sắp diễn ra',
                      image: '⚽'
                    },
                    {
                      title: 'Basketball Championship',
                      date: '28/11/2025',
                      location: 'Nhà thi đấu UMT',
                      participants: 85,
                      status: 'Đang diễn ra',
                      image: '🏀'
                    },
                    {
                      title: 'Badminton Classic',
                      date: '01/12/2025',
                      location: 'Sân cầu lông',
                      participants: 64,
                      status: 'Sắp diễn ra',
                      image: '🏸'
                    }
                  ].map((event, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 text-center text-5xl">
                        {event.image}
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-gray-400 text-sm mb-4">📅 {event.date}</p>
                        <p className="text-gray-400 text-sm mb-4">📍 {event.location}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-400">👥 {event.participants} người</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'Đang diễn ra'
                              ? 'bg-green-500/20 text-green-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                          Tham gia sự kiện
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Teams */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">⭐ Đội gợi ý</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'UMT Football Team', sport: 'Football', members: 25, level: 'Chuyên nghiệp', image: '⚽' },
                    { name: 'UMT Basketball Club', sport: 'Basketball', members: 18, level: 'Trung bình', image: '🏀' },
                    { name: 'UMT Volleyball Team', sport: 'Volleyball', members: 15, level: 'Chuyên nghiệp', image: '🏐' },
                    { name: 'UMT Badminton Club', sport: 'Badminton', members: 12, level: 'Sơ cấp', image: '🏸' }
                  ].map((team, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">{team.image}</div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{team.name}</h4>
                            <p className="text-gray-400 text-sm">{team.sport}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">👥 {team.members} thành viên</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                          {team.level}
                        </span>
                      </div>
                      <button className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-300">
                        Xem chi tiết
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">📰 Hoạt động gần đây</h3>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      { user: 'Nguyễn Văn A', action: 'vừa tham gia sự kiện Football Tournament', time: '2 giờ trước', icon: '✅' },
                      { user: 'Trần Thị B', action: 'vừa đạt huy chương vàng trong Basketball', time: '4 giờ trước', icon: '🏆' },
                      { user: 'Lê Văn C', action: 'vừa tạo đội mới Badminton Club', time: '6 giờ trước', icon: '✨' },
                      { user: 'Phạm Thị D', action: 'vừa chia sẻ bài viết về tập luyện', time: '1 ngày trước', icon: '📝' }
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-0">
                        <span className="text-2xl">{activity.icon}</span>
                        <div className="flex-1">
                          <p className="text-white"><span className="font-bold">{activity.user}</span> {activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Đội của bạn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'UMT Football Team', sport: '⚽ Football', role: 'Member', joined: '3 tháng trước', image: '⚽' },
                  { name: 'UMT Basketball Club', sport: '🏀 Basketball', role: 'Captain', joined: '2 tháng trước', image: '🏀' },
                  { name: 'UMT Badminton Club', sport: '🏸 Badminton', role: 'Member', joined: '1 tháng trước', image: '🏸' }
                ].map((team, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 text-center text-5xl">
                      {team.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{team.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{team.sport}</p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-400">
                          <span className="text-purple-300 font-semibold">Vai trò:</span> {team.role}
                        </p>
                        <p className="text-sm text-gray-400">
                          <span className="text-purple-300 font-semibold">Gia nhập:</span> {team.joined}
                        </p>
                      </div>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Sự kiện của bạn</h2>
              <div className="space-y-4">
                {[
                  { title: 'Football Match - UMT vs HCMUTE', date: '25/11/2025', status: 'Upcoming', participants: 120 },
                  { title: 'Basketball Tournament', date: '28/11/2025', status: 'Registered', participants: 85 },
                  { title: 'Badminton Championship', date: '01/12/2025', status: 'Registered', participants: 64 }
                ].map((event, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-6">
                          <span className="text-gray-400">📅 {event.date}</span>
                          <span className="text-gray-400">👥 {event.participants} người</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-4 py-2 rounded-lg font-medium ${
                          event.status === 'Upcoming'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {event.status}
                        </span>
                        <button className="text-purple-400 hover:text-purple-300">Chi tiết →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Thành tích của bạn</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Người khởi đầu', icon: '🚀', earned: true },
                  { name: 'Nhà vô địch', icon: '🏆', earned: true },
                  { name: 'Đội trưởng', icon: '👑', earned: true },
                  { name: 'Người tổ chức', icon: '📋', earned: true },
                  { name: 'Sư phụ', icon: '🧑‍🏫', earned: false },
                  { name: 'Huyền thoại', icon: '⭐', earned: false },
                  { name: 'Hứa hẹn tương lai', icon: '💫', earned: false },
                  { name: 'Người yêu thích', icon: '❤️', earned: false }
                ].map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/50'
                        : 'bg-gradient-to-br from-white/5 to-white/2 border border-white/10 opacity-50'
                    }`}
                  >
                    <div className="text-5xl mb-2">{achievement.icon}</div>
                    <h3 className="text-white font-bold text-sm">{achievement.name}</h3>
                    {achievement.earned && (
                      <p className="text-xs text-yellow-300 font-semibold mt-2">✓ Đã đạt</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold text-white">Hồ sơ của bạn</h2>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{user?.email?.split('@')[0]}</h3>
                    <p className="text-gray-400">{user?.email}</p>
                    <p className="text-purple-300 font-semibold mt-2">Sinh viên</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Họ tên</label>
                    <input type="text" placeholder="Nhập họ tên" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" value={user?.email} disabled className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Tiểu sử</label>
                    <textarea rows="4" placeholder="Viết về bạn..." className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500"></textarea>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
