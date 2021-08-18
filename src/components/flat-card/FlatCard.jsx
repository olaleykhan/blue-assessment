import React from "react";
import "./FlatCard.scss";

const FlatCard = () => {
  return (
    <div className="flat-card">
      <img
        alt="avatar"
        src={`https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`}
      />
      <div className="details">
        <p> Adekunle Liked you</p>
        <span> About 20miutes ago</span>
      </div>
      <i className="fas fa-heart"></i>
      {/* <i class="fas fa-sticky-note"></i> */}
    </div>
  );
};

export default FlatCard;
