export interface DashboardData {
  revenue: number;
  users: number;
  orders: number;
  growth: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
    tension?: number;
  }[];
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}