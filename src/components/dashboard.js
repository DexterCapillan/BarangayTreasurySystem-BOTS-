import React, { useState } from 'react';
import Rocad from './rocad';
import Socar from './socar';
import Roaao from './roaao';

function Dashboard() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('rocad');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rocad':
        return (
          <div className="p-4">
            <Rocad />
          </div>
        );
      case 'socar':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Socar</h2>
            <Socar />
          </div>
        );
      case 'roaao':  
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Roaao</h2>
            <Roaao />
          </div>
        );
      default:
        return <Rocad />;
    }
  };

  return (
    <div className="space-y-8 px-6 py-4">
      {/* Header Section */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Barangay Treasury System</h1>
      </header>

      {/* Tab navigation */}
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => setActiveTab('rocad')}
          className={`py-2 px-6 rounded-lg transition-all duration-200 ease-in-out ${activeTab === 'rocad' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-600 hover:bg-blue-100'}`}
        >
          Rocad
        </button>
        <button
          onClick={() => setActiveTab('socar')}
          className={`py-2 px-6 rounded-lg transition-all duration-200 ease-in-out ${activeTab === 'socar' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-600 hover:bg-blue-100'}`}
        >
          Socar
        </button>
        <button
          onClick={() => setActiveTab('roaao')}
          className={`py-2 px-6 rounded-lg transition-all duration-200 ease-in-out ${activeTab === 'roaao' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-600 hover:bg-blue-100'}`}
        >
          Roaao
        </button>
      </div>

      {/* Tab content */}
      <div className="border rounded-lg shadow-md p-6 bg-white">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Dashboard;
