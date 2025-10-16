import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-umt-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* You need to add the UMT logo to your assets folder */}
            {/* <img className="h-8" src={umtLogo} alt="UMT Logo" /> */}
            <span className="font-bold text-xl">UMT</span>
            <span className="text-sm ml-2">TRƯỜNG ĐẠI HỌC QUẢN LÝ VÀ CÔNG NGHỆ<br/>THÀNH PHỐ HỒ CHÍ MINH</span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="#" className="bg-umt-yellow text-umt-blue font-bold px-4 py-2 text-sm">TƯ VẤN NGAY</a>
            <a href="#" className="bg-umt-red text-white font-bold px-4 py-2 text-sm">ĐĂNG KÝ XÉT TUYỂN</a>
            <button className="ml-4 text-white flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="ml-1 hidden md:inline">Tìm kiếm</span>
            </button>
            <button className="ml-4 text-white flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              <span className="ml-1 hidden md:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
