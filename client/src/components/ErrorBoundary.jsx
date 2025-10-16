import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // Here you would typically log to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onRetry={this.handleRetry}
          fallback={this.props.fallback}
        />
      );
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, errorInfo, onRetry, fallback }) => {
  if (fallback) {
    return fallback;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-error-50 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Đã xảy ra lỗi
          </h2>
          <p className="text-gray-600 mb-6">
            Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={onRetry}
              className="btn-primary w-full"
            >
              Thử lại
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary w-full"
            >
              Tải lại trang
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                Chi tiết lỗi (Development)
              </summary>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                  {error && error.toString()}
                  {errorInfo.componentStack}
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

// Error Page Component
export const ErrorPage = ({ 
  title = "Trang không tồn tại",
  message = "Xin lỗi, trang bạn đang tìm kiếm không tồn tại.",
  statusCode = 404,
  showHomeButton = true 
}) => {
  const getErrorIcon = (code) => {
    switch (code) {
      case 404:
        return (
          <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.5M15 7.291A7.962 7.962 0 0112 6c-2.34 0-4.29 1.009-5.824 2.5"/>
          </svg>
        );
      case 500:
        return (
          <svg className="h-16 w-16 text-error-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
          </svg>
        );
      default:
        return (
          <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          {getErrorIcon(statusCode)}
        </div>
        
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            {statusCode}
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">
            {message}
          </p>
        </div>
        
        <div className="space-y-4">
          {showHomeButton && (
            <a
              href="/"
              className="btn-primary w-full inline-block"
            >
              Về trang chủ
            </a>
          )}
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

// Network Error Component
export const NetworkError = ({ onRetry, message = "Không thể kết nối đến máy chủ" }) => (
  <div className="card p-6 text-center">
    <div className="mx-auto h-12 w-12 bg-warning-50 rounded-full flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Lỗi kết nối
    </h3>
    <p className="text-gray-600 mb-4">
      {message}
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="btn-primary"
      >
        Thử lại
      </button>
    )}
  </div>
);

// Form Error Component
export const FormError = ({ errors, field }) => {
  if (!errors || !errors[field]) return null;
  
  return (
    <div className="form-error">
      {errors[field]}
    </div>
  );
};

// Alert Error Component
export const AlertError = ({ message, onClose, className = "" }) => (
  <div className={`alert alert-error ${className}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <svg className="h-5 w-5 text-error-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span className="font-medium">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-error-600 hover:text-error-800"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  </div>
);

// Toast Error Component
export const ToastError = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-error-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-in-right">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span className="font-medium">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default ErrorBoundary;
