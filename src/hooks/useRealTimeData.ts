import { useState, useEffect } from 'react';
import { DashboardData } from '../types';

export const useRealTimeData = () => {
  const [data, setData] = useState<DashboardData>({
    revenue: 45231,
    users: 2350,
    orders: 1205,
    growth: 12.5
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500,
        users: prev.users + Math.floor(Math.random() * 20) - 10,
        orders: prev.orders + Math.floor(Math.random() * 10) - 5,
        growth: prev.growth + (Math.random() * 2 - 1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
};