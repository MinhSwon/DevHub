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

  const sports = useMemo(() => ([
    { id: '5v5', name: 'Sân 5 người', icon: '⚽' },
    { id: '7v7', name: 'Sân 7 người', icon: '🏟️' },
    { id: '11v11', name: 'Sân 11 người', icon: '🏟️' },
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Đặt Sân Thể Thao
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-delay-200">
            Chọn môn thể thao, thời gian và đặt sân ngay hôm nay
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Thông tin đặt sân</h2>
              {error && (
                <div className="mb-4 alert alert-error">{error}</div>
              )}
              
              {/* Pitch Type Filter (optional visual) */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Loại sân (tham khảo)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sports.map((sport) => (
                    <button
                      key={sport.id}
                      type="button"
                      onClick={() => {
                        // optional: could filter pitches by pitch_type === sport.id
                      }}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{sport.icon}</div>
                      <div className="font-medium">{sport.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pitch Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Chọn sân
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isLoadingPitches && <div>Đang tải danh sách sân...</div>}
                  {!isLoadingPitches && pitches.map((p) => (
                    <button
                      key={p.pitch_id}
                      type="button"
                      onClick={() => setSelectedPitchId(p.pitch_id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedPitchId === p.pitch_id ? 'border-umt-red bg-red-50' : 'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{p.pitch_name} ({p.pitch_type})</div>
                          <div className="text-sm text-gray-600">{p.venue_name} - {p.address}</div>
                        </div>
                        <span className="text-xl">🏟️</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Chọn ngày
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getTodayDate()}
                  max={getMaxDate()}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umt-blue focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Time Slot Selection (from availability) */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Chọn khung giờ
                </label>
                {isLoadingAvailability && <div>Đang tải khung giờ...</div>}
                {!isLoadingAvailability && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {availability.map((s) => (
                      <button
                        key={s.timeslot_id}
                        type="button"
                        disabled={!s.available}
                        onClick={() => setSelectedSlotId(s.timeslot_id)}
                        className={`p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                          selectedSlotId === s.timeslot_id ? 'border-umt-red bg-red-50 text-umt-red' : 'border-gray-200 hover:border-umt-blue hover:bg-blue-50'
                        } ${!s.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="font-medium">{s.start_time.substring(0,5)} - {s.end_time.substring(0,5)}</div>
                        <div className="text-sm text-gray-600">{Number(s.price).toLocaleString('vi-VN')} đ</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Booking Button */}
              <button
                type="button"
                onClick={handleCreateBooking}
                disabled={!selectedPitchId || !selectedDate || !selectedSlotId || creating}
                className="w-full bg-umt-red text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {creating ? 'Đang đặt sân...' : 'Đặt Sân Ngay'}
              </button>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 animate-slide-in-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tóm tắt đặt sân</h3>
              
              {selectedPitch && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Sân:</span>
                    <span className="font-medium">{selectedPitch.pitch_name} ({selectedPitch.pitch_type})</span>
                  </div>
                </div>
              )}

              {selectedDate && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Ngày:</span>
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                </div>
              )}

              {selectedSlotId && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Khung giờ:</span>
                    <span className="font-medium">
                      {(() => {
                        const s = availability.find(x => x.timeslot_id === selectedSlotId);
                        return s ? `${s.start_time.substring(0,5)} - ${s.end_time.substring(0,5)}` : '';
                      })()}
                    </span>
                  </div>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Tổng cộng:</span>
                  <span className="text-umt-red">{totalPrice.toLocaleString('vi-VN')} VNĐ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Pitches Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sân nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pitches.slice(0, 6).map((p) => (
              <div key={p.pitch_id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in">
                <div className="h-48 bg-gradient-to-br from-umt-blue to-blue-600 flex items-center justify-center">
                  <div className="text-white text-6xl">🏟️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.pitch_name} ({p.pitch_type})</h3>
                  <p className="text-gray-600 mb-4">{p.venue_name} - {p.address}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{p.surface_type}</span>
                    <button type="button" onClick={() => setSelectedPitchId(p.pitch_id)} className="bg-umt-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 animate-bounce-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Đặt sân thành công!</h3>
              <p className="text-gray-600 mb-6">
                Chúng tôi đã nhận được yêu cầu đặt sân của bạn.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Đóng
                </button>
                <Link
                  to="/"
                  className="flex-1 bg-umt-red text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 text-center"
                >
                  Về trang chủ
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
