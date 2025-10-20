import React, { useState, useEffect } from 'react';

const Training = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [workoutData, setWorkoutData] = useState({});
  const [goals, setGoals] = useState({});
  const [currentWorkout, setCurrentWorkout] = useState(null);

  // Mock data for training tracking
  const trainingStats = {
    totalWorkouts: 45,
    totalDuration: 1800, // minutes
    caloriesBurned: 12500,
    currentStreak: 7,
    longestStreak: 21,
    weeklyGoal: 300, // minutes
    weeklyProgress: 240,
    monthlyGoal: 1200,
    monthlyProgress: 980
  };

  const workoutTypes = [
    { id: 'cardio', name: 'Cardio', icon: '🏃', color: 'bg-red-500' },
    { id: 'strength', name: 'Tập lực', icon: '💪', color: 'bg-blue-500' },
    { id: 'flexibility', name: 'Dẻo dai', icon: '🧘', color: 'bg-green-500' },
    { id: 'sports', name: 'Thể thao', icon: '⚽', color: 'bg-yellow-500' }
  ];

  const recentWorkouts = [
    {
      id: 1,
      type: 'cardio',
      name: 'Chạy bộ buổi sáng',
      duration: 45,
      calories: 350,
      date: '2024-02-14',
      time: '06:30',
      notes: 'Chạy quanh hồ Tây, cảm thấy rất tốt!',
      heartRate: { avg: 145, max: 165 },
      distance: 6.2
    },
    {
      id: 2,
      type: 'strength',
      name: 'Tập gym - Upper body',
      duration: 60,
      calories: 280,
      date: '2024-02-13',
      time: '19:00',
      notes: 'Tập ngực, vai, tay. Tăng tạ thành công!',
      exercises: [
        { name: 'Bench Press', sets: 4, reps: '8-10', weight: '60kg' },
        { name: 'Shoulder Press', sets: 3, reps: '10-12', weight: '25kg' },
        { name: 'Bicep Curls', sets: 3, reps: '12-15', weight: '15kg' }
      ]
    },
    {
      id: 3,
      type: 'sports',
      name: 'Đá bóng với bạn',
      duration: 90,
      calories: 520,
      date: '2024-02-12',
      time: '16:00',
      notes: 'Trận đấu 7vs7, thắng 3-1',
      stats: { goals: 1, assists: 2, distance: 8.5 }
    },
    {
      id: 4,
      type: 'flexibility',
      name: 'Yoga buổi tối',
      duration: 30,
      calories: 120,
      date: '2024-02-11',
      time: '20:30',
      notes: 'Tập yoga để thư giãn sau ngày làm việc',
      poses: ['Downward Dog', 'Warrior III', 'Tree Pose']
    }
  ];

  const weeklyPlan = [
    { day: 'Thứ 2', workout: 'Cardio - Chạy bộ', duration: 45, completed: true },
    { day: 'Thứ 3', workout: 'Tập lực - Upper body', duration: 60, completed: true },
    { day: 'Thứ 4', workout: 'Nghỉ ngơi', duration: 0, completed: true },
    { day: 'Thứ 5', workout: 'Cardio - Cycling', duration: 40, completed: false },
    { day: 'Thứ 6', workout: 'Tập lực - Lower body', duration: 50, completed: false },
    { day: 'Thứ 7', workout: 'Thể thao - Bóng đá', duration: 90, completed: false },
    { day: 'CN', workout: 'Yoga - Thư giãn', duration: 30, completed: false }
  ];

  const achievements = [
    { id: 1, name: 'Người chạy bộ', description: 'Chạy tổng cộng 100km', icon: '🏃', progress: 85, completed: false },
    { id: 2, name: 'Sức mạnh', description: 'Tập gym 30 buổi', icon: '💪', progress: 100, completed: true },
    { id: 3, name: 'Kiên trì', description: 'Tập liên tiếp 7 ngày', icon: '🔥', progress: 100, completed: true },
    { id: 4, name: 'Linh hoạt', description: 'Tập yoga 20 buổi', icon: '🧘', progress: 60, completed: false }
  ];

  const tabs = [
    { id: 'overview', name: 'Tổng quan', icon: '📊' },
    { id: 'workouts', name: 'Buổi tập', icon: '💪' },
    { id: 'plan', name: 'Kế hoạch', icon: '📅' },
    { id: 'progress', name: 'Tiến độ', icon: '📈' },
    { id: 'achievements', name: 'Thành tích', icon: '🏆' }
  ];

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getWorkoutTypeIcon = (type) => {
    const workoutType = workoutTypes.find(wt => wt.id === type);
    return workoutType ? workoutType.icon : '💪';
  };

  const getWorkoutTypeColor = (type) => {
    const workoutType = workoutTypes.find(wt => wt.id === type);
    return workoutType ? workoutType.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            💪 Trung Tâm Luyện Tập
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Theo dõi, lên kế hoạch và đạt được mục tiêu thể thao của bạn
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">🏃</div>
            <div className="text-2xl font-bold text-gray-900">{trainingStats.totalWorkouts}</div>
            <div className="text-sm text-gray-600">Buổi tập</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-gray-900">{formatDuration(trainingStats.totalDuration)}</div>
            <div className="text-sm text-gray-600">Tổng thời gian</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-gray-900">{trainingStats.caloriesBurned.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Calories đốt</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-gray-900">{trainingStats.currentStreak}</div>
            <div className="text-sm text-gray-600">Ngày liên tiếp</div>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            🎯 Mục Tiêu Tuần
          </h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-gray-700">Tiến độ tuần này</span>
            <span className="text-lg font-bold text-gray-900">
              {trainingStats.weeklyProgress}/{trainingStats.weeklyGoal} phút
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-umt-red to-red-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(trainingStats.weeklyProgress / trainingStats.weeklyGoal) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600">
            Còn lại {trainingStats.weeklyGoal - trainingStats.weeklyProgress} phút để đạt mục tiêu tuần
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
          <div className="space-y-8">
            {/* Workout Types Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📊 Phân Bố Loại Tập Luyện</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workoutTypes.map((type) => (
                  <div key={type.id} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="text-3xl mb-2">{type.icon}</div>
                    <div className="font-medium text-gray-900">{type.name}</div>
                    <div className="text-sm text-gray-600">12 buổi</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">🕒 Hoạt Động Gần Đây</h3>
              <div className="space-y-4">
                {recentWorkouts.slice(0, 3).map((workout) => (
                  <div key={workout.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-12 h-12 rounded-full ${getWorkoutTypeColor(workout.type)} flex items-center justify-center text-white text-xl mr-4`}>
                      {getWorkoutTypeIcon(workout.type)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{workout.name}</div>
                      <div className="text-sm text-gray-600">
                        {workout.date} • {workout.time} • {formatDuration(workout.duration)} • {workout.calories} cal
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{workout.calories} cal</div>
                      <div className="text-xs text-gray-600">{formatDuration(workout.duration)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workouts' && (
          <div className="space-y-6">
            {/* Add Workout Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-umt-red to-red-600 text-white px-8 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                ➕ Thêm Buổi Tập Mới
              </button>
            </div>

            {/* Workouts List */}
            <div className="space-y-4">
              {recentWorkouts.map((workout) => (
                <div key={workout.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 rounded-full ${getWorkoutTypeColor(workout.type)} flex items-center justify-center text-white text-2xl mr-4`}>
                        {getWorkoutTypeIcon(workout.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{workout.name}</h3>
                        <div className="text-sm text-gray-600">
                          {workout.date} • {workout.time} • {formatDuration(workout.duration)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{workout.calories}</div>
                      <div className="text-sm text-gray-600">calories</div>
                    </div>
                  </div>
                  
                  {workout.notes && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        💬 {workout.notes}
                      </div>
                    </div>
                  )}

                  {workout.exercises && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">📋 Bài tập:</h4>
                      <div className="space-y-2">
                        {workout.exercises.map((exercise, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="font-medium">{exercise.name}</span>
                            <span className="text-sm text-gray-600">
                              {exercise.sets} sets × {exercise.reps} reps @ {exercise.weight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {workout.stats && (
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-600">{workout.stats.goals}</div>
                        <div className="text-sm text-gray-600">Bàn thắng</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-bold text-green-600">{workout.stats.assists}</div>
                        <div className="text-sm text-gray-600">Kiến tạo</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="font-bold text-purple-600">{workout.stats.distance}km</div>
                        <div className="text-sm text-gray-600">Quãng đường</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">📅 Kế Hoạch Tuần</h3>
            <div className="space-y-3">
              {weeklyPlan.map((day, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                  day.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 ${
                      day.completed ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                      {day.completed ? '✓' : index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{day.day}</div>
                      <div className="text-sm text-gray-600">{day.workout}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{formatDuration(day.duration)}</div>
                    <div className={`text-xs ${day.completed ? 'text-green-600' : 'text-gray-500'}`}>
                      {day.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📈 Tiến Độ Tháng</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-700">Mục tiêu tháng</span>
                <span className="text-lg font-bold text-gray-900">
                  {trainingStats.monthlyProgress}/{trainingStats.monthlyGoal} phút
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                <div 
                  className="bg-gradient-to-r from-umt-blue to-blue-600 h-6 rounded-full transition-all duration-500"
                  style={{ width: `${(trainingStats.monthlyProgress / trainingStats.monthlyGoal) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                Còn lại {trainingStats.monthlyGoal - trainingStats.monthlyProgress} phút để đạt mục tiêu tháng
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📊 Thống Kê Chi Tiết</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Tổng buổi tập</span>
                    <span className="font-bold text-gray-900">{trainingStats.totalWorkouts}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Chuỗi dài nhất</span>
                    <span className="font-bold text-gray-900">{trainingStats.longestStreak} ngày</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Chuỗi hiện tại</span>
                    <span className="font-bold text-gray-900">{trainingStats.currentStreak} ngày</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Tổng thời gian</span>
                    <span className="font-bold text-gray-900">{formatDuration(trainingStats.totalDuration)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Calories đốt</span>
                    <span className="font-bold text-gray-900">{trainingStats.caloriesBurned.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Trung bình/buổi</span>
                    <span className="font-bold text-gray-900">{formatDuration(Math.round(trainingStats.totalDuration / trainingStats.totalWorkouts))}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">🏆 Thành Tích</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`p-6 rounded-lg border-2 ${
                    achievement.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          achievement.completed ? 'bg-green-500' : 'bg-gradient-to-r from-umt-red to-red-600'
                        }`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.completed ? '✅ Hoàn thành!' : `${achievement.progress}% hoàn thành`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;
