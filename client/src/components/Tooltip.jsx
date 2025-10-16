import React, { useState, useRef, useEffect } from 'react';

const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  delay = 200,
  disabled = false,
  className = '',
  maxWidth = 200
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const getPositionStyles = () => {
    const { top, left, right, bottom } = tooltipPosition;
    
    switch (position) {
      case 'top':
        return {
          bottom: `${window.innerHeight - top + 8}px`,
          left: `${left + (right - left) / 2}px`,
          transform: 'translateX(-50%)'
        };
      case 'bottom':
        return {
          top: `${bottom + 8}px`,
          left: `${left + (right - left) / 2}px`,
          transform: 'translateX(-50%)'
        };
      case 'left':
        return {
          top: `${top + (bottom - top) / 2}px`,
          right: `${window.innerWidth - left + 8}px`,
          transform: 'translateY(-50%)'
        };
      case 'right':
        return {
          top: `${top + (bottom - top) / 2}px`,
          left: `${right + 8}px`,
          transform: 'translateY(-50%)'
        };
      default:
        return {};
    }
  };

  const getArrowStyles = () => {
    const baseStyles = 'absolute w-2 h-2 bg-gray-900 transform rotate-45';
    
    switch (position) {
      case 'top':
        return `${baseStyles} top-full left-1/2 -translate-x-1/2 -mt-1`;
      case 'bottom':
        return `${baseStyles} bottom-full left-1/2 -translate-x-1/2 -mb-1`;
      case 'left':
        return `${baseStyles} left-full top-1/2 -translate-y-1/2 -ml-1`;
      case 'right':
        return `${baseStyles} right-full top-1/2 -translate-y-1/2 -mr-1`;
      default:
        return baseStyles;
    }
  };

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom
      });
    }
  };

  const showTooltip = () => {
    if (disabled) return;
    
    timeoutRef.current = setTimeout(() => {
      updatePosition();
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      
      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();
      
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!content) return children;

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className={className}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none"
          style={{
            ...getPositionStyles(),
            maxWidth: `${maxWidth}px`
          }}
        >
          <div className="tooltip-arrow" style={{ position: 'absolute' }}></div>
          {content}
        </div>
      )}
    </>
  );
};

// Simple Tooltip Component
export const SimpleTooltip = ({ children, title, ...props }) => (
  <Tooltip content={title} {...props}>
    {children}
  </Tooltip>
);

// Info Tooltip Component
export const InfoTooltip = ({ children, content, ...props }) => (
  <Tooltip 
    content={content} 
    position="top"
    delay={300}
    {...props}
  >
    <div className="inline-flex items-center">
      {children}
      <svg className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
  </Tooltip>
);

// Help Tooltip Component
export const HelpTooltip = ({ children, helpText, ...props }) => (
  <Tooltip 
    content={helpText} 
    position="right"
    delay={100}
    {...props}
  >
    <div className="inline-flex items-center">
      {children}
      <svg className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
  </Tooltip>
);

// Status Tooltip Component
export const StatusTooltip = ({ children, status, message, ...props }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return (
          <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-4 h-4 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0l-4.244 4.243a8 8 0 00-1.732 2.5z"/>
          </svg>
        );
      case 'error':
        return (
          <svg className="w-4 h-4 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        );
    }
  };

  return (
    <Tooltip 
      content={
        <div className="flex items-center space-x-2">
          {getStatusIcon(status)}
          <span>{message}</span>
        </div>
      }
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default Tooltip;
