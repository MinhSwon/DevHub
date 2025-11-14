import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notifications from './Notifications';
import Logo from './Logo';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const location = useLocation();

  const navLinks = useMemo(
    () => [
      { to: '/', label: 'Trang chủ', icon: '🏠' },
      { to: '/booking', label: 'Đặt sân', icon: '⚽' },
      { to: '/training', label: 'Lớp & luyện tập', icon: '🎓' },
      { to: '/events', label: 'Sự kiện', icon: '🎉' },
      { to: '/news', label: 'Tin tức', icon: '📰' },
      { to: '/community', label: 'Cộng đồng', icon: '👥' },
      { to: '/facilities', label: 'Cơ sở vật chất', icon: '🏟️' },
      { to: '/contact', label: 'Liên hệ', icon: '📞' },
    ],
    [],
  );

  const isPathActive = (path) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path));

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
          <div className="hidden lg:flex items-center space-x-3 ml-8">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-200 group ${
                  isPathActive(item.to)
                    ? 'bg-ocean-pale text-ocean-primary font-semibold'
                    : 'text-gray-600 hover:bg-ocean-pale hover:text-ocean-primary'
                }`}
              >
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Notifications />
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-umt-blue px-3 py-2 rounded-lg border border-gray-300 hover:border-umt-blue transition-all duration-200 text-sm"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-umt-red to-red-600 text-white hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                >
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
          <div className="md:hidden flex items-center space-x-3">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-ocean-primary text-white text-sm font-semibold hover:bg-ocean-medium transition-colors duration-200"
            >
              ⚡ Đặt sân
            </Link>
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
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isPathActive(item.to)
                    ? 'bg-umt-light-blue text-ocean-primary'
                    : 'text-gray-700 hover:bg-umt-light-blue hover:text-ocean-primary'
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
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
