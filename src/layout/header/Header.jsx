import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <form className="search-form">
        <label>
          <i class="fas fa-search"></i>
        </label>
        <input
          className="search-input"
          placeholder="Find Something ..."
          type="search"
        />
      </form>
      <div className="items">
        <div className="notifications">
          <i class="fas fa-bell"></i>
          <span className="count"> 3</span>
        </div>
        <div className="avatar"> avater</div>

        <div className="options"> Name</div>
      </div>
    </div>
  );
};

export default Header;
