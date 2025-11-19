import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📰' },
    { id: 'sports', name: 'Thể thao', icon: '⚽' },
    { id: 'events', name: 'Sự kiện', icon: '🎉' },
    { id: 'facilities', name: 'Cơ sở vật chất', icon: '🏟️' },
    { id: 'community', name: 'Cộng đồng', icon: '👥' }
  ];

  // Load news posts from backend
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError('');
      try {
        const res = await fetch('/api/content/posts/news');
        if (!res.ok) throw new Error('Không tải được tin tức');
        const data = await res.json();
        const mapped = (Array.isArray(data) ? data : []).map((p, idx) => ({
          id: p.id ?? idx + 1,
          title: p.title,
          excerpt: p.content?.slice(0, 150) || '',
          content: p.content || '',
          category: 'sports', // tạm mapping chung, có thể mở rộng sau
          author: 'UMT Sports Hub',
          date: p.created_at || new Date().toISOString(),
          image:
            'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=400&fit=crop',
          featured: idx === 0,
        }));
        setNewsArticles(mapped);
      } catch (err) {
        setError(err.message || 'Lỗi tải dữ liệu');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

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
        {error && (
          <div className="mb-4 text-center text-sm text-red-600">{error}</div>
        )}
        {isLoading && (
          <div className="mb-4 text-center text-sm text-gray-500">Đang tải tin tức...</div>
        )}
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
