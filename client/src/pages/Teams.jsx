import React, { useState } from 'react';

const Teams = () => {
  const [activeTab, setActiveTab] = useState('my-teams');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Mock data for teams
  const myTeams = [
    {
      id: 1,
      name: 'UMT Football Club',
      sport: 'Bóng đá',
      description: 'Đội bóng đá chính thức của UMT, tham gia các giải đấu trong và ngoài trường',
      members: 18,
      maxMembers: 22,
      captain: 'Nguyễn Văn A',
      status: 'active',
      level: 'Advanced',
      founded: '2023-01-15',
      achievements: ['Giải nhất UMT Cup 2023', 'Top 4 giải sinh viên TP.HCM'],
      upcomingMatches: [
        { opponent: 'Đội CNTT', date: '2024-02-20', time: '16:00', venue: 'Sân chính' },
        { opponent: 'Đội Kinh tế', date: '2024-02-25', time: '15:00', venue: 'Sân phụ' }
      ],
      stats: { wins: 12, draws: 3, losses: 2, goalsFor: 45, goalsAgainst: 18 },
      myRole: 'Captain',
      joinDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'UMT Basketball Team',
      sport: 'Bóng rổ',
      description: 'Đội bóng rổ năng động, tập luyện thường xuyên và tham gia thi đấu',
      members: 10,
      maxMembers: 12,
      captain: 'Trần Thị B',
      status: 'active',
      level: 'Intermediate',
      founded: '2023-03-10',
      achievements: ['Giải ba giải bóng rổ sinh viên'],
      upcomingMatches: [
        { opponent: 'Đội Luật', date: '2024-02-22', time: '18:00', venue: 'Sân bóng rổ' }
      ],
      stats: { wins: 8, draws: 0, losses: 4, pointsFor: 320, pointsAgainst: 280 },
      myRole: 'Player',
      joinDate: '2023-03-15'
    },
    {
      id: 3,
      name: 'UMT Running Crew',
      sport: 'Chạy bộ',
      description: 'Nhóm chạy bộ tập luyện hàng tuần, tham gia các giải marathon',
      members: 25,
      maxMembers: 30,
      captain: 'Lê Văn C',
      status: 'active',
      level: 'Mixed',
      founded: '2023-02-01',
      achievements: ['Top 10 giải marathon TP.HCM', 'Giải nhất giải chạy sinh viên'],
      upcomingMatches: [
        { opponent: 'Marathon TP.HCM', date: '2024-03-10', time: '05:00', venue: 'Công viên Lê Văn Tám' }
      ],
      stats: { totalDistance: 1250, avgPace: '5:30', membersCompleted: 20 },
      myRole: 'Member',
      joinDate: '2023-02-05'
    }
  ];

  const availableTeams = [
    {
      id: 4,
      name: 'UMT Tennis Club',
      sport: 'Tennis',
      description: 'Câu lạc bộ tennis với các buổi tập và thi đấu định kỳ',
      members: 15,
      maxMembers: 20,
      captain: 'Phạm Thị D',
      status: 'recruiting',
      level: 'Intermediate',
      founded: '2023-04-01',
      requirements: 'Có kinh nghiệm chơi tennis cơ bản',
      myRole: null
    },
    {
      id: 5,
      name: 'UMT Badminton Squad',
      sport: 'Cầu lông',
      description: 'Đội cầu lông chuyên nghiệp, tập luyện 3 buổi/tuần',
      members: 12,
      maxMembers: 16,
      captain: 'Hoàng Văn E',
      status: 'recruiting',
      level: 'Advanced',
      founded: '2023-05-15',
      requirements: 'Kỹ thuật cầu lông tốt, cam kết tập luyện',
      myRole: null
    },
    {
      id: 6,
      name: 'UMT Swimming Team',
      sport: 'Bơi lội',
      description: 'Đội bơi lội thi đấu, tập luyện tại bể bơi Olympic',
      members: 8,
      maxMembers: 12,
      captain: 'Võ Thị F',
      status: 'recruiting',
      level: 'Advanced',
      founded: '2023-06-01',
      requirements: 'Biết bơi ít nhất 2 kiểu, có thể bơi 50m liên tục',
      myRole: null
    }
  ];

  const teamInvitations = [
    {
      id: 1,
      teamName: 'UMT Volleyball Team',
      sport: 'Bóng chuyền',
      captain: 'Đặng Văn G',
      message: 'Chúng tôi đang tìm kiếm thành viên mới cho đội bóng chuyền. Bạn có muốn tham gia không?',
      sentDate: '2024-02-14',
      expiresDate: '2024-02-21'
    },
    {
      id: 2,
      teamName: 'UMT Cycling Club',
      sport: 'Đạp xe',
      captain: 'Bùi Thị H',
      message: 'Câu lạc bộ đạp xe đang tuyển thành viên cho chuyến đi dã ngoại cuối tuần.',
      sentDate: '2024-02-13',
      expiresDate: '2024-02-20'
    }
  ];

  const tabs = [
    { id: 'my-teams', name: 'Đội của tôi', icon: '👥' },
    { id: 'discover', name: 'Khám phá', icon: '🔍' },
    { id: 'invitations', name: 'Lời mời', icon: '📨' },
    { id: 'create', name: 'Tạo đội', icon: '➕' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'recruiting': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Hoạt động';
      case 'recruiting': return 'Tuyển thành viên';
      case 'inactive': return 'Không hoạt động';
      default: return 'Không xác định';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Captain': return 'bg-red-100 text-red-800';
      case 'Vice-Captain': return 'bg-orange-100 text-orange-800';
      case 'Player': return 'bg-blue-100 text-blue-800';
      case 'Member': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSportIcon = (sport) => {
    const icons = {
      'Bóng đá': '⚽',
      'Bóng rổ': '🏀',
      'Chạy bộ': '🏃',
      'Tennis': '🎾',
      'Cầu lông': '🏸',
      'Bơi lội': '🏊',
      'Bóng chuyền': '🏐',
      'Đạp xe': '🚴'
    };
    return icons[sport] || '🏆';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            👥 Quản Lý Đội Nhóm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Tạo đội, tham gia thi đấu và kết nối với cộng đồng thể thao
          </p>
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
        {activeTab === 'my-teams' && (
          <div className="space-y-6">
            {myTeams.map((team) => (
              <div key={team.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                      {getSportIcon(team.sport)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{team.sport}</span>
                        <span>•</span>
                        <span>Đội trưởng: {team.captain}</span>
                        <span>•</span>
                        <span>Thành lập: {new Date(team.founded).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(team.status)}`}>
                      {getStatusText(team.status)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(team.myRole)}`}>
                      {team.myRole}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{team.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Team Stats */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">📊 Thống kê</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Thành viên:</span>
                        <span className="font-medium">{team.members}/{team.maxMembers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trận thắng:</span>
                        <span className="font-medium text-green-600">{team.stats.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trận hòa:</span>
                        <span className="font-medium text-yellow-600">{team.stats.draws}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trận thua:</span>
                        <span className="font-medium text-red-600">{team.stats.losses}</span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Matches */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">⚽ Trận sắp tới</h4>
                    <div className="space-y-2">
                      {team.upcomingMatches.map((match, idx) => (
                        <div key={idx} className="text-sm">
                          <div className="font-medium">{match.opponent}</div>
                          <div className="text-gray-600">
                            {new Date(match.date).toLocaleDateString('vi-VN')} • {match.time}
                          </div>
                          <div className="text-gray-500">{match.venue}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">🏆 Thành tích</h4>
                    <div className="space-y-2">
                      {team.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="mr-2">🏅</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-umt-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Xem chi tiết
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    Chia sẻ
                  </button>
                  {team.myRole === 'Captain' && (
                    <button className="bg-umt-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                      Quản lý đội
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'discover' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Khám Phá Đội Nhóm</h2>
              <p className="text-gray-600">Tìm kiếm và tham gia các đội nhóm phù hợp với bạn</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableTeams.map((team) => (
                <div key={team.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-3">
                      {getSportIcon(team.sport)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                      <p className="text-sm text-gray-600">{team.sport}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{team.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Thành viên:</span>
                      <span className="font-medium">{team.members}/{team.maxMembers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Đội trưởng:</span>
                      <span className="font-medium">{team.captain}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Trình độ:</span>
                      <span className="font-medium">{team.level}</span>
                    </div>
                  </div>

                  {team.requirements && (
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-1">Yêu cầu:</div>
                      <div className="text-sm text-gray-600 bg-yellow-50 p-2 rounded">
                        {team.requirements}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-umt-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm font-medium">
                      Tham gia
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm">
                      Chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'invitations' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📨 Lời Mời Tham Gia</h2>
              <p className="text-gray-600">Các lời mời tham gia đội nhóm dành cho bạn</p>
            </div>

            {teamInvitations.length > 0 ? (
              <div className="space-y-4">
                {teamInvitations.map((invitation) => (
                  <div key={invitation.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                          {getSportIcon(invitation.sport)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{invitation.teamName}</h3>
                          <p className="text-sm text-gray-600">{invitation.sport}</p>
                          <p className="text-sm text-gray-500">Từ: {invitation.captain}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">
                          Hết hạn: {new Date(invitation.expiresDate).toLocaleDateString('vi-VN')}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700">{invitation.message}</p>
                    </div>

                    <div className="flex space-x-3">
                      <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                        Chấp nhận
                      </button>
                      <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                        Từ chối
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Không có lời mời nào</h3>
                <p className="text-gray-600">Bạn chưa nhận được lời mời tham gia đội nhóm nào</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'create' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">➕ Tạo Đội Nhóm Mới</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tên đội nhóm</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                    placeholder="Nhập tên đội nhóm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Môn thể thao</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent">
                    <option value="">Chọn môn thể thao</option>
                    <option value="football">Bóng đá</option>
                    <option value="basketball">Bóng rổ</option>
                    <option value="tennis">Tennis</option>
                    <option value="badminton">Cầu lông</option>
                    <option value="swimming">Bơi lội</option>
                    <option value="running">Chạy bộ</option>
                    <option value="volleyball">Bóng chuyền</option>
                    <option value="cycling">Đạp xe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả đội nhóm</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                    placeholder="Mô tả về đội nhóm, mục tiêu và hoạt động..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số thành viên tối đa</label>
                    <input
                      type="number"
                      min="2"
                      max="50"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                      placeholder="20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trình độ</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent">
                      <option value="beginner">Mới bắt đầu</option>
                      <option value="intermediate">Trung bình</option>
                      <option value="advanced">Nâng cao</option>
                      <option value="mixed">Hỗn hợp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Yêu cầu thành viên</label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                    placeholder="Mô tả yêu cầu đối với thành viên mới..."
                  ></textarea>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-umt-red to-red-600 text-white py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    Tạo đội nhóm
                  </button>
                  <button
                    type="button"
                    className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
