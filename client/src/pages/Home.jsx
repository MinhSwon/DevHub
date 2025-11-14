import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const stats = useMemo(
    () => [
      { id: 'pickleball', label: 'Sân Pickleball', value: '07', sub: 'Tiêu chuẩn thi đấu quốc tế' },
      { id: 'football', label: 'Sân bóng đá', value: '15', sub: '5 người • 7 người • 11 người' },
      { id: 'indoor', label: 'Sân trong nhà', value: '04', sub: 'Bóng rổ • Bóng chuyền' },
      { id: 'bookings', label: 'Ca đặt mỗi tháng', value: '1.500+', sub: 'Sinh viên & cư dân Cát Lái' },
    ],
    [],
  );

  const featureHighlights = useMemo(
    () => [
      {
        icon: '⚽',
        title: 'Đặt sân thông minh',
        description:
          'Xem lịch trống theo thời gian thực và đặt sân Pickleball/Bóng đá chỉ trong 3 bước.',
        cta: { label: 'Đặt sân', to: '/booking' },
      },
      {
        icon: '👤',
        title: 'Tài khoản UMT & cư dân',
        description:
          'Đăng nhập nhanh bằng email UMT hoặc tài khoản cư dân Cát Lái, đồng bộ lịch cá nhân.',
        cta: { label: 'Đăng ký', to: '/register' },
      },
      {
        icon: '🎓',
        title: 'Ưu đãi thành viên',
        description:
          'Giảm 20% mọi khung giờ Pickleball cho sinh viên UMT, chương trình thành viên thân thiết.',
        cta: { label: 'Tìm hiểu ưu đãi', to: '/about' },
      },
    ],
    [],
  );

  const bookingSteps = useMemo(
    () => [
      {
        icon: '1️⃣',
        title: 'Chọn môn & sân',
        description: 'Bộ lọc thông minh giúp bạn tìm được sân phù hợp trong vài giây.',
      },
      {
        icon: '2️⃣',
        title: 'Chọn khung giờ',
        description: 'Lịch trực quan, cập nhật realtime theo từng khung giờ 30 phút.',
      },
      {
        icon: '3️⃣',
        title: 'Xác nhận & thanh toán',
        description: 'Nhận thông báo ngay và quản lý lịch trong dashboard cá nhân.',
      },
    ],
    [],
  );

  const featuredSlots = useMemo(
    () => [
      { court: 'Pickleball 01', sport: 'Pickleball', date: '13/11', time: '17:00 - 18:30', slots: '3 khung giờ trống', price: '150.000đ' },
      { court: 'Pickleball 05', sport: 'Pickleball', date: '13/11', time: '19:00 - 21:00', slots: '2 khung giờ trống', price: '170.000đ' },
      { court: 'Sân bóng 5 người B3', sport: 'Bóng đá 5 người', date: '14/11', time: '18:00 - 20:00', slots: '4 khung giờ trống', price: '320.000đ' },
      { court: 'Sân bóng 7 người A', sport: 'Bóng đá 7 người', date: '15/11', time: '19:00 - 21:00', slots: '2 khung giờ trống', price: '420.000đ' },
      { court: 'Sân 11 người chính', sport: 'Bóng đá 11 người', date: '16/11', time: '06:00 - 08:00', slots: '3 khung giờ trống', price: '950.000đ' },
      { court: 'Arena Bóng rổ', sport: 'Bóng rổ', date: '16/11', time: '20:00 - 22:00', slots: '1 khung giờ trống', price: '280.000đ' },
      { court: 'Hall Bóng chuyền 02', sport: 'Bóng chuyền', date: '17/11', time: '17:00 - 19:00', slots: '2 khung giờ trống', price: '220.000đ' },
    ],
    [],
  );

  const facilityOverview = useMemo(
    () => [
      {
        id: 'pickleball',
        icon: '🏓',
        title: '7 sân Pickleball',
        detail: 'Chuẩn acrylic ITF, chống trơn trượt, hệ thống đèn LED đạt chuẩn thi đấu ban đêm.',
      },
      {
        id: 'football-5',
        icon: '⚽',
        title: '11 sân bóng đá 5 người',
        detail: 'Cỏ nhân tạo thế hệ mới, chia cụm thuận tiện cho câu lạc bộ và các lớp học ngoại khóa.',
      },
      {
        id: 'football-7',
        icon: '🥅',
        title: '3 sân bóng đá 7 người',
        detail: 'Kích thước tiêu chuẩn, có khán đài mini và khu vực nghỉ ngơi dành cho đội bóng.',
      },
      {
        id: 'football-11',
        icon: '🏟️',
        title: '1 sân bóng đá 11 người',
        detail: 'Sân trung tâm với mặt cỏ đạt chuẩn FIFA Quality, hệ thống VAR nội bộ cho giải đấu lớn.',
      },
      {
        id: 'basketball',
        icon: '🏀',
        title: '1 sân bóng rổ trong nhà',
        detail: 'Sàn gỗ Maple, bảng rổ điều chỉnh độ cao, tích hợp bảng điểm điện tử.',
      },
      {
        id: 'volleyball',
        icon: '🏐',
        title: '2 sân bóng chuyền',
        detail: 'Mặt sân PU đàn hồi, lưới tiêu chuẩn FIVB, phù hợp cả sân hơi và bóng chuyền truyền thống.',
      },
    ],
    [],
  );

  const membershipBenefits = useMemo(
    () => [
      { icon: '🎯', title: 'Ưu tiên khung giờ vàng', detail: 'Đặt trước 14 ngày cho thành viên UMT.' },
      { icon: '🎁', title: 'Voucher hàng tháng', detail: 'Tặng 02 voucher giảm giá mỗi tháng.' },
      { icon: '🤝', title: 'Gói đội nhóm', detail: 'Giảm 15% khi đặt từ 3 sân trở lên.' },
      { icon: '📊', title: 'Dashboard thông minh', detail: 'Theo dõi lịch sử đặt sân, chi phí và hiệu suất luyện tập.' },
    ],
    [],
  );

  return (
    <div className="bg-gradient-to-b from-ocean-pale via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-primary to-umt-blue opacity-90" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-pickleball-pattern opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/30 text-sm font-semibold tracking-wide uppercase">
                Trung tâm thể thao tiên phong tại Cát Lái
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Đặt nhanh 25 sân đa môn tại UMT Sport Hub trong 60 giây
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl">
                Trung tâm đặt sân Pickleball, bóng đá, bóng rổ, bóng chuyền chuẩn thi đấu dành cho sinh viên UMT và cộng
                đồng Cát Lái với lịch realtime, ưu đãi thành viên và quản lý lịch thông minh.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <button
                  onClick={() => navigate('/booking')}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-ocean-deep font-semibold shadow-lg shadow-white/20 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  ⚡ Đặt sân ngay
                </button>
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 font-semibold transition-all duration-200"
                >
                  👥 Tham gia cộng đồng
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Đối tác chiến lược</p>
                  <p className="mt-2 text-lg font-semibold">UMT University • UMT Pickleball Club</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Trải nghiệm đã kiểm chứng</p>
                  <p className="mt-2 text-lg font-semibold">Hơn 1.200 giờ đặt sân mỗi tháng</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-ocean-deep/30">
                <h3 className="text-lg font-semibold text-white mb-6">Lịch Pickleball hôm nay</h3>
                <div className="space-y-4">
                  {featuredSlots.slice(0, 3).map((slot) => (
                    <div
                      key={`${slot.court}-${slot.time}`}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/10"
                    >
                      <div>
                        <p className="font-semibold text-white">{slot.court}</p>
                        <p className="text-xs text-white/70 uppercase tracking-wide">{slot.sport}</p>
                        <p className="text-sm text-white/70">
                          {slot.date} • {slot.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-emerald-200">{slot.slots}</p>
                        <p className="text-base font-bold text-white">{slot.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => navigate('/booking')}
                    className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    Xem toàn bộ lịch →{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl shadow-ocean-primary/10 border border-ocean-pale px-6 py-6 text-center"
              >
                <div className="text-3xl font-bold text-ocean-deep">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">{item.label}</div>
                <div className="mt-1 text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-white rounded-4xl border border-ocean-pale shadow-xl shadow-ocean-primary/10 p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Danh mục sân thể thao UMT</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Sẵn sàng cho mọi nhu cầu luyện tập và thi đấu: 7 sân Pickleball, 15 sân bóng đá đa quy mô, cùng hệ thống
                sân trong nhà chuẩn quốc tế cho bóng rổ và bóng chuyền.
              </p>
            </div>
            <div className="flex items-center space-x-3 bg-ocean-pale px-4 py-2 rounded-2xl text-ocean-primary font-semibold">
              <span>📅</span>
              <span>Đặt trước tối đa 14 ngày</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {facilityOverview.map((facility) => (
              <div
                key={facility.id}
                className="border border-ocean-pale rounded-3xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white via-white to-ocean-pale/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{facility.icon}</div>
                  <Link to="/booking" className="text-sm text-ocean-primary font-semibold hover:underline">
                    Xem lịch →
                  </Link>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{facility.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">MVP tập trung – tối ưu trải nghiệm cốt lõi</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hoàn thiện hai tính năng quan trọng nhất: quản lý người dùng và hệ thống đặt sân theo thời gian thực.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureHighlights.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 p-8"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <Link
                to={feature.cta.to}
                className="inline-flex items-center text-umt-blue font-semibold hover:underline"
              >
                {feature.cta.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Booking flow */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Luồng đặt sân chuẩn hóa theo 3 bước</h2>
              <p className="mt-4 text-lg text-gray-600">
                Được thiết kế dựa trên phân tích nghiệp vụ, đảm bảo sinh viên và cư dân đặt sân nhanh chóng, tránh
                trùng lịch và nhận thông báo kịp thời.
              </p>
              <div className="mt-8 space-y-6">
                {bookingSteps.map((step) => (
                  <div
                    key={step.title}
                    className="flex items-start space-x-4 bg-ocean-pale/60 border border-ocean-pale rounded-2xl p-5"
                  >
                    <div className="text-2xl">{step.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-white via-ocean-pale/50 to-white border border-ocean-pale rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Lịch Pickleball 7 sân • Tuần này</h3>
              <div className="space-y-4">
                {featuredSlots.map((slot) => (
                  <div
                    key={`${slot.court}-${slot.date}`}
                    className="flex flex-wrap items-center justify-between bg-white border border-ocean-pale rounded-2xl px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{slot.court}</p>
                      <p className="text-xs uppercase tracking-wide text-ocean-primary font-semibold">{slot.sport}</p>
                      <p className="text-sm text-gray-500">
                        {slot.date} • {slot.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-emerald-500 font-medium">{slot.slots}</p>
                      <p className="text-base font-bold text-umt-red">{slot.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => navigate('/booking')}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-umt-red to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200"
                >
                  Xem lịch trống & đặt ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & community */}
      <section className="py-14 bg-gradient-to-b from-white to-ocean-pale/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">UMT Membership – đồng hành cùng thành viên</h2>
              <p className="mt-4 text-lg text-gray-600">
                Tận dụng ưu đãi độc quyền dành cho sinh viên, giảng viên và cư dân Cát Lái để tối ưu chi phí luyện tập.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {membershipBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-white border border-ocean-pale rounded-2xl p-5 shadow-sm">
                    <div className="text-2xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{benefit.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="inline-flex items-center px-6 py-3 bg-ocean-primary text-white rounded-xl font-semibold hover:bg-ocean-medium transition-colors duration-200"
                >
                  Đăng ký thành viên ngay →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-ocean-pale rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lớp học & Sự kiện sắp diễn ra</h3>
              <div className="space-y-4">
                {[
                  { title: 'Pickleball cho người mới', schedule: 'Thứ 3 & Thứ 5 • 17:30 - 19:00', slots: 'Còn 6/20 slot' },
                  { title: 'Giải Pickleball nội bộ UMT', schedule: 'Thứ 7 • 08:00 - 12:00', slots: 'Đăng ký đến 20/11' },
                  { title: 'Workshop chiến thuật Pickleball', schedule: 'Chủ nhật • 15:00 - 17:00', slots: 'Coach: Thầy Minh' },
                ].map((item) => (
                  <div key={item.title} className="border border-ocean-pale rounded-2xl px-5 py-4">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.schedule}</p>
                    <p className="text-sm text-umt-blue font-medium mt-2">{item.slots}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right">
                <Link
                  to="/events"
                  className="text-umt-blue font-semibold hover:underline inline-flex items-center"
                >
                  Xem tất cả sự kiện →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-ocean-deep via-ocean-primary to-umt-blue text-white px-8 py-14 text-center">
            <div className="absolute inset-0 opacity-20 bg-repeat bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4)_0,_rgba(255,255,255,0.1)_1px,_transparent_60px)]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Sẵn sàng khởi động dự án UMT Sport Hub?</h2>
              <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                Bắt đầu với MVP đặt sân và quản lý người dùng, sau đó mở rộng ra lớp học và cộng đồng. Chúng tôi đã chuẩn
                bị toàn bộ lộ trình để bạn triển khai trong 16 tuần.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-ocean-deep font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Xem dashboard demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 font-semibold transition-all duration-200"
                >
                  Kết nối đội triển khai →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;