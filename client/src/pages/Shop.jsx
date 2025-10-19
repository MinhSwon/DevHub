import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🛍️' },
    { id: 'clothing', name: 'Trang phục thể thao', icon: '👕' },
    { id: 'equipment', name: 'Dụng cụ thể thao', icon: '⚽' },
    { id: 'nutrition', name: 'Nước uống & dinh dưỡng', icon: '🥤' },
    { id: 'accessories', name: 'Phụ kiện', icon: '🎒' }
  ];

  const products = [
    {
      id: 1,
      name: 'Áo đấu bóng đá UMT',
      category: 'clothing',
      price: 250000,
      originalPrice: 300000,
      image: 'https://via.placeholder.com/300x300/0057B7/FFFFFF?text=UMT+Jersey',
      rating: 4.8,
      reviews: 156,
      description: 'Áo đấu chính thức của UMT Sport Hub với chất liệu cao cấp',
      inStock: true,
      discount: 17
    },
    {
      id: 2,
      name: 'Giày đá bóng Adidas',
      category: 'equipment',
      price: 1200000,
      originalPrice: 1500000,
      image: 'https://via.placeholder.com/300x300/DA291C/FFFFFF?text=Football+Boots',
      rating: 4.9,
      reviews: 89,
      description: 'Giày đá bóng chuyên nghiệp với công nghệ tiên tiến',
      inStock: true,
      discount: 20
    },
    {
      id: 3,
      name: 'Vợt cầu lông Yonex',
      category: 'equipment',
      price: 800000,
      originalPrice: 1000000,
      image: 'https://via.placeholder.com/300x300/28A745/FFFFFF?text=Badminton+Racket',
      rating: 4.7,
      reviews: 203,
      description: 'Vợt cầu lông cao cấp cho người chơi chuyên nghiệp',
      inStock: true,
      discount: 20
    },
    {
      id: 4,
      name: 'Nước uống thể thao',
      category: 'nutrition',
      price: 15000,
      originalPrice: 20000,
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Sports+Drink',
      rating: 4.5,
      reviews: 67,
      description: 'Nước uống thể thao bổ sung năng lượng',
      inStock: true,
      discount: 25
    },
    {
      id: 5,
      name: 'Túi thể thao Nike',
      category: 'accessories',
      price: 350000,
      originalPrice: 450000,
      image: 'https://via.placeholder.com/300x300/6F42C1/FFFFFF?text=Sports+Bag',
      rating: 4.6,
      reviews: 134,
      description: 'Túi thể thao đa năng với nhiều ngăn tiện dụng',
      inStock: true,
      discount: 22
    },
    {
      id: 6,
      name: 'Quần short thể thao',
      category: 'clothing',
      price: 180000,
      originalPrice: 220000,
      image: 'https://via.placeholder.com/300x300/20C997/FFFFFF?text=Sports+Shorts',
      rating: 4.4,
      reviews: 98,
      description: 'Quần short thể thao thoáng mát, co giãn tốt',
      inStock: true,
      discount: 18
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDiscountAmount = () => {
    return cart.reduce((total, item) => {
      const discount = item.originalPrice - item.price;
      return total + (discount * item.quantity);
    }, 0);
  };

  const getMemberDiscount = () => {
    return getTotalPrice() * 0.2; // 20% discount for UMT members
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
       <div className="bg-gradient-to-r from-ocean-deep via-ocean-dark to-ocean-primary text-white py-16 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">🛒 Cửa Hàng Thể Thao</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Khám phá các sản phẩm thể thao chất lượng cao với giá ưu đãi đặc biệt cho thành viên UMT
            </p>
             <div className="mt-6 bg-coral text-white px-6 py-3 rounded-full inline-block">
              🎓 Thành viên UMT được giảm giá 20% tự động!
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Danh mục sản phẩm</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-umt-blue text-white'
                        : 'text-gray-600 hover:bg-umt-light-blue hover:text-umt-blue'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Giỏ hàng</h4>
                  <span className="bg-umt-red text-white text-xs px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                </div>
                <button
                  onClick={() => setShowCart(true)}
                  className="w-full bg-gradient-to-r from-umt-red to-red-600 text-white py-2 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
                >
                  Xem giỏ hàng
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} sản phẩm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-umt-red text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Hết hàng</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-umt-blue transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        {product.rating} ({product.reviews} đánh giá)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-umt-blue">
                          {product.price.toLocaleString('vi-VN')}₫
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {product.originalPrice.toLocaleString('vi-VN')}₫
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                        product.inStock
                          ? 'bg-gradient-to-r from-umt-blue to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? '🛒 Thêm vào giỏ' : 'Hết hàng'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Giỏ hàng của bạn</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500">Giỏ hàng trống</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.price.toLocaleString('vi-VN')}₫</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{getTotalPrice().toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Tiết kiệm:</span>
                    <span>-{getDiscountAmount().toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-umt-blue font-bold">
                    <span>Giảm giá thành viên UMT (20%):</span>
                    <span>-{getMemberDiscount().toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-umt-red border-t pt-2">
                    <span>Tổng cộng:</span>
                    <span>{(getTotalPrice() - getMemberDiscount()).toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowCart(false)}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Tiếp tục mua sắm
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-umt-red to-red-600 text-white py-3 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200">
                    💳 Thanh toán
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
