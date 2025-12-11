import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggle} />
      <main>
        <Dashboard isDark={isDark} />
      </main>
    </div>
  );
}

export default App;