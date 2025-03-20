// src/Dashboard.js
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
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Roaao</h2>  {/* Updated to Roaao */}
            <Roaao />
          </div>
        );
      default:
        return <Rocad />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Tab navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('rocad')}
          className={`py-2 px-4 rounded ${activeTab === 'rocad' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Rocad
        </button>
        <button
          onClick={() => setActiveTab('socar')}
          className={`py-2 px-4 rounded ${activeTab === 'socar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Socar
        </button>
        <button
          onClick={() => setActiveTab('roaao')}  
          className={`py-2 px-4 rounded ${activeTab === 'roaao' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}  
        >
          Roaao
        </button>
      </div>

      {/* Tab content */}
      <div className="border rounded-lg shadow-md">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Dashboard;
