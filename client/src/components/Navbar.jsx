import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import Logo from './Logo';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40 border-b-2 border-ocean-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="w-32 h-10" size="default" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-center space-x-1">
              <Link to="/" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">🏠</span>
                <span className="text-xs font-medium">Trang chủ</span>
              </Link>
              <Link to="/booking" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">⚽</span>
                <span className="text-xs font-medium">Đặt sân</span>
              </Link>
              <Link to="/shop" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">🛒</span>
                <span className="text-xs font-medium">Cửa hàng</span>
              </Link>
              <Link to="/facilities" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">🏟️</span>
                <span className="text-xs font-medium">Cơ sở</span>
              </Link>
              <Link to="/events" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">🎉</span>
                <span className="text-xs font-medium">Sự kiện</span>
              </Link>
              <Link to="/news" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">📰</span>
                <span className="text-xs font-medium">Tin tức</span>
              </Link>
              <Link to="/community" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">👥</span>
                <span className="text-xs font-medium">Cộng đồng</span>
              </Link>
              <Link to="/training" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">💪</span>
                <span className="text-xs font-medium">Luyện tập</span>
              </Link>
              <Link to="/teams" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">👥</span>
                <span className="text-xs font-medium">Đội nhóm</span>
              </Link>
              <Link to="/contact" className="nav-link flex flex-col items-center p-3 rounded-xl hover:bg-ocean-pale transition-all duration-300 group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="text-xs font-medium">Liên hệ</span>
              </Link>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Notifications />
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-umt-blue px-3 py-2 rounded-lg border border-gray-300 hover:border-umt-blue transition-all duration-200 text-sm">
                  Đăng nhập
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-umt-red to-red-600 text-white hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                  Đăng ký
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-umt-blue px-3 py-2 rounded-lg hover:bg-umt-light-blue transition-all duration-200 text-sm">
                  👤 {user?.name || user?.email}
                </Link>
                <button onClick={logout} className="text-gray-600 hover:text-umt-red px-3 py-2 rounded-lg border border-gray-300 hover:border-umt-red transition-all duration-200 text-sm">
                  Đăng xuất
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-ocean-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-ocean-medium focus:outline-none focus:ring-2 focus:ring-ocean-primary focus:ring-offset-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              🏠 Trang chủ
            </Link>
            <Link to="/booking" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              ⚽ Đặt sân
            </Link>
            <Link to="/shop" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              🛒 Cửa hàng
            </Link>
            <Link to="/facilities" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              🏟️ Cơ sở vật chất
            </Link>
            <Link to="/events" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              🎉 Sự kiện
            </Link>
            <Link to="/news" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              📰 Tin tức
            </Link>
            <Link to="/community" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              👥 Cộng đồng
            </Link>
            <Link to="/contact" className="text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue block px-3 py-2 rounded-md text-base font-medium">
              📞 Liên hệ
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="block w-full text-left text-gray-700 hover:bg-umt-light-blue hover:text-umt-blue px-3 py-2 rounded-md text-base font-medium">
                    Đăng nhập
                  </Link>
                  <Link to="/register" className="block w-full text-left bg-gradient-to-r from-umt-red to-red-600 text-white hover:from-red-600 hover:to-red-700 px-3 py-2 rounded-md text-base font-medium">
                    Đăng ký
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="block px-3 py-2 text-gray-700 text-base font-medium">
                    👤 {user?.name || user?.email}
                  </Link>
                  <button onClick={logout} className="block w-full text-left text-gray-700 hover:bg-umt-light-red hover:text-umt-red px-3 py-2 rounded-md text-base font-medium">
                    Đăng xuất
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
