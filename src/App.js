import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Roaao from './components/roaao';
import Rocad from './components/rocad';
import UpdateDashboard from './components/UpdateDashboard';
import TransmissionSlip from './components/TransmissionSlip'; // ✅ Step 1: Import it
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-6">
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
            <li>
              <NavLink
                to="/transmission"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }
              >
                Transmission Slip
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UpdateDashboard />} />
          <Route path="/roaao" element={<Roaao />} />
          <Route path="/rocad" element={<Rocad />} />
          <Route path="/transmission" element={<TransmissionSlip />} /> {/* ✅ Step 3 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
