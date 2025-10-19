import React from 'react';
import Logo from '../components/Logo';
import SimpleLogo from '../components/SimpleLogo';

const LogoDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-umt-light-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-umt-blue mb-4">🎨 Logo UMT Sports Hub</h1>
          <p className="text-xl text-gray-600">Thiết kế logo theo yêu cầu với màu xanh, đỏ, trắng và cyan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo chính */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Logo Chính</h3>
            <div className="flex justify-center mb-4">
              <Logo className="w-32 h-20" size="default" />
            </div>
            <p className="text-gray-600 text-sm">
              Logo đầy đủ với nền xanh đậm, họa tiết lưới, chữ UMT màu trắng, 
              SPORTS màu cyan, HUB màu trắng căn phải
            </p>
          </div>

          {/* Logo đơn giản */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Logo Đơn Giản</h3>
            <div className="flex justify-center mb-4">
              <SimpleLogo className="w-20 h-20" size="large" />
            </div>
            <p className="text-gray-600 text-sm">
              Phiên bản compact cho favicon và các trường hợp cần thiết
            </p>
          </div>

          {/* Các kích thước */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Các Kích Thước</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600 w-16">Small:</span>
                <Logo className="w-16 h-10" size="small" />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600 w-16">Default:</span>
                <Logo className="w-20 h-12" size="default" />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600 w-16">Large:</span>
                <Logo className="w-24 h-16" size="large" />
              </div>
            </div>
          </div>
        </div>

        {/* Mô tả chi tiết */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Chi Tiết Thiết Kế</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎨 Màu Sắc</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="inline-block w-4 h-4 bg-umt-blue rounded mr-2"></span> Nền: Xanh dương đậm (#0057B7)</li>
                <li><span className="inline-block w-4 h-4 bg-white border border-gray-300 rounded mr-2"></span> UMT: Trắng</li>
                <li><span className="inline-block w-4 h-4 bg-cyan-400 rounded mr-2"></span> SPORTS: Cyan (#22D3EE)</li>
                <li><span className="inline-block w-4 h-4 bg-white border border-gray-300 rounded mr-2"></span> HUB: Trắng</li>
                <li><span className="inline-block w-4 h-4 bg-umt-red rounded mr-2"></span> LL Symbol: Đỏ (#DA291C)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔧 Tính Năng</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Họa tiết lưới hình học mờ nhạt</li>
                <li>✅ Dấu cộng (+) sau chữ UMT</li>
                <li>✅ Biểu tượng LL màu đỏ/xanh</li>
                <li>✅ Responsive với nhiều kích thước</li>
                <li>✅ Gradient nền từ xanh đậm đến xanh nhạt</li>
                <li>✅ Bo góc mềm mại</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code example */}
        <div className="mt-8 bg-gray-900 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-white mb-4">💻 Cách Sử Dụng</h3>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`import Logo from './components/Logo';
import SimpleLogo from './components/SimpleLogo';

// Logo chính
<Logo className="w-32 h-20" size="default" />

// Logo đơn giản
<SimpleLogo className="w-20 h-20" size="large" />

// Các kích thước có sẵn: small, default, large, xl`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LogoDemo;
