// src/components/UpdateDashboard.js

import React, { useState } from 'react';

function UpdateDashboard() {
  // If you want to use setUpdates for state management
  const [updates, setUpdates] = useState([]);

  // Sample function to update the state
  const fetchUpdates = () => {
    setUpdates(['New update 1', 'New update 2', 'New update 3']);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
      Dashboard Updates
      </h2>
      <button
        onClick={fetchUpdates}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Load Updates
      </button>

      <div className="mt-4">
        {updates.length > 0 ? (
          <ul>
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        ) : (
          <p>No updates available.</p>
        )}
      </div>
    </div>
  );
}

export default UpdateDashboard;
