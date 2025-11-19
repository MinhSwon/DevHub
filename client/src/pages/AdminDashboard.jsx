import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

// Giao diện admin dashboard lấy cảm hứng từ wireframe Figma
// https://www.figma.com/make/9IhA4VFgICB5zwdLSB1I0G/Admin-Dashboard-Wireframe?node-id=0-1&t=g8grGvprD6I1rsxB-1

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('overview');
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [userError, setUserError] = useState('');
  const [events, setEvents] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    location: '',
    startTime: '',
    endTime: '',
  });
  const [eventMessage, setEventMessage] = useState('');
  const [newsPosts, setNewsPosts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(false);
  const [postForm, setPostForm] = useState({
    category: 'news',
    title: '',
    content: '',
  });
  const [postMessage, setPostMessage] = useState('');
  const [pitches, setPitches] = useState([]);
  const [isLoadingPitches, setIsLoadingPitches] = useState(false);
  const [pitchError, setPitchError] = useState('');
  const [selectedPitchForSlot, setSelectedPitchForSlot] = useState(null);
  const [timeslotForm, setTimeslotForm] = useState({
    dayOfWeek: 'weekday',
    startTime: '18:00',
    endTime: '19:00',
    price: 120000,
  });
  const [timeslotMessage, setTimeslotMessage] = useState('');

  const menuItems = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'users', label: 'Người dùng' },
    { id: 'events', label: 'Sự kiện' },
    { id: 'news', label: 'Tin tức' },
    { id: 'community', label: 'Cộng đồng' },
    { id: 'pitches', label: 'Quản lý sân' },
    { id: 'settings', label: 'Cài đặt' },
  ];

  const stats = [
    { label: 'Tổng người dùng', value: '1,234' },
    { label: 'Đặt sân hôm nay', value: '48' },
    { label: 'Doanh thu hôm nay', value: '12.300.000₫' },
    { label: 'Sự cố cần xử lý', value: '3' },
  ];

  const recentBookings = [
    { id: 'BK-0001', user: 'Nguyễn Văn A', facility: 'Sân bóng A1', time: 'Hôm nay • 18:00-20:00', status: 'Đã xác nhận' },
    { id: 'BK-0002', user: 'Trần Thị B', facility: 'Sân tennis T2', time: 'Hôm nay • 16:00-18:00', status: 'Chờ duyệt' },
    { id: 'BK-0003', user: 'Lê Văn C', facility: 'Sân bóng rổ B3', time: 'Ngày mai • 19:00-21:00', status: 'Đã thanh toán' },
  ];

  // Tải danh sách người dùng khi mở tab "users"
  useEffect(() => {
    const fetchUsers = async () => {
      if (activeMenu !== 'users' || !token) return;
      setIsLoadingUsers(true);
      setUserError('');
      try {
        const res = await fetch('/api/admin/users', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Không tải được danh sách người dùng');
        }
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        setUserError(err.message || 'Lỗi khi tải danh sách người dùng');
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsers();
  }, [activeMenu, token]);

  // Tải sự kiện khi vào tab events
  useEffect(() => {
    const fetchEvents = async () => {
      if (activeMenu !== 'events' || !token) return;
      setIsLoadingEvents(true);
      try {
        const res = await fetch('/api/admin/events', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Không tải được danh sách sự kiện');
        const data = await res.json();
        setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingEvents(false);
      }
    };
    fetchEvents();
  }, [activeMenu, token]);

  // Tải news/community khi vào tab news / community
  useEffect(() => {
    const fetchPosts = async (category, setter, setLoading) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/posts/${category}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Không tải được bài viết');
        const data = await res.json();
        setter(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!token) return;
    if (activeMenu === 'news') {
      fetchPosts('news', setNewsPosts, setIsLoadingNews);
    } else if (activeMenu === 'community') {
      fetchPosts('community', setCommunityPosts, setIsLoadingCommunity);
    }
  }, [activeMenu, token]);

  // Tải danh sách sân khi vào tab pitches
  useEffect(() => {
    const fetchPitches = async () => {
      if (activeMenu !== 'pitches' || !token) return;
      setIsLoadingPitches(true);
      setPitchError('');
      try {
        const res = await fetch('/api/admin/pitches', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Không tải được danh sách sân');
        const data = await res.json();
        setPitches(Array.isArray(data) ? data : []);
      } catch (err) {
        setPitchError(err.message || 'Lỗi khi tải danh sách sân');
      } finally {
        setIsLoadingPitches(false);
      }
    };
    fetchPitches();
  }, [activeMenu, token]);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setEventMessage('');
    try {
      const res = await fetch('/api/admin/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: eventForm.title,
          description: eventForm.description,
          location: eventForm.location,
          startTime: eventForm.startTime,
          endTime: eventForm.endTime,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Tạo sự kiện thất bại');
      }
      setEventMessage('Đã tạo sự kiện mới ✅');
      setEventForm({
        title: '',
        description: '',
        location: '',
        startTime: '',
        endTime: '',
      });
      const refresh = await fetch('/api/admin/events', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (refresh.ok) {
        const data = await refresh.json();
        setEvents(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setEventMessage(err.message);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setPostMessage('');
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postForm),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Tạo bài viết thất bại');
      }
      setPostMessage('Đã tạo bài viết mới ✅');
      setPostForm((prev) => ({ ...prev, title: '', content: '' }));

      const category = postForm.category;
      const refresh = await fetch(`/api/admin/posts/${category}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (refresh.ok) {
        const data = await refresh.json();
        if (category === 'news') setNewsPosts(Array.isArray(data) ? data : []);
        else setCommunityPosts(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setPostMessage(err.message);
    }
  };

  const handleUpdatePitchStatus = async (pitchId, nextStatus) => {
    try {
      const res = await fetch(`/api/admin/pitches/${pitchId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!res.ok) throw new Error('Cập nhật trạng thái sân thất bại');
      setPitches((prev) =>
        prev.map((p) => (p.pitch_id === pitchId ? { ...p, status: nextStatus } : p)),
      );
    } catch (err) {
      setPitchError(err.message);
    }
  };

  const handleCreateTimeslot = async (e) => {
    e.preventDefault();
    setTimeslotMessage('');
    if (!selectedPitchForSlot) {
      setTimeslotMessage('Vui lòng chọn sân trước.');
      return;
    }
    try {
      const res = await fetch(
        `/api/admin/pitches/${selectedPitchForSlot.pitch_id}/timeslots`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(timeslotForm),
        },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Thêm khung giờ thất bại');
      }
      setTimeslotMessage('Đã thêm khung giờ mới ✅');
    } catch (err) {
      setTimeslotMessage(err.message);
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Hàng thống kê nhanh */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between"
                >
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="mt-2 text-2xl font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bảng đặt sân gần đây */}
            <div className="bg-white border border-gray-200 rounded-xl">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Đặt sân gần đây</h2>
                <button className="text-sm text-umt-blue hover:text-blue-700 font-medium">
                  Xem tất cả
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">Mã</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">Người dùng</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">Cơ sở</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">Thời gian</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {recentBookings.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-6 py-3 font-mono text-xs text-gray-600">{row.id}</td>
                        <td className="px-6 py-3 text-gray-900">{row.user}</td>
                        <td className="px-6 py-3 text-gray-700">{row.facility}</td>
                        <td className="px-6 py-3 text-gray-500">{row.time}</td>
                        <td className="px-6 py-3">
                          <span className="inline-flex px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Danh sách người dùng</h2>
              <span className="text-sm text-gray-500">
                Tổng: {users.length} người dùng
              </span>
            </div>
            {userError && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {userError}
              </div>
            )}
            {isLoadingUsers ? (
              <div className="py-8 text-center text-gray-500 text-sm">
                Đang tải danh sách người dùng...
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Tên</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Email</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Vai trò</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Trạng thái</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Ngày tạo</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td className="px-4 py-2 text-gray-900">{u.full_name || '—'}</td>
                        <td className="px-4 py-2 text-gray-700">{u.email}</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 uppercase">
                            {u.role}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${
                              u.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : u.status === 'pending_verification'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {u.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {u.created_at
                            ? new Date(u.created_at).toLocaleDateString('vi-VN')
                            : '—'}
                        </td>
                      </tr>
                    ))}
                    {users.length === 0 && !userError && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-6 text-center text-sm text-gray-500"
                        >
                          Chưa có người dùng nào.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      case 'events':
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Tạo sự kiện mới
              </h2>
              {eventMessage && (
                <div className="mb-4 text-sm text-umt-blue">{eventMessage}</div>
              )}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleCreateEvent}>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={eventForm.title}
                    onChange={(e) =>
                      setEventForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mô tả
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    rows={3}
                    value={eventForm.description}
                    onChange={(e) =>
                      setEventForm((prev) => ({ ...prev, description: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Địa điểm
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={eventForm.location}
                    onChange={(e) =>
                      setEventForm((prev) => ({ ...prev, location: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bắt đầu
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={eventForm.startTime}
                    onChange={(e) =>
                      setEventForm((prev) => ({ ...prev, startTime: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kết thúc
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={eventForm.endTime}
                    onChange={(e) =>
                      setEventForm((prev) => ({ ...prev, endTime: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-umt-blue text-white rounded-lg text-sm"
                  >
                    Lưu sự kiện
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Danh sách sự kiện
              </h2>
              {isLoadingEvents ? (
                <div className="py-4 text-sm text-gray-500">Đang tải...</div>
              ) : (
                <div className="space-y-3">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm flex justify-between"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">{ev.title}</div>
                        <div className="text-gray-500 text-xs">
                          {ev.start_time &&
                            new Date(ev.start_time).toLocaleString('vi-VN')}{' '}
                          -{' '}
                          {ev.end_time && new Date(ev.end_time).toLocaleString('vi-VN')}
                        </div>
                      </div>
                      <span className="text-xs uppercase px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                        {ev.status}
                      </span>
                    </div>
                  ))}
                  {events.length === 0 && (
                    <div className="text-sm text-gray-500">
                      Chưa có sự kiện nào.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      case 'news':
      case 'community': {
        const isNews = activeMenu === 'news';
        const posts = isNews ? newsPosts : communityPosts;
        const isLoading = isNews ? isLoadingNews : isLoadingCommunity;

        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Tạo {isNews ? 'tin tức' : 'bài cộng đồng'} mới
              </h2>
              {postMessage && (
                <div className="mb-4 text-sm text-umt-blue">{postMessage}</div>
              )}
              <form
                className="space-y-4"
                onSubmit={handleCreatePost}
              >
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    Loại
                  </label>
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                    value={postForm.category}
                    onChange={(e) =>
                      setPostForm((prev) => ({ ...prev, category: e.target.value }))
                    }
                  >
                    <option value="news">Tin tức</option>
                    <option value="community">Cộng đồng</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={postForm.title}
                    onChange={(e) =>
                      setPostForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    rows={4}
                    value={postForm.content}
                    onChange={(e) =>
                      setPostForm((prev) => ({ ...prev, content: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-umt-blue text-white rounded-lg text-sm"
                  >
                    Lưu bài viết
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Danh sách {isNews ? 'tin tức' : 'bài cộng đồng'}
              </h2>
              {isLoading ? (
                <div className="py-4 text-sm text-gray-500">Đang tải...</div>
              ) : (
                <div className="space-y-3">
                  {posts.map((p) => (
                    <div key={p.id} className="border border-gray-200 rounded-lg px-4 py-3 text-sm">
                      <div className="font-semibold text-gray-900">{p.title}</div>
                      <div className="text-xs text-gray-500 mb-1">
                        {p.created_at &&
                          new Date(p.created_at).toLocaleString('vi-VN')}
                      </div>
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {p.content}
                      </p>
                    </div>
                  ))}
                  {posts.length === 0 && (
                    <div className="text-sm text-gray-500">
                      Chưa có bài viết nào.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      }
      case 'pitches':
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Danh sách sân
              </h2>
              {pitchError && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg">
                  {pitchError}
                </div>
              )}
              {isLoadingPitches ? (
                <div className="py-4 text-sm text-gray-500">Đang tải...</div>
              ) : (
                <div className="space-y-2">
                  {pitches.map((p) => (
                    <div
                      key={p.pitch_id}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">
                          {p.pitch_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {p.venue_name} • {p.pitch_type} • {p.surface_type}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            p.status === 'available'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {p.status}
                        </span>
                        <button
                          type="button"
                          className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-700"
                          onClick={() =>
                            handleUpdatePitchStatus(
                              p.pitch_id,
                              p.status === 'available' ? 'unavailable' : 'available',
                            )
                          }
                        >
                          Chuyển trạng thái
                        </button>
                        <button
                          type="button"
                          className="text-xs px-3 py-1 rounded-full border border-umt-blue text-umt-blue"
                          onClick={() => setSelectedPitchForSlot(p)}
                        >
                          Thêm khung giờ
                        </button>
                      </div>
                    </div>
                  ))}
                  {pitches.length === 0 && (
                    <div className="text-sm text-gray-500">
                      Chưa có sân nào (hoặc dữ liệu chưa được seed).
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Thêm khung giờ cho sân
              </h2>
              {selectedPitchForSlot ? (
                <div className="mb-3 text-sm text-gray-700">
                  Đang thêm cho:{' '}
                  <span className="font-semibold">
                    {selectedPitchForSlot.pitch_name}
                  </span>
                </div>
              ) : (
                <div className="mb-3 text-sm text-gray-500">
                  Chọn một sân ở danh sách trên để thêm khung giờ.
                </div>
              )}
              {timeslotMessage && (
                <div className="mb-3 text-sm text-umt-blue">{timeslotMessage}</div>
              )}
              <form
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
                onSubmit={handleCreateTimeslot}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={timeslotForm.dayOfWeek}
                    onChange={(e) =>
                      setTimeslotForm((prev) => ({
                        ...prev,
                        dayOfWeek: e.target.value,
                      }))
                    }
                  >
                    <option value="weekday">Ngày thường</option>
                    <option value="weekend">Cuối tuần</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bắt đầu
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={timeslotForm.startTime}
                    onChange={(e) =>
                      setTimeslotForm((prev) => ({
                        ...prev,
                        startTime: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kết thúc
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={timeslotForm.endTime}
                    onChange={(e) =>
                      setTimeslotForm((prev) => ({
                        ...prev,
                        endTime: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Giá (VND)
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={timeslotForm.price}
                    onChange={(e) =>
                      setTimeslotForm((prev) => ({
                        ...prev,
                        price: Number(e.target.value),
                      }))
                    }
                    required
                  />
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-umt-blue text-white rounded-lg text-sm"
                  >
                    Lưu khung giờ
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-sm text-gray-600">
            Khu vực <span className="font-semibold">{menuItems.find(m => m.id === activeMenu)?.label}</span>{' '}
            sẽ hiển thị chi tiết quản trị (danh sách, bộ lọc, biểu đồ...) theo nhu cầu sau này.
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar trái */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 border-b border-gray-200 flex items-center px-6">
          <span className="text-lg font-bold text-umt-blue">UMT Admin</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                activeMenu === item.id
                  ? 'bg-umt-blue text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
          © {new Date().getFullYear()} UMT Sport Hub
        </div>
      </aside>

      {/* Khu nội dung chính */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Bảng điều khiển quản trị
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="text-sm border border-gray-300 rounded-full pl-3 pr-8 py-1 focus:outline-none focus:ring-1 focus:ring-umt-blue focus:border-umt-blue"
              />
              <span className="absolute right-2 top-1.5 text-gray-400 text-xs">⌕</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 text-xs text-gray-600">
              🔔
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-umt-blue text-white flex items-center justify-center text-sm">
                A
              </div>
              <div className="text-xs">
                <div className="font-semibold text-gray-900">Admin</div>
                <div className="text-gray-500">Quản trị viên</div>
              </div>
            </div>
          </div>
        </header>

        {/* Nội dung */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;


