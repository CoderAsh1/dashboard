import React from "react";
import "./card.css";

const Card = ({ icon, title, digit, stat }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="detail">
        <h5>{title}</h5>
        <p>{digit}</p>
      </div>
      <p className="stat">{stat}</p>
    </div>
  );
};

export default Card;
