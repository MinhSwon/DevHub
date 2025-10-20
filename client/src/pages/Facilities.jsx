import React, { useState } from 'react';

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🏟️' },
    { id: 'football', name: 'Bóng đá', icon: '⚽' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'basketball', name: 'Bóng rổ', icon: '🏀' },
    { id: 'swimming', name: 'Bơi lội', icon: '🏊' },
    { id: 'gym', name: 'Gym', icon: '💪' },
    { id: 'pickleball', name: 'Pickleball', icon: '🥒' }
  ];

  const facilities = [
    {
      id: 1,
      name: 'Sân bóng đá A1',
      category: 'football',
      type: 'Ngoài trời',
      size: '11 vs 11',
      surface: 'Cỏ nhân tạo',
      capacity: 22,
      price: 200000,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop'
      ],
      features: [
        'Cỏ nhân tạo chất lượng cao',
        'Hệ thống chiếu sáng LED',
        'Lưới bảo vệ an toàn',
        'Khu vực thay đồ riêng biệt',
        'Hệ thống thoát nước tốt'
      ],
      amenities: [
        'Ghế ngồi cho khán giả',
        'Khu vực nghỉ ngơi',
        'Quầy bán đồ uống',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: 'Sân Tennis T1',
      category: 'tennis',
      type: 'Ngoài trời',
      size: 'Đơn/Đôi',
      surface: 'Cứng',
      capacity: 4,
      price: 300000,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=600&fit=crop'
      ],
      features: [
        'Mặt sân cứng chuyên nghiệp',
        'Hệ thống chiếu sáng ban đêm',
        'Lưới chuyên dụng',
        'Khu vực nghỉ ngơi',
        'Hệ thống thoát nước'
      ],
      amenities: [
        'Ghế ngồi cho khán giả',
        'Khu vực thay đồ',
        'Quầy bán dụng cụ',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Sân bóng rổ B1',
      category: 'basketball',
      type: 'Trong nhà',
      size: 'Đầy đủ',
      surface: 'Gỗ',
      capacity: 10,
      price: 150000,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
      ],
      features: [
        'Sàn gỗ chuyên nghiệp',
        'Hệ thống điều hòa',
        'Rổ bóng rổ tiêu chuẩn',
        'Hệ thống chiếu sáng',
        'Khu vực thay đồ'
      ],
      amenities: [
        'Ghế ngồi cho khán giả',
        'Khu vực nghỉ ngơi',
        'Quầy bán đồ uống',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: 'Bể bơi Olympic',
      category: 'swimming',
      type: 'Trong nhà',
      size: '50m x 25m',
      surface: 'Nước',
      capacity: 50,
      price: 100000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
      ],
      features: [
        'Hệ thống lọc nước tự động',
        'Nhiệt độ nước ổn định',
        'Hệ thống chiếu sáng',
        'Khu vực thay đồ riêng biệt',
        'Huấn luyện viên chuyên nghiệp'
      ],
      amenities: [
        'Khu vực thay đồ nam/nữ',
        'Tủ khóa cá nhân',
        'Quầy bán đồ bơi',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.9,
      reviews: 124
    },
    {
      id: 5,
      name: 'Phòng Gym G1',
      category: 'gym',
      type: 'Trong nhà',
      size: '200m²',
      surface: 'Thảm cao su',
      capacity: 30,
      price: 80000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
      ],
      features: [
        'Thiết bị tập luyện hiện đại',
        'Hệ thống điều hòa',
        'Hệ thống âm thanh',
        'Khu vực thay đồ',
        'Huấn luyện viên cá nhân'
      ],
      amenities: [
        'Khu vực thay đồ',
        'Tủ khóa cá nhân',
        'Quầy bán đồ uống',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.6,
      reviews: 98
    },
    {
      id: 6,
      name: 'Sân cầu lông C1',
      category: 'badminton',
      type: 'Trong nhà',
      size: 'Đơn/Đôi',
      surface: 'Sàn gỗ',
      capacity: 4,
      price: 120000,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1431324155629-1a6ce1c6c6c6?w=800&h=600&fit=crop'
      ],
      features: [
        'Sàn gỗ chuyên nghiệp',
        'Lưới cầu lông tiêu chuẩn',
        'Hệ thống chiếu sáng',
        'Hệ thống điều hòa',
        'Khu vực nghỉ ngơi'
      ],
      amenities: [
        'Ghế ngồi cho khán giả',
        'Khu vực thay đồ',
        'Quầy bán dụng cụ',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.8,
      reviews: 67
    },
    // Pickleball Courts
    {
      id: 7,
      name: 'Sân Pickleball P1',
      category: 'pickleball',
      type: 'Ngoài trời',
      size: 'Đơn/Đôi (13.41m x 6.10m)',
      surface: 'Sân cứng acrylic',
      capacity: 4,
      price: 180000,
      image: 'https://images.unsplash.com/photo-1601582585014-1e8b430fd5b2?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1601582585014-1e8b430fd5b2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601582585483-2f8a6e2c6b33?w=800&h=600&fit=crop'
      ],
      features: [
        'Kẻ vạch tiêu chuẩn USA Pickleball',
        'Lưới pickleball chuyên dụng',
        'Đèn LED ban đêm',
        'Khu vực khởi động',
        'Hệ thống thoát nước tốt'
      ],
      amenities: [
        'Ghế chờ',
        'Nhà vệ sinh',
        'Quầy nước',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.9,
      reviews: 54
    },
    {
      id: 8,
      name: 'Sân Pickleball P2',
      category: 'pickleball',
      type: 'Trong nhà',
      size: 'Đơn/Đôi (13.41m x 6.10m)',
      surface: 'PVC chống trượt',
      capacity: 4,
      price: 220000,
      image: 'https://images.unsplash.com/photo-1601582585407-6e2d7c4d0c9b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1601582585407-6e2d7c4d0c9b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601582585483-2f8a6e2c6b33?w=800&h=600&fit=crop'
      ],
      features: [
        'Điều hòa ổn định',
        'Âm thanh nhẹ',
        'Lưới tiêu chuẩn',
        'Ánh sáng chống chói',
        'Khu vực nghỉ ngơi'
      ],
      amenities: [
        'Tủ locker',
        'Khu thay đồ',
        'Nhà vệ sinh',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.7,
      reviews: 31
    },
    {
      id: 9,
      name: 'Cụm Pickleball P3-P4',
      category: 'pickleball',
      type: 'Ngoài trời',
      size: '02 sân liền kề',
      surface: 'Sân cứng acrylic',
      capacity: 8,
      price: 320000,
      image: 'https://images.unsplash.com/photo-1601582584985-0f2d2e1d6b3e?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1601582584985-0f2d2e1d6b3e?w=800&h=600&fit=crop'
      ],
      features: [
        'Cụm 2 sân thi đấu',
        'Vạch sân chuẩn',
        'Đèn LED ban đêm',
        'Khu vực khởi động',
        'Rào chắn an toàn'
      ],
      amenities: [
        'Ghế chờ',
        'Nhà vệ sinh',
        'Quầy nước',
        'Bãi đậu xe'
      ],
      availability: 'Có sẵn',
      rating: 4.8,
      reviews: 22
    }
  ];

  const filteredFacilities = facilities.filter(facility => 
    selectedCategory === 'all' || facility.category === selectedCategory
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Cơ Sở Vật Chất
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay-200">
            Khám phá các sân thể thao hiện đại với đầy đủ tiện nghi và dịch vụ chuyên nghiệp
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility, index) => (
            <div key={facility.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedFacility(facility)}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {facility.price.toLocaleString('vi-VN')} VNĐ/giờ
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    facility.availability === 'Có sẵn' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {facility.availability}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.type} • {facility.size}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex">{renderStars(facility.rating)}</div>
                    <span className="ml-2 text-sm text-gray-600">({facility.reviews} đánh giá)</span>
                  </div>
                  <span className="text-sm text-gray-500">Tối đa {facility.capacity} người</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{facility.surface}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{facility.type}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setSelectedFacility(facility)}
                    className="flex-1 bg-umt-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Xem chi tiết
                  </button>
                  <button className="bg-umt-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                    Đặt sân
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Detail Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedFacility.name}</h2>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-umt-red">
                      {selectedFacility.price.toLocaleString('vi-VN')} VNĐ/giờ
                    </div>
                    <div className="flex items-center">
                      <div className="flex">{renderStars(selectedFacility.rating)}</div>
                      <span className="ml-2 text-sm text-gray-600">({selectedFacility.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Thông tin cơ bản</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loại:</span>
                        <span className="font-medium">{selectedFacility.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kích thước:</span>
                        <span className="font-medium">{selectedFacility.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mặt sân:</span>
                        <span className="font-medium">{selectedFacility.surface}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sức chứa:</span>
                        <span className="font-medium">{selectedFacility.capacity} người</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trạng thái:</span>
                        <span className={`font-medium ${selectedFacility.availability === 'Có sẵn' ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedFacility.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tính năng</h3>
                    <ul className="space-y-2">
                      {selectedFacility.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tiện nghi</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedFacility.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <button className="flex-1 bg-umt-red text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                    Đặt sân ngay
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium">
                    Thêm vào yêu thích
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Cơ sở vật chất của chúng tôi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Sân thể thao</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Lượt sử dụng/ngày</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Hỗ trợ</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
