import React from "react";

import Button from "../../components/ui/button/Button";
import "./Header.scss";
import avatar from "../../assets/avatar.jpg";

const Header = () => {
  return (
    <div className="header">
      <form className="search-form">
        <label className="search-label">
          <i className="fas fa-search"></i>
        </label>
        <input
          className="search-input"
          placeholder="Find Something..."
          type="search"
        />
        <Button>Search</Button>
      </form>
      <div className="items">
        <div className="notifications">
          <i className="fas fa-2x fa-bell"></i>
          <span className="count"> 3</span>
        </div>
        <div className="avatar">
          <img src={avatar} alt={avatar} />
          <span className="status"> </span>
        </div>

        <div className="options">
          {" "}
          Abigail <i className="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
