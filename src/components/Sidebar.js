import React from 'react';
import { FaHome, FaChartBar, FaCog, FaFolder } from 'react-icons/fa';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center py-4">
      {/* Top Navigation Icons */}
      <div className="d-flex flex-column align-items-center w-100">
        <button className="sidebar-btn">
          <FaHome size={24} />
        </button>
        <button className="sidebar-btn">
          <FaChartBar size={24} />
        </button>
        <button className="sidebar-btn">
          <FaFolder size={24} />
        </button>
      </div>

      {/* Settings icon pushed to bottom */}
      <div className="mt-auto">
        <button className="sidebar-btn">
          <FaCog size={24} />
        </button>
      </div>
    </div>
  );
};
