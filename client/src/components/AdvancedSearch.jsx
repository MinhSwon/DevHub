import React, { useState } from 'react';

const AdvancedSearch = ({ onSearch, onClose }) => {
  const [searchFilters, setSearchFilters] = useState({
    sport: '',
    date: '',
    time: '',
    priceRange: [0, 1000000],
    location: '',
    amenities: [],
    availability: 'all'
  });

  const sports = [
    { id: 'football', name: 'Bóng đá', icon: '⚽' },
    { id: 'basketball', name: 'Bóng rổ', icon: '🏀' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'badminton', name: 'Cầu lông', icon: '🏸' },
    { id: 'volleyball', name: 'Bóng chuyền', icon: '🏐' },
    { id: 'swimming', name: 'Bơi lội', icon: '🏊' }
  ];

  const amenities = [
    { id: 'parking', name: 'Bãi đậu xe' },
    { id: 'changing_room', name: 'Khu vực thay đồ' },
    { id: 'shower', name: 'Phòng tắm' },
    { id: 'equipment', name: 'Thuê dụng cụ' },
    { id: 'coach', name: 'Huấn luyện viên' },
    { id: 'food', name: 'Quầy bán đồ ăn' },
    { id: 'wifi', name: 'WiFi miễn phí' },
    { id: 'air_conditioning', name: 'Điều hòa' }
  ];

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  const handleFilterChange = (key, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAmenityToggle = (amenityId) => {
    setSearchFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...searchFilters.priceRange];
    newRange[index] = parseInt(value);
    setSearchFilters(prev => ({
      ...prev,
      priceRange: newRange
    }));
  };

  const handleSearch = () => {
    onSearch(searchFilters);
    onClose();
  };

  const handleReset = () => {
    setSearchFilters({
      sport: '',
      date: '',
      time: '',
      priceRange: [0, 1000000],
      location: '',
      amenities: [],
      availability: 'all'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-bounce-in">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Tìm kiếm nâng cao</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Sport Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Môn thể thao</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => handleFilterChange('sport', sport.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    searchFilters.sport === sport.id
                      ? 'border-umt-red bg-red-50 text-umt-red'
                      : 'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{sport.icon}</div>
                  <div className="text-sm font-medium">{sport.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày</label>
              <input
                type="date"
                value={searchFilters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Giờ bắt đầu</label>
              <select
                value={searchFilters.time}
                onChange={(e) => handleFilterChange('time', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
              >
                <option value="">Chọn giờ</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Khoảng giá (VNĐ)</label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={searchFilters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                placeholder="Từ"
              />
              <span className="text-gray-500">đến</span>
              <input
                type="number"
                value={searchFilters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent"
                placeholder="Đến"
              />
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max="1000000"
                step="50000"
                value={searchFilters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí</label>
            <input
              type="text"
              value={searchFilters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              placeholder="Nhập địa điểm hoặc khu vực"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Tiện nghi</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {amenities.map((amenity) => (
                <label key={amenity.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={searchFilters.amenities.includes(amenity.id)}
                    onChange={() => handleAmenityToggle(amenity.id)}
                    className="w-4 h-4 text-umt-red focus:ring-umt-red border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{amenity.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Trạng thái</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="all"
                  checked={searchFilters.availability === 'all'}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-4 h-4 text-umt-red focus:ring-umt-red border-gray-300"
                />
                <span className="text-sm text-gray-700">Tất cả</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="available"
                  checked={searchFilters.availability === 'available'}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-4 h-4 text-umt-red focus:ring-umt-red border-gray-300"
                />
                <span className="text-sm text-gray-700">Có sẵn</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="booked"
                  checked={searchFilters.availability === 'booked'}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-4 h-4 text-umt-red focus:ring-umt-red border-gray-300"
                />
                <span className="text-sm text-gray-700">Đã đặt</span>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            Đặt lại
          </button>
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-umt-red text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
