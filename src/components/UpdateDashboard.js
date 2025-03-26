// src/components/UpdateDashboard.js

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function UpdateDashboard() {
  const [updates, ] = useState([
    { name: "January", updates: 10 },
    { name: "February", updates: 15 },
    { name: "March", updates: 7 },
    { name: "April", updates: 20 },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Dashboard Updates
      </h2>
      
      <div className="w-full h-80 bg-white p-4 shadow-md rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={updates}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="updates" fill="#82ca9d" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default UpdateDashboard;
