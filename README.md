# Modern Dashboard Interface

A responsive, interactive dashboard built with React, TypeScript, Chart.js, and Tailwind CSS featuring real-time data visualization, dark/light mode toggle, and smooth animations.

## Features

- 📊 **Interactive Charts**: Line, Bar, and Doughnut charts with Chart.js
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent preferences
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Real-time Updates**: Live data simulation with smooth transitions
- 🎨 **Modern UI**: Clean, professional interface with smooth animations
- 📈 **Metric Cards**: Key performance indicators with trend indicators

## Tech Stack

- **React 18** with TypeScript
- **Chart.js** with react-chartjs-2 for data visualization
- **Tailwind CSS** for styling and responsive design
- **Custom Hooks** for theme management and real-time data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the dashboard

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard layout
│   ├── Header.tsx       # Navigation header
│   ├── MetricCard.tsx   # KPI metric cards
│   ├── LineChart.tsx    # Line chart component
│   ├── BarChart.tsx     # Bar chart component
│   ├── DoughnutChart.tsx # Doughnut chart component
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Theme management
│   └── useRealTimeData.ts # Real-time data simulation
├── types/               # TypeScript type definitions
└── App.tsx             # Main application component
```

## Customization

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Charts**: Update chart data and styling in respective chart components
- **Animations**: Customize animations in the Tailwind config and CSS
- **Data**: Replace the simulated data with real API calls in `useRealTimeData.ts`

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App