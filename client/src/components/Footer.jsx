import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
           <footer className="bg-gradient-to-r from-ocean-deep to-ocean-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {/* Company Info */}
                 <div className="space-y-6">
                   <div className="flex items-center space-x-3">
                     <Logo className="w-16 h-12" size="default" />
                     <div>
                       <h3 className="text-xl font-bold">UMT SPORT HUB</h3>
                       <p className="text-sm text-gray-400">Trải nghiệm thể thao thông minh</p>
                     </div>
                   </div>
            <p className="text-gray-400 leading-relaxed">
              Nền tảng đặt sân thể thao hàng đầu tại Việt Nam, mang đến trải nghiệm nhanh chóng, tiện lợi và chuyên nghiệp cho mọi người yêu thể thao.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-umt-blue transition-colors duration-200">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-umt-blue transition-colors duration-200">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-umt-blue transition-colors duration-200">
                <span className="text-sm">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-umt-blue transition-colors duration-200">
                <span className="text-sm">📺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">🏠</span>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">⚽</span>
                  Đặt sân
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">🛒</span>
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">🏟️</span>
                  Cơ sở vật chất
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">🎉</span>
                  Sự kiện
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-umt-blue transition-colors duration-200 flex items-center">
                  <span className="mr-2">📰</span>
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-umt-red transition-colors duration-200 flex items-center">
                  <span className="mr-2">📞</span>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-umt-red transition-colors duration-200 flex items-center">
                  <span className="mr-2">❓</span>
                  Trợ giúp
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-umt-red transition-colors duration-200 flex items-center">
                  <span className="mr-2">💬</span>
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-umt-red transition-colors duration-200 flex items-center">
                  <span className="mr-2">📋</span>
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-umt-red transition-colors duration-200 flex items-center">
                  <span className="mr-2">🔒</span>
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-umt-blue text-lg">📞</span>
                <div>
                  <p className="text-gray-400 text-sm">Hotline</p>
                  <p className="text-white font-semibold">123456</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-umt-blue text-lg">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email hỗ trợ</p>
                  <p className="text-white font-semibold">support@umt.edu.vn</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-umt-blue text-lg">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Địa chỉ</p>
                  <p className="text-white font-semibold">123 Nguyễn Văn B, Quận 7, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-umt-blue text-lg">🕒</span>
                <div>
                  <p className="text-gray-400 text-sm">Giờ hoạt động</p>
                  <p className="text-white font-semibold">06:00 - 22:00 (Hàng ngày)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">🎓 Đăng ký nhận tin</h3>
                <p className="text-blue-100">
                  Nhận thông tin về ưu đãi đặc biệt cho thành viên UMT và tin tức thể thao mới nhất
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-umt-blue text-gray-900 placeholder-gray-500"
                />
                <button className="bg-umt-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} UMT Sport Hub. Tất cả quyền được bảo lưu.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Được phát triển bởi sinh viên UMT với ❤️
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Được bảo mật bởi</span>
                <div className="flex space-x-1">
                  <div className="w-6 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SSL</span>
                  </div>
                  <div className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">256</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
