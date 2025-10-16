import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📰' },
    { id: 'sports', name: 'Thể thao', icon: '⚽' },
    { id: 'events', name: 'Sự kiện', icon: '🎉' },
    { id: 'facilities', name: 'Cơ sở vật chất', icon: '🏟️' },
    { id: 'community', name: 'Cộng đồng', icon: '👥' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Giải bóng đá sinh viên UMT 2024 chính thức khởi tranh',
      excerpt: 'Giải đấu bóng đá sinh viên lớn nhất trong năm với sự tham gia của 32 đội bóng từ các khoa.',
      content: 'Giải bóng đá sinh viên UMT 2024 đã chính thức khởi tranh với sự tham gia của 32 đội bóng từ các khoa trong trường. Giải đấu diễn ra trong 2 tháng với các trận đấu hấp dẫn...',
      category: 'sports',
      author: 'Phòng Công tác Sinh viên',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Khánh thành sân tennis mới tại khu thể thao UMT',
      excerpt: 'Sân tennis hiện đại với mặt sân cỏ nhân tạo và hệ thống chiếu sáng LED tiết kiệm năng lượng.',
      content: 'Sáng ngày 10/1/2024, Trường Đại học Quản lý và Công nghệ TP.HCM đã tổ chức lễ khánh thành sân tennis mới...',
      category: 'facilities',
      author: 'Ban Giám hiệu',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Workshop "Kỹ năng chơi bóng rổ cơ bản" dành cho sinh viên',
      excerpt: 'Chương trình đào tạo kỹ năng bóng rổ miễn phí dành cho tất cả sinh viên yêu thích môn thể thao này.',
      content: 'Nhằm nâng cao kỹ năng chơi bóng rổ cho sinh viên, CLB Thể thao UMT tổ chức workshop "Kỹ năng chơi bóng rổ cơ bản"...',
      category: 'events',
      author: 'CLB Thể thao UMT',
      date: '2024-01-08',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Cộng đồng thể thao UMT: Kết nối và phát triển',
      excerpt: 'Cộng đồng thể thao UMT đã phát triển mạnh mẽ với hơn 1000 thành viên tích cực tham gia các hoạt động.',
      content: 'Cộng đồng thể thao UMT đã trở thành một trong những cộng đồng sôi động nhất trong khu vực...',
      category: 'community',
      author: 'Cộng đồng UMT',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Hệ thống đặt sân thông minh: Công nghệ mới tại UMT',
      excerpt: 'Hệ thống đặt sân trực tuyến mới với giao diện thân thiện và tính năng thanh toán điện tử.',
      content: 'UMT Sports Hub đã triển khai hệ thống đặt sân thông minh mới với nhiều tính năng hiện đại...',
      category: 'facilities',
      author: 'Ban Công nghệ',
      date: '2024-01-03',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Giải cầu lông mở rộng UMT 2024: Đăng ký bắt đầu',
      excerpt: 'Giải cầu lông mở rộng dành cho tất cả sinh viên và cán bộ với giải thưởng hấp dẫn.',
      content: 'Giải cầu lông mở rộng UMT 2024 chính thức mở đăng ký với sự tham gia của hơn 200 vận động viên...',
      category: 'sports',
      author: 'CLB Cầu lông UMT',
      date: '2024-01-01',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Tin Tức Thể Thao
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-delay-200">
            Cập nhật những tin tức mới nhất về thể thao và hoạt động tại UMT
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-slide-in-left">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
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

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'all' && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết nổi bật</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-umt-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      Nổi bật
                    </span>
                    <span className="ml-4 text-gray-500 text-sm">
                      {new Date(featuredArticle.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Bởi {featuredArticle.author}
                    </span>
                    <button className="bg-umt-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-umt-red font-medium hover:text-red-700 transition-colors duration-300">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-umt-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
            Xem thêm tin tức
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức</h3>
          <p className="text-lg mb-6 opacity-90">
            Nhận thông báo về tin tức thể thao và sự kiện mới nhất
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

export default News;
