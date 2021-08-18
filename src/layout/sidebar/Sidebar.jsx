import React from "react";

import NavItem from "../../components/nav/nav-item/NavItem";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo"> bluecube </h1>
      <nav className="navbar">
        <ul>
          <NavItem active icon="home">
            Home
          </NavItem>
          <NavItem icon="sticky-note">Message</NavItem>
          <span>SHARE</span>
          <NavItem icon="chart-bar">Ranking</NavItem>
          <NavItem icon="medal">Challenge</NavItem>
          <NavItem icon="glass-cheers">Party</NavItem>
          <NavItem icon="link">Connect</NavItem>
          <NavItem icon="male">Parade</NavItem>
          <NavItem icon="users">Group</NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
