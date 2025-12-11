import React from 'react';
import { MetricCard as MetricCardType } from '../types';

interface MetricCardProps {
  metric: MetricCardType;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const isPositive = metric.change >= 0;
  
  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {metric.title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {typeof metric.value === 'number' 
              ? metric.value.toLocaleString() 
              : metric.value
            }
          </p>
        </div>
        <div className={`p-3 rounded-full ${metric.color}`}>
          <span className="text-2xl">{metric.icon}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span
          className={`inline-flex items-center text-sm font-medium ${
            isPositive
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {isPositive ? '↗️' : '↘️'}
          {Math.abs(metric.change).toFixed(1)}%
        </span>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          vs last month
        </span>
      </div>
    </div>
  );
};

export default MetricCard;