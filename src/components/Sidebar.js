import React from 'react';
import { FaHome, FaChartBar, FaCog, FaFolder } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar flex-column align-items-center p-2">
      {/* Top Navigation Icons */}
      <div className="d-flex flex-column mt-auto mb-auto">
        <Link to="/investment-summary-generator" className="sidebar-btn">
          <FaHome size={24} />
        </Link>
        <Link to="/investment-summary-generator/statistics" className="sidebar-btn">
          <FaChartBar size={24} />
        </Link>
        <Link to="/investment-summary-generator/upload" className="sidebar-btn">
          <FaFolder size={24} />
        </Link>
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
