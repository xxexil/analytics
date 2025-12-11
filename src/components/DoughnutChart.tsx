import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  title: string;
  isDark: boolean;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ title, isDark }) => {
  const data = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          '#3b82f6',
          '#10b981',
          '#f59e0b',
        ],
        borderColor: [
          '#2563eb',
          '#059669',
          '#d97706',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: isDark ? '#e5e7eb' : '#374151',
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="card animate-slide-up">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;