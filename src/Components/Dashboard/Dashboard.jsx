import React from "react";
import Card from "./Card/Card";
import "./dashboard.css";
import {
  AiFillMoneyCollect,
  AiOutlineSearch,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillBagFill, BsFillPeopleFill } from "react-icons/bs";
import flag from "../../flag.png";
import { MdOutlineDashboard, MdNotificationAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import middle from "../../Assets/middle.png";
import percent from "../../Assets/percent.png";
import Statistics from "./Statistics/Statistics";

const Dashboard = () => {
  return (
    <div className="dashboardDisplay">
      <header>
        <h4>Dashboard</h4>
        <div className="icons">
          <AiOutlineSearch />
          <img src={flag} alt="" height="12rem" />
          <MdOutlineDashboard />
          <MdNotificationAdd />
          <AiFillSetting />
          <CgProfile />
        </div>
      </header>
      <main>
        <section className="left">
          <div className="left_top">
            <Card
              icon={<AiFillMoneyCollect />}
              title="Revenue"
              digit="$21,287"
              stat="+2.90%"
            />
            <Card
              icon={<BsFillBagFill />}
              title="Orders"
              digit="1,923"
              stat="+1.50%"
            />
            <Card
              icon={<BsFillPeopleFill />}
              title="People"
              digit="45,217"
              stat="+3.20%"
            />
          </div>
          <div className="left_middle">
            <div className="left_middle_left">
              <h5>Overview</h5>
              <div className="month">
                <h6>This Month</h6>
                <div className="price">
                  <h4>$33,568</h4>
                  <span className="stat">+2.65%</span>
                </div>
              </div>
              <div className="values">
                <div className="_left">
                  <h6>Orders</h6>
                  <h5>5,643</h5>
                </div>
                <div>
                  <h6>Order Value</h6>
                  <h5>12.03%</h5>
                </div>
                <div className="_left">
                  <h6>Income</h6>
                  <h5>$35,652</h5>
                </div>
                <div>
                  <h6>Sales</h6>
                  <h5>16,643</h5>
                </div>
                <div className="last _left">
                  <h6>Customer</h6>
                  <h5>21,443</h5>
                </div>
                <div className="last">
                  <h6>Expenses</h6>
                  <h5>$12,234</h5>
                </div>
              </div>
            </div>
            <img src={middle} alt="" />
          </div>
          <div className="left_bottom">
            <Statistics />
          </div>
        </section>
        <section className="right">
          <div className="bg"></div>
          <div className="profile">
            <img src={middle} alt="" height="110px" width="110px" />
            <p>Jenni Bettie</p>
            <span>Web Developer</span>
          </div>
          <div className="followers">
            <div>
              <p>1,296</p>
              <span>Products</span>
            </div>
            <div>
              <p>5.2k</p>
              <span>Followers</span>
            </div>
          </div>
          <div className="earning">
            <h5>Earning</h5>
            <img src={percent} alt="" />
            <div className="details">
              <h2>$26,244</h2>
              <p>Earning this month</p>
              <div>
                <span className="stat">+2.65%</span>
                <span>From previous period</span>
              </div>
            </div>
          </div>
          <div className="recentActivity">
            <h5>Recent Activity</h5>
            <div className="des">
              <span>
                12
                <br /> Sep
              </span>
              <p>Responded to need 'Volunteer Activity'</p>
            </div>
            <div className="des">
              <span>
                12 <br />
                Sep
              </span>
              <p>Responded to need 'Volunteer Activity'</p>
            </div>
            <div className="des">
              <span>
                12 <br /> Sep
              </span>
              <p>Responded to need 'Volunteer Activity'</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
