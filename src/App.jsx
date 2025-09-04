import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div className="ml-16 md:ml-64 flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
