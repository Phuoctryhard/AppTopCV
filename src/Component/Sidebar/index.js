import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import './Sidebar.css'; // Make sure the path to Sidebar.css is correct

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/home">
                <HomeOutlined /> Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/analytics">
                <HomeOutlined /> Analytics
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/recruitment">
                <HomeOutlined /> Recruitment
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/detail">
                <HomeOutlined /> Detail
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/report">
                <HomeOutlined /> Report
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/home">
                <HomeOutlined /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
