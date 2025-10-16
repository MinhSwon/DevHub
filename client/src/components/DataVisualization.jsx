import React, { useState, useEffect } from 'react';

// Simple Chart Component
const SimpleChart = ({ data, type = 'bar', height = 200, color = '#3b82f6' }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className="w-full rounded-t transition-all duration-500 hover:opacity-80"
            style={{
              height: `${(item.value / maxValue) * 100}%`,
              backgroundColor: color,
              minHeight: '4px'
            }}
            title={`${item.label}: ${item.value}`}
          ></div>
          <div className="text-xs text-gray-600 mt-2 text-center">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );

  const renderLineChart = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (item.value / maxValue) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
            className="transition-all duration-500"
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (item.value / maxValue) * 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                fill={color}
                className="transition-all duration-500 hover:r-3"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="chart-container">
      <div className="h-48 p-4">
        {type === 'bar' ? renderBarChart() : renderLineChart()}
      </div>
    </div>
  );
};

// Progress Ring Component
const ProgressRing = ({ 
  value, 
  max = 100, 
  size = 120, 
  strokeWidth = 8, 
  color = '#3b82f6',
  showPercentage = true 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-700">
            {Math.round((value / max) * 100)}%
          </span>
        </div>
      )}
    </div>
  );
};

// Metric Card Component
const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral',
  icon,
  trend,
  format = 'number'
}) => {
  const formatValue = (val) => {
    if (format === 'currency') {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(val);
    }
    if (format === 'percentage') {
      return `${val}%`;
    }
    if (format === 'number' && val >= 1000) {
      return `${(val / 1000).toFixed(1)}K`;
    }
    return val.toString();
  };

  const getChangeColor = (type) => {
    switch (type) {
      case 'positive':
        return 'text-success-600';
      case 'negative':
        return 'text-error-600';
      default:
        return 'text-gray-600';
    }
  };

  const getChangeIcon = (type) => {
    switch (type) {
      case 'positive':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        );
      case 'negative':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-9.2 9.2M7 7v10h10"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="p-2 bg-primary-50 rounded-lg">
              {icon}
            </div>
          )}
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </h3>
        </div>
        {trend && (
          <div className="text-xs text-gray-500">
            {trend}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="metric-value">
            {formatValue(value)}
          </div>
          {change !== undefined && (
            <div className={`flex items-center space-x-1 mt-1 ${getChangeColor(changeType)}`}>
              {getChangeIcon(changeType)}
              <span className="text-sm font-medium">
                {change}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Stats Grid Component
const StatsGrid = ({ data, columns = 4 }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {data.map((item, index) => (
        <MetricCard key={index} {...item} />
      ))}
    </div>
  );
};

// Activity Feed Component
const ActivityFeed = ({ activities, maxItems = 10 }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'booking':
        return (
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
            </svg>
          </div>
        );
      case 'payment':
        return (
          <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
        );
      case 'event':
        return (
          <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21l3-3m0 0l3 3m-3-3v-3"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="card">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.slice(0, maxItems).map((activity, index) => (
          <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              {getActivityIcon(activity.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {activity.time}
                </p>
              </div>
              {activity.status && (
                <span className={`badge ${
                  activity.status === 'success' ? 'badge-success' :
                  activity.status === 'warning' ? 'badge-warning' :
                  activity.status === 'error' ? 'badge-error' :
                  'badge-gray'
                }`}>
                  {activity.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Heatmap Component
const Heatmap = ({ data, title, colorScale = ['#f3f4f6', '#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8'] }) => {
  const maxValue = Math.max(...data.flat().map(item => item.value));
  
  const getColor = (value) => {
    const intensity = value / maxValue;
    const index = Math.floor(intensity * (colorScale.length - 1));
    return colorScale[index];
  };

  return (
    <div className="chart-container">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="grid gap-1">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="w-4 h-4 rounded-sm cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all duration-200"
                style={{ backgroundColor: getColor(cell.value) }}
                title={`${cell.label}: ${cell.value}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Donut Chart Component
const DonutChart = ({ data, size = 200, strokeWidth = 20 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  let cumulativePercentage = 0;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const strokeDasharray = circumference;
          const strokeDashoffset = circumference - (percentage / 100) * circumference;
          const rotation = (cumulativePercentage / 100) * 360;
          
          cumulativePercentage += percentage;
          
          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={item.color}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: `${size / 2}px ${size / 2}px`
              }}
              className="transition-all duration-500"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{total}</div>
          <div className="text-sm text-gray-500">Tổng</div>
        </div>
      </div>
    </div>
  );
};

// Export all components
export {
  SimpleChart,
  ProgressRing,
  MetricCard,
  StatsGrid,
  ActivityFeed,
  Heatmap,
  DonutChart
};

// Main DataVisualization component
const DataVisualization = ({ type, ...props }) => {
  switch (type) {
    case 'chart':
      return <SimpleChart {...props} />;
    case 'progress':
      return <ProgressRing {...props} />;
    case 'metric':
      return <MetricCard {...props} />;
    case 'stats':
      return <StatsGrid {...props} />;
    case 'activity':
      return <ActivityFeed {...props} />;
    case 'heatmap':
      return <Heatmap {...props} />;
    case 'donut':
      return <DonutChart {...props} />;
    default:
      return <SimpleChart {...props} />;
  }
};

export default DataVisualization;
