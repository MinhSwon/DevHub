import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* This is where the SPORTS HUB logo/text will go, as part of the hero image background */}
          <div className="flex-1">
             {/* Intentionally left blank for the hero background to show through */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Tổng quan</Link>
              <Link to="/booking" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Đặt sân</Link>
              <Link to="/facilities" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Cơ sở vật chất</Link>
              <Link to="/events" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Sự kiện</Link>
              <Link to="/news" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Tin tức</Link>
              <Link to="/about" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Giới thiệu</Link>
              <Link to="/contact" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Liên hệ</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Notifications />
              <Link to="/dashboard" className="text-gray-700 hover:text-umt-red px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-umt-red border border-gray-300 hover:border-umt-red px-4 py-2 rounded-md text-sm font-medium">Đăng nhập</Link>
                  <Link to="/register" className="bg-umt-red text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">Đăng ký</Link>
                </>
              ) : (
                <>
                  <span className="text-gray-700 text-sm">{user?.name || user?.email}</span>
                  <button onClick={logout} className="text-gray-700 hover:text-umt-red border border-gray-300 hover:border-umt-red px-4 py-2 rounded-md text-sm font-medium">Đăng xuất</button>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tổng quan</Link>
            <Link to="/booking" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Đặt sân</Link>
            <Link to="/facilities" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cơ sở vật chất</Link>
            <Link to="/events" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sự kiện</Link>
            <Link to="/news" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tin tức</Link>
            <Link to="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Giới thiệu</Link>
            <Link to="/contact" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Liên hệ</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="block w-full text-left text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">Đăng nhập</Link>
                  <Link to="/register" className="block w-full text-left bg-umt-red text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium">Đăng ký</Link>
                </>
              ) : (
                <>
                  <span className="block px-3 py-2 text-gray-700 text-base">{user?.name || user?.email}</span>
                  <button onClick={logout} className="block w-full text-left text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">Đăng xuất</button>
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
