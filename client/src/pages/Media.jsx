import React, { useState } from 'react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for videos
  const videos = [
    {
      id: 1,
      title: 'Highlight trận chung kết UMT Cup 2023',
      description: 'Những khoảnh khắc đẹp nhất từ trận chung kết giải bóng đá sinh viên UMT',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=400&h=225&fit=crop',
      duration: '8:45',
      views: 15420,
      likes: 892,
      uploadDate: '2024-02-10',
      category: 'football',
      author: 'UMT Sports Media',
      tags: ['Bóng đá', 'Chung kết', 'UMT Cup', 'Highlight']
    },
    {
      id: 2,
      title: 'Hướng dẫn kỹ thuật Tennis cơ bản',
      description: 'Video hướng dẫn các kỹ thuật cơ bản trong Tennis cho người mới bắt đầu',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=225&fit=crop',
      duration: '12:30',
      views: 8930,
      likes: 456,
      uploadDate: '2024-02-08',
      category: 'tennis',
      author: 'Coach Minh',
      tags: ['Tennis', 'Kỹ thuật', 'Hướng dẫn', 'Cơ bản']
    },
    {
      id: 3,
      title: 'Phỏng vấn VĐV xuất sắc nhất tháng',
      description: 'Cuộc trò chuyện với Nguyễn Văn A - VĐV xuất sắc nhất tháng 1/2024',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      duration: '15:20',
      views: 6780,
      likes: 234,
      uploadDate: '2024-02-05',
      category: 'interview',
      author: 'UMT Sports Hub',
      tags: ['Phỏng vấn', 'VĐV', 'Xuất sắc', 'Tháng']
    },
    {
      id: 4,
      title: 'Workout tại nhà - 30 phút Cardio',
      description: 'Bài tập Cardio hiệu quả có thể thực hiện tại nhà trong 30 phút',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      duration: '30:00',
      views: 12350,
      likes: 567,
      uploadDate: '2024-02-03',
      category: 'workout',
      author: 'Fitness Coach UMT',
      tags: ['Workout', 'Cardio', 'Tại nhà', '30 phút']
    },
    {
      id: 5,
      title: 'Giải chạy marathon TP.HCM 2024',
      description: 'Tổng hợp hình ảnh và video từ giải chạy marathon TP.HCM 2024',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      duration: '6:15',
      views: 9870,
      likes: 345,
      uploadDate: '2024-02-01',
      category: 'running',
      author: 'UMT Running Club',
      tags: ['Marathon', 'Chạy bộ', 'TP.HCM', '2024']
    }
  ];

  // Mock data for blogs
  const blogs = [
    {
      id: 1,
      title: '10 lợi ích của việc tập thể dục thường xuyên',
      excerpt: 'Tập thể dục không chỉ giúp bạn có thân hình đẹp mà còn mang lại nhiều lợi ích sức khỏe tuyệt vời...',
      content: 'Tập thể dục thường xuyên là một trong những cách tốt nhất để duy trì sức khỏe và cải thiện chất lượng cuộc sống. Dưới đây là 10 lợi ích chính của việc tập thể dục thường xuyên...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      author: 'Dr. Nguyễn Thị Lan',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      publishDate: '2024-02-12',
      readTime: '5 phút',
      category: 'health',
      tags: ['Sức khỏe', 'Tập thể dục', 'Lợi ích'],
      likes: 156,
      comments: 23,
      views: 2340
    },
    {
      id: 2,
      title: 'Kỹ thuật chạy bộ đúng cách cho người mới bắt đầu',
      excerpt: 'Chạy bộ là môn thể thao đơn giản nhưng cần kỹ thuật đúng để tránh chấn thương và đạt hiệu quả tốt nhất...',
      content: 'Chạy bộ là một trong những môn thể thao phổ biến nhất hiện nay. Tuy nhiên, nhiều người mới bắt đầu thường mắc phải những lỗi cơ bản...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      author: 'Coach Minh',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      publishDate: '2024-02-10',
      readTime: '7 phút',
      category: 'running',
      tags: ['Chạy bộ', 'Kỹ thuật', 'Người mới'],
      likes: 89,
      comments: 12,
      views: 1560
    },
    {
      id: 3,
      title: 'Dinh dưỡng cho vận động viên: Những điều cần biết',
      excerpt: 'Dinh dưỡng đóng vai trò quan trọng trong việc cải thiện hiệu suất và phục hồi của vận động viên...',
      content: 'Dinh dưỡng là yếu tố quan trọng không thể thiếu trong quá trình tập luyện và thi đấu của vận động viên. Một chế độ dinh dưỡng hợp lý sẽ giúp...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      author: 'Nutritionist UMT',
      authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face',
      publishDate: '2024-02-08',
      readTime: '6 phút',
      category: 'nutrition',
      tags: ['Dinh dưỡng', 'VĐV', 'Hiệu suất'],
      likes: 134,
      comments: 18,
      views: 1890
    },
    {
      id: 4,
      title: 'Tâm lý trong thi đấu thể thao',
      excerpt: 'Tâm lý là yếu tố quyết định thành công trong thi đấu thể thao. Làm thế nào để giữ được tâm lý vững vàng?...',
      content: 'Thể thao không chỉ là về thể lực mà còn là về tâm lý. Một vận động viên có thể lực tốt nhưng tâm lý không vững sẽ khó đạt được thành công...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      author: 'Sports Psychologist',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      publishDate: '2024-02-06',
      readTime: '8 phút',
      category: 'psychology',
      tags: ['Tâm lý', 'Thi đấu', 'Thể thao'],
      likes: 78,
      comments: 9,
      views: 1230
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🎯' },
    { id: 'football', name: 'Bóng đá', icon: '⚽' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'running', name: 'Chạy bộ', icon: '🏃' },
    { id: 'workout', name: 'Workout', icon: '💪' },
    { id: 'interview', name: 'Phỏng vấn', icon: '🎤' },
    { id: 'health', name: 'Sức khỏe', icon: '🏥' },
    { id: 'nutrition', name: 'Dinh dưỡng', icon: '🥗' },
    { id: 'psychology', name: 'Tâm lý', icon: '🧠' }
  ];

  const tabs = [
    { id: 'videos', name: 'Video', icon: '🎥' },
    { id: 'blogs', name: 'Blog', icon: '📝' },
    { id: 'photos', name: 'Hình ảnh', icon: '📸' },
    { id: 'podcasts', name: 'Podcast', icon: '🎧' }
  ];

  const featuredContent = videos[0]; // First video as featured

  const filteredVideos = videos.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const filteredBlogs = blogs.filter(blog => 
    selectedCategory === 'all' || blog.category === selectedCategory
  );

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-ocean-pale py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            🎥 Trung Tâm Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Video, blog và nội dung thể thao chất lượng cao từ cộng đồng UMT
          </p>
        </div>

        {/* Featured Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={featuredContent.thumbnail}
              alt={featuredContent.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur-sm text-white w-20 h-20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  🔥 NỔI BẬT
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                  {featuredContent.duration}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{featuredContent.title}</h2>
              <p className="text-white/90 text-sm line-clamp-2">{featuredContent.description}</p>
            </div>
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
        {activeTab === 'videos' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      <button className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{video.author}</span>
                      <span>{formatDate(video.uploadDate)}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          👁️ {formatViews(video.views)}
                        </span>
                        <span className="flex items-center">
                          ❤️ {video.likes}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={blog.authorAvatar}
                          alt={blog.author}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{blog.author}</div>
                          <div className="text-xs text-gray-500">{formatDate(blog.publishDate)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          👁️ {formatViews(blog.views)}
                        </span>
                        <span className="flex items-center">
                          ❤️ {blog.likes}
                        </span>
                        <span className="flex items-center">
                          💬 {blog.comments}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-umt-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Đọc tiếp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thư viện hình ảnh</h3>
            <p className="text-gray-600 mb-6">Sắp có sẵn - Hình ảnh từ các sự kiện và hoạt động thể thao</p>
            <button className="bg-umt-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Xem sớm
            </button>
          </div>
        )}

        {activeTab === 'podcasts' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Podcast thể thao</h3>
            <p className="text-gray-600 mb-6">Sắp có sẵn - Podcast về thể thao và sức khỏe</p>
            <button className="bg-umt-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Đăng ký nhận thông báo
            </button>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận nội dung mới</h3>
          <p className="text-lg mb-6 opacity-90">
            Nhận thông báo về video, blog và nội dung thể thao mới nhất
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

export default Media;
