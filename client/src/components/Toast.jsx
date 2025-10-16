import React, { useState, useEffect } from 'react';

const Toast = ({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose, 
  position = 'top-right',
  showIcon = true 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const getToastStyles = () => {
    const baseStyles = 'fixed z-50 max-w-sm w-full bg-white rounded-lg shadow-xl border border-gray-200 transform transition-all duration-300';
    
    const positionStyles = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };

    const animationStyles = isExiting 
      ? 'opacity-0 scale-95 translate-y-2' 
      : 'opacity-100 scale-100 translate-y-0';

    return `${baseStyles} ${positionStyles[position]} ${animationStyles}`;
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          icon: (
            <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          ),
          iconBg: 'bg-success-50',
          borderColor: 'border-success-200'
        };
      case 'error':
        return {
          icon: (
            <svg className="w-5 h-5 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ),
          iconBg: 'bg-error-50',
          borderColor: 'border-error-200'
        };
      case 'warning':
        return {
          icon: (
            <svg className="w-5 h-5 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0l-4.244 4.243a8 8 0 00-1.732 2.5z"/>
            </svg>
          ),
          iconBg: 'bg-warning-50',
          borderColor: 'border-warning-200'
        };
      default:
        return {
          icon: (
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          ),
          iconBg: 'bg-primary-50',
          borderColor: 'border-primary-200'
        };
    }
  };

  if (!isVisible) return null;

  const typeStyles = getTypeStyles();

  return (
    <div className={getToastStyles()}>
      <div className="flex items-start p-4">
        {showIcon && (
          <div className={`flex-shrink-0 w-8 h-8 ${typeStyles.iconBg} rounded-full flex items-center justify-center mr-3`}>
            {typeStyles.icon}
          </div>
        )}
        
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            {message}
          </p>
        </div>
        
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Toast Container Component
const ToastContainer = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};

// Toast Hook
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      duration: 5000,
      position: 'top-right',
      ...toast
    };
    
    setToasts(prev => [...prev, newToast]);
    
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (message, options = {}) => {
    return addToast({ message, type: 'success', ...options });
  };

  const error = (message, options = {}) => {
    return addToast({ message, type: 'error', ...options });
  };

  const warning = (message, options = {}) => {
    return addToast({ message, type: 'warning', ...options });
  };

  const info = (message, options = {}) => {
    return addToast({ message, type: 'info', ...options });
  };

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
};

// Toast Provider Component
export const ToastProvider = ({ children }) => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
};

export default Toast;
