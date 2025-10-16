import React from 'react';

const Loading = ({ 
  type = 'spinner', 
  size = 'md', 
  text = 'Đang tải...', 
  overlay = false,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const Spinner = () => (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-600 ${sizeClasses[size]}`}></div>
  );

  const Dots = () => (
    <div className="flex space-x-1">
      <div className={`w-2 h-2 bg-primary-600 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
      <div className={`w-2 h-2 bg-primary-600 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
      <div className={`w-2 h-2 bg-primary-600 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );

  const Pulse = () => (
    <div className={`bg-primary-600 rounded-full animate-pulse ${sizeClasses[size]}`}></div>
  );

  const Skeleton = ({ lines = 3 }) => (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="skeleton-text" style={{ width: `${100 - index * 10}%` }}></div>
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <Dots />;
      case 'pulse':
        return <Pulse />;
      case 'skeleton':
        return <Skeleton />;
      default:
        return <Spinner />;
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoader()}
      {text && (
        <p className={`text-gray-600 font-medium ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl p-8">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Skeleton Components for different content types
export const SkeletonCard = () => (
  <div className="card p-6 space-y-4">
    <div className="flex items-center space-x-4">
      <div className="skeleton-avatar"></div>
      <div className="space-y-2 flex-1">
        <div className="skeleton-text w-3/4"></div>
        <div className="skeleton-text w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="skeleton-text"></div>
      <div className="skeleton-text w-5/6"></div>
    </div>
    <div className="flex space-x-2">
      <div className="skeleton-button"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
);

export const SkeletonTable = ({ rows = 5, columns = 4 }) => (
  <div className="card overflow-hidden">
    <div className="p-6 border-b border-gray-200">
      <div className="skeleton-text w-1/4"></div>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="skeleton-text flex-1"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SkeletonList = ({ items = 5 }) => (
  <div className="space-y-4">
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="card p-4">
        <div className="flex items-center space-x-4">
          <div className="skeleton-avatar"></div>
          <div className="space-y-2 flex-1">
            <div className="skeleton-text w-2/3"></div>
            <div className="skeleton-text w-1/3"></div>
          </div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonChart = () => (
  <div className="chart-container">
    <div className="flex items-center justify-between mb-6">
      <div className="skeleton-text w-1/4"></div>
      <div className="skeleton-button"></div>
    </div>
    <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-center space-x-2 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-t"
          style={{
            width: '20px',
            height: `${Math.random() * 100 + 50}px`
          }}
        ></div>
      ))}
    </div>
  </div>
);

// Page Loading Component
export const PageLoading = ({ message = 'Đang tải trang...' }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-primary-600 w-full h-full"></div>
      </div>
      <p className="text-lg font-medium text-gray-600">{message}</p>
    </div>
  </div>
);

// Inline Loading Component
export const InlineLoading = ({ text = 'Đang xử lý...' }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-600">
    <div className="w-4 h-4 animate-spin rounded-full border-2 border-gray-300 border-t-primary-600"></div>
    <span>{text}</span>
  </div>
);

// Button Loading State
export const ButtonLoading = ({ children, loading, ...props }) => (
  <button
    {...props}
    disabled={loading}
    className={`${props.className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
  >
    {loading ? (
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        <span>Đang xử lý...</span>
      </div>
    ) : (
      children
    )}
  </button>
);

// Table Loading State
export const TableLoading = ({ columns = 4, rows = 5 }) => (
  <div className="card overflow-hidden">
    <div className="p-6 border-b border-gray-200">
      <div className="skeleton-text w-1/4"></div>
    </div>
    <div className="divide-y divide-gray-200">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="p-6">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="skeleton-text flex-1"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Card Grid Loading
export const CardGridLoading = ({ cards = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: cards }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);

export default Loading;
