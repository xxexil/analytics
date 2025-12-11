import React from 'react';
import { useRealTimeData } from '../hooks/useRealTimeData';
import { MetricCard as MetricCardType } from '../types';
import MetricCard from './MetricCard';
import LineChart from './LineChart';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

interface DashboardProps {
  isDark: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDark }) => {
  const data = useRealTimeData();

  const metrics: MetricCardType[] = [
    {
      title: 'Total Revenue',
      value: `$${data.revenue.toLocaleString()}`,
      change: data.growth,
      icon: '💰',
      color: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Active Users',
      value: data.users,
      change: 8.2,
      icon: '👥',
      color: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Total Orders',
      value: data.orders,
      change: -2.1,
      icon: '📦',
      color: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      title: 'Growth Rate',
      value: `${data.growth.toFixed(1)}%`,
      change: 5.4,
      icon: '📈',
      color: 'bg-orange-100 dark:bg-orange-900',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.title}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <MetricCard metric={metric} />
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LineChart title="Revenue vs Expenses" isDark={isDark} />
        <BarChart title="Weekly Sales" isDark={isDark} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DoughnutChart title="Traffic Sources" isDark={isDark} />
        </div>
        
        <div className="lg:col-span-2">
          <div className="card animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 minutes ago', icon: '👤' },
                { action: 'Order #1234 completed', time: '5 minutes ago', icon: '✅' },
                { action: 'Payment received', time: '10 minutes ago', icon: '💳' },
                { action: 'New product added', time: '15 minutes ago', icon: '📦' },
                { action: 'System backup completed', time: '1 hour ago', icon: '💾' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-xl">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;