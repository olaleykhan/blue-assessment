import React from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import Header from "../../layout/header/Header";
import Main from "../../layout/main/Main";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-section">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
