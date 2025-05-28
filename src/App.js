import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 
import Roaao from './components/roaao';
import Rocad from './components/rocad';
import UpdateDashboard from './components/UpdateDashboard';  // Import UpdateDashboard
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation with links */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-6">
            {/* Using NavLink for active link styling */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roaao"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }
              >
                Roaao
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rocad"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }
              >
                Rocad
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes for the page components */}
        <Routes>
          <Route path="/" element={<UpdateDashboard />} />  {/* Updated to display UpdateDashboard */}
          <Route path="/roaao" element={<Roaao />} />
          <Route path="/rocad" element={<Rocad />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
