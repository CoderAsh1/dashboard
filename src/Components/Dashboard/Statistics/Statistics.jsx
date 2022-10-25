import React from "react";
import "./statistics.css";
import graph1 from "../../../Assets/graph1.png";
import graph2 from "../../../Assets/graph2.png";
import graph3 from "../../../Assets/graph3.png";

export default function Statistics() {
  return (
    <div className="statistics">
      <section className="user_activity">
        <h4>User Activity</h4>
        <div>
          <span>This Month</span>
          <p>16,543</p>
        </div>
        <img src={graph1} alt="" />
      </section>
      <section className="Order Status">
        <h4>Order Status</h4>
        <img src={graph2} alt="" />
        <div className="status">
          <span>Completed</span>
          <span>Pending</span>
          <span>Cancel</span>
        </div>
      </section>
      <section className="top_products">
        <header>
          <h4>Top Product</h4>
          <select>
            <option value="monthly">Monthly</option>
          </select>
        </header>
        <div className="details">
          <div className="detail">
            <span>#1</span>
            <span>
              <h5>Polo blue T-shirt</h5>
              <h5>$ 35.4</h5>
            </span>
            <span className="sales">3.23k</span>
          </div>
          <div className="detail">
            <span>#1</span>
            <span>
              <h5>Polo blue T-shirt</h5>
              <h5>$ 35.4</h5>
            </span>
            <span className="sales">3.23k</span>
          </div>
          <div className="detail">
            <span>#1</span>
            <span>
              <h5>Polo blue T-shirt</h5>
              <h5>$ 35.4</h5>
            </span>
            <span className="sales">3.23k</span>
          </div>
          <div className="detail">
            <span>#1</span>
            <span>
              <h5>Polo blue T-shirt</h5>
              <h5>$ 35.4</h5>
            </span>
            <span className="sales">3.23k</span>
          </div>
          <div className="detail">
            <span>#1</span>
            <span>
              <h5>Polo blue T-shirt</h5>
              <h5>$ 35.4</h5>
            </span>
            <span className="sales">3.23k</span>
          </div>
        </div>
      </section>
    </div>
  );
}
