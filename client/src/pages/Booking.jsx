 import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const Booking = () => {
  const navigate = useNavigate();
  const { isAuthenticated, token, user } = useContext(AuthContext);
  const [pitches, setPitches] = useState([]);
  const [isLoadingPitches, setIsLoadingPitches] = useState(false);
  const [selectedPitchId, setSelectedPitchId] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [availability, setAvailability] = useState([]);
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [filters, setFilters] = useState({
    sport: 'all',
    priceRange: 'all',
    amenities: []
  });

  const sports = useMemo(() => ([
    { id: 'all', name: 'Tất cả', icon: '🏟️' },
    { id: '5v5', name: 'Bóng đá 5v5', icon: '⚽' },
    { id: '7v7', name: 'Bóng đá 7v7', icon: '🏟️' },
    { id: '11v11', name: 'Bóng đá 11v11', icon: '🏟️' },
    { id: 'badminton', name: 'Cầu lông', icon: '🏸' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'basketball', name: 'Bóng rổ', icon: '🏀' }
  ]), []);

  const amenities = useMemo(() => ([
    { id: 'parking', name: 'Bãi đỗ xe', icon: '🅿️' },
    { id: 'shower', name: 'Phòng tắm', icon: '🚿' },
    { id: 'locker', name: 'Tủ đồ', icon: '🔒' },
    { id: 'lighting', name: 'Chiếu sáng', icon: '💡' },
    { id: 'aircon', name: 'Điều hòa', icon: '❄️' },
    { id: 'wifi', name: 'WiFi', icon: '📶' }
  ]), []);

  const priceRanges = useMemo(() => ([
    { id: 'all', name: 'Tất cả', min: 0, max: Infinity },
    { id: 'low', name: 'Dưới 100k', min: 0, max: 100000 },
    { id: 'medium', name: '100k - 200k', min: 100000, max: 200000 },
    { id: 'high', name: 'Trên 200k', min: 200000, max: Infinity }
  ]), []);

  useEffect(() => {
    const loadPitches = async () => {
      setIsLoadingPitches(true);
      setError('');
      try {
        const res = await fetch('/api/pitches');
        if (!res.ok) throw new Error('Không tải được danh sách sân');
        const data = await res.json();
        setPitches(data);
        if (data.length > 0) setSelectedPitchId(data[0].pitch_id);
      } catch (e) {
        setError(e.message || 'Lỗi tải dữ liệu');
      } finally {
        setIsLoadingPitches(false);
      }
    };
    loadPitches();
  }, []);

  useEffect(() => {
    const loadAvailability = async () => {
      if (!selectedPitchId || !selectedDate) return;
      setIsLoadingAvailability(true);
      setError('');
      try {
        const res = await fetch(`/api/availability/${selectedPitchId}?date=${selectedDate}`);
        if (!res.ok) throw new Error('Không tải được khung giờ');
        const data = await res.json();
        setAvailability(Array.isArray(data.slots) ? data.slots : []);
        setSelectedSlotId(null);
      } catch (e) {
        setError(e.message || 'Lỗi tải khung giờ');
      } finally {
        setIsLoadingAvailability(false);
      }
    };
    loadAvailability();
  }, [selectedPitchId, selectedDate]);

  const filteredPitches = useMemo(() => {
    return pitches.filter(pitch => {
      // Sport filter
      if (filters.sport !== 'all' && pitch.pitch_type !== filters.sport) {
        return false;
      }
      return true;
    });
  }, [pitches, filters]);

  const selectedPitch = useMemo(() => pitches.find(p => p.pitch_id === selectedPitchId), [pitches, selectedPitchId]);

  const totalPrice = useMemo(() => {
    const slot = availability.find(s => s.timeslot_id === selectedSlotId);
    return slot ? Number(slot.price) : 0;
  }, [availability, selectedSlotId]);

  const handleCreateBooking = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!selectedPitchId || !selectedDate || !selectedSlotId) return;
    const slot = availability.find(s => s.timeslot_id === selectedSlotId);
    if (!slot) return;
    setCreating(true);
    setError('');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          userId: user?.id,
          pitchId: selectedPitchId,
          date: selectedDate,
          startTime: slot.start_time,
          endTime: slot.end_time,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Đặt sân thất bại');
      }
      setShowModal(true);
    } catch (e) {
      setError(e.message || 'Lỗi đặt sân');
    } finally {
      setCreating(false);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  const getWeekDays = () => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('vi-VN', { weekday: 'short' }),
        dayNumber: date.getDate(),
        isToday: i === 0
      });
    }
    return days;
  };

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
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">⚽ Đặt Sân Thể Thao</h1>
                   <p className="text-xl opacity-90 max-w-3xl mx-auto">
                     Chọn sân thể thao yêu thích và đặt lịch ngay hôm nay với hệ thống thông minh
                   </p>
                 </div>
               </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Bộ lọc</h3>
              
              {/* Sport Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Môn thể thao</label>
                <div className="space-y-2">
                  {sports.map(sport => (
                    <button
                      key={sport.id}
                      onClick={() => setFilters(prev => ({ ...prev, sport: sport.id }))}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                        filters.sport === sport.id
                          ? 'bg-ocean-primary text-white'
                          : 'text-gray-600 hover:bg-ocean-pale hover:text-ocean-primary'
                      }`}
                    >
                      <span className="mr-2">{sport.icon}</span>
                      {sport.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Khoảng giá</label>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setFilters(prev => ({ ...prev, priceRange: range.id }))}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                        filters.priceRange === range.id
                          ? 'bg-umt-red text-white'
                          : 'text-gray-600 hover:bg-umt-light-red hover:text-umt-red'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Tiện ích</label>
                <div className="space-y-2">
                  {amenities.map(amenity => (
                    <label key={amenity.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, amenities: [...prev.amenities, amenity.id] }));
                          } else {
                            setFilters(prev => ({ ...prev, amenities: prev.amenities.filter(id => id !== amenity.id) }));
                          }
                        }}
                        className="rounded border-gray-300 text-umt-blue focus:ring-umt-blue"
                      />
                      <span className="text-sm text-gray-600">
                        <span className="mr-1">{amenity.icon}</span>
                        {amenity.name}
                      </span>
                </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Pitch Selection */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chọn sân</h2>
                {error && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {isLoadingPitches && (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-umt-blue mx-auto"></div>
                      <p className="mt-2 text-gray-600">Đang tải danh sách sân...</p>
                    </div>
                  )}
                  
                  {!isLoadingPitches && filteredPitches.map((pitch) => (
                    <div
                      key={pitch.pitch_id}
                      onClick={() => setSelectedPitchId(pitch.pitch_id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedPitchId === pitch.pitch_id 
                          ? 'border-umt-blue bg-umt-light-blue' 
                          : 'border-gray-200 hover:border-umt-blue hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">🏟️</span>
                        <div>
                              <h3 className="font-semibold text-gray-900">{pitch.pitch_name}</h3>
                              <p className="text-sm text-gray-600">{pitch.venue_name}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {pitch.pitch_type}
                                </span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {pitch.surface_type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Từ</div>
                          <div className="font-semibold text-umt-blue">120k₫</div>
                        </div>
                      </div>
                    </div>
                  ))}
                        </div>
                      </div>

              {/* Date & Time Selection */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chọn ngày & giờ</h2>
                
                {/* Quick Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Chọn ngày nhanh</label>
                  <div className="grid grid-cols-7 gap-2">
                    {getWeekDays().map((day, index) => (
                      <button
                        key={day.date}
                        onClick={() => setSelectedDate(day.date)}
                        className={`p-3 rounded-lg text-center transition-all duration-200 ${
                          selectedDate === day.date
                            ? 'bg-ocean-primary text-white'
                            : day.isToday
                            ? 'bg-umt-red text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-xs">{day.day}</div>
                        <div className="font-semibold">{day.dayNumber}</div>
                    </button>
                  ))}
                </div>
              </div>

                {/* Custom Date Selection */}
              <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Hoặc chọn ngày khác</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getTodayDate()}
                  max={getMaxDate()}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                />
              </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Khung giờ có sẵn</label>
                  {isLoadingAvailability && (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-umt-blue mx-auto"></div>
                      <p className="mt-2 text-gray-600">Đang tải khung giờ...</p>
                    </div>
                  )}
                  
                {!isLoadingAvailability && (
                    <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                      {availability.map((slot) => (
                      <button
                          key={slot.timeslot_id}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlotId(slot.timeslot_id)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedSlotId === slot.timeslot_id
                              ? 'border-umt-red bg-umt-light-red text-umt-red'
                              : slot.available
                              ? 'border-gray-200 hover:border-umt-blue hover:bg-umt-light-blue text-gray-700'
                              : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="font-medium">
                            {slot.start_time.substring(0,5)} - {slot.end_time.substring(0,5)}
                          </div>
                          <div className="text-sm">
                            {Number(slot.price).toLocaleString('vi-VN')}₫
                          </div>
                          {!slot.available && (
                            <div className="text-xs text-red-500 mt-1">Đã đặt</div>
                          )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

            {/* Booking Summary & Action */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tóm tắt đặt sân</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedPitch && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Sân</div>
                        <div className="font-semibold">{selectedPitch.pitch_name}</div>
                        <div className="text-sm text-gray-500">{selectedPitch.pitch_type}</div>
                </div>
              )}

              {selectedDate && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Ngày</div>
                        <div className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString('vi-VN')}
                  </div>
                </div>
              )}

              {selectedSlotId && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Khung giờ</div>
                        <div className="font-semibold">
                      {(() => {
                            const slot = availability.find(x => x.timeslot_id === selectedSlotId);
                            return slot ? `${slot.start_time.substring(0,5)} - ${slot.end_time.substring(0,5)}` : '';
                      })()}
                  </div>
                </div>
              )}
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="text-2xl font-bold text-umt-red mb-4">
                    {totalPrice.toLocaleString('vi-VN')}₫
                  </div>
                  <button
                    onClick={handleCreateBooking}
                    disabled={!selectedPitchId || !selectedDate || !selectedSlotId || creating}
                    className="bg-gradient-to-r from-umt-red to-red-600 text-white font-bold py-4 px-8 rounded-xl hover:from-red-600 hover:to-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {creating ? '⏳ Đang đặt sân...' : '⚽ Đặt Sân Ngay'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Pitches */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sân nổi bật hôm nay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pitches.slice(0, 6).map((pitch) => (
              <div key={pitch.pitch_id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-umt-blue to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-6xl group-hover:scale-110 transition-transform duration-300">🏟️</div>
                  <div className="absolute top-4 right-4 bg-white text-umt-blue px-3 py-1 rounded-full text-sm font-bold">
                    Còn trống
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-ocean-primary transition-colors">
                    {pitch.pitch_name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pitch.venue_name}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">{pitch.pitch_type}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">{pitch.surface_type}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPitchId(pitch.pitch_id)} 
                      className="bg-gradient-to-r from-umt-blue to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                    >
                      Chọn sân
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 animate-bounce-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 Đặt sân thành công!</h3>
              <p className="text-gray-600 mb-6">
                Chúng tôi đã nhận được yêu cầu đặt sân của bạn. Bạn sẽ nhận được email xác nhận trong vài phút tới.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Đóng
                </button>
                <Link
                  to="/dashboard"
                  className="flex-1 bg-gradient-to-r from-umt-blue to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-center"
                >
                  Xem lịch đặt
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
