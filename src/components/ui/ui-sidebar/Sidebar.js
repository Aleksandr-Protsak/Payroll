import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ( props ) => {
  return (
    <div className="sidebar-app">
        <ul className="nav">
            <li className="nav-item">
              <NavLink to="/profile/timesheet">Timesheet</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile">Accrued Wages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile/employee">Employee List</NavLink>
            </li>
        </ul>
    </div>
  );
};
  
export default Sidebar;