import React from 'react';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';

const HeaderDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-umt-light-blue">
      {/* Header Components */}
      <TopHeader />
      <Navbar />
      
      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-umt-blue mb-4">🎨 Header Layout Mới</h1>
          <p className="text-xl text-gray-600">Giao diện header đã được sắp xếp gọn gàng và cập nhật logo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Header Info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">📋 Top Header</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ <strong>Chiều cao:</strong> Giảm từ 48px xuống 40px (h-10)</li>
              <li>✅ <strong>Logo:</strong> Sử dụng SimpleLogo nhỏ gọn</li>
              <li>✅ <strong>Thông tin:</strong> Hotline và email chỉ hiện trên desktop</li>
              <li>✅ <strong>Ưu đãi:</strong> Button "UMT - Giảm 20%" gọn hơn</li>
              <li>✅ <strong>Responsive:</strong> Ẩn text mô tả trên mobile</li>
            </ul>
          </div>

          {/* Navbar Info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">🧭 Navigation Bar</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✅ <strong>Chiều cao:</strong> Giảm từ 80px xuống 64px (h-16)</li>
              <li>✅ <strong>Logo:</strong> Logo chính với kích thước tối ưu</li>
              <li>✅ <strong>Menu:</strong> Text nhỏ hơn, padding compact</li>
              <li>✅ <strong>Spacing:</strong> Giảm khoảng cách giữa các elements</li>
              <li>✅ <strong>Mobile:</strong> Icon menu nhỏ hơn</li>
            </ul>
          </div>
        </div>

        {/* Logo Comparison */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">🔄 So Sánh Logo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-700 mb-4">Logo Cũ</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-umt-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">UMT</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Logo đơn giản chỉ có chữ UMT</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-700 mb-4">Logo Mới</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-20 h-12 bg-gradient-to-br from-umt-blue via-blue-700 to-blue-900 rounded-lg flex items-center justify-center mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '8px 8px'
                    }}></div>
                  </div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-xs font-bold">UMT</div>
                    <div className="text-cyan-400 font-black text-xs">SPORTS</div>
                    <div className="text-white font-black text-xs">HUB</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Logo đầy đủ với họa tiết lưới và màu sắc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 bg-gradient-to-r from-umt-blue to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">✨ Cải Tiến Chính</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📏</div>
              <h4 className="font-semibold mb-2">Compact Layout</h4>
              <p className="text-sm opacity-90">Giảm chiều cao header để tiết kiệm không gian</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2">Logo Mới</h4>
              <p className="text-sm opacity-90">Thiết kế logo chuyên nghiệp với họa tiết lưới</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Responsive</h4>
              <p className="text-sm opacity-90">Tối ưu hiển thị trên mọi thiết bị</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo;
