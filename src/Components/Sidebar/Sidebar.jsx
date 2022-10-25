import React, { useState } from "react";
import "./sidebar.css";
import { CgMenuLeft } from "react-icons/cg";
import {
  MdOutlineDashboard,
  MdShoppingBag,
  MdEmail,
  MdOutlineVerifiedUser,
  MdEdit,
} from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown, IoMdContact } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsFillChatDotsFill } from "react-icons/bs";
import {
  SiFiles,
  SiPolymerproject,
  SiInvoiceninja,
  SiUnity,
} from "react-icons/si";
import { RiStackFill } from "react-icons/ri";

const Sidebar = () => {
  const [sideactive, setSideActive] = useState(false);

  function handleDropDown(e) {
    console.log(e);
  }

  function handleSideBar() {
    sideactive === true ? setSideActive(false) : setSideActive(true);
  }

  return (
    <>
      <CgMenuLeft className="menuIcon" onClick={handleSideBar} />
      <div className={sideactive ? "sidebar" : "width hidden"}>
        <section className="options">
          <div className="menu">
            <h6>Menu</h6>
            <div className="dashboard">
              <div className="dropdown" onClick={handleDropDown}>
                <MdOutlineDashboard />
                <h5>Dashboard</h5>
                <IoIosArrowDown className="downArrow " />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
              <ul>
                <li>Ecommrce</li>
                <li>Sass</li>
                <li>Crypto</li>
              </ul>
            </div>
          </div>

          {/* another menu */}

          <div className="menu">
            <h6>Application</h6>
            <div className="option">
              <SlCalender />
              <li>Calender</li>
            </div>
            <div className="option">
              <BsFillChatDotsFill />
              <li>Chat</li>
            </div>
            <div className="option">
              <SiFiles />
              <li>File Explorer</li>
            </div>
            <div className="dashboard">
              <div className="dropdown">
                <MdShoppingBag />
                <h5>Ecommerce</h5>
                <IoIosArrowDown
                  className="downArrow "
                  onClick={handleDropDown}
                />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
              <div className="dropdown">
                <MdEmail />
                <h5>Email</h5>
                <IoIosArrowDown
                  className="downArrow "
                  onClick={handleDropDown}
                />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
              <div className="dropdown">
                <SiInvoiceninja />
                <h5>Invoice</h5>
                <IoIosArrowDown
                  className="downArrow "
                  onClick={handleDropDown}
                />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
              <div className="dropdown">
                <SiPolymerproject />
                <h5>Projects</h5>
                <IoIosArrowDown
                  className="downArrow "
                  onClick={handleDropDown}
                />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
              <div className="dropdown">
                <IoMdContact />
                <h5>Contacts</h5>
                <IoIosArrowDown
                  className="downArrow "
                  onClick={handleDropDown}
                />
                <IoIosArrowUp className="upArrow hidden" />
              </div>
            </div>
          </div>

          {/* another menu */}

          <h6>Layouts</h6>
          <h6>Pages</h6>
          <div className="option">
            <MdOutlineVerifiedUser />
            <li>Authentication</li>
          </div>
          <div className="dropdown">
            <SiUnity />
            <h5>Utility</h5>
            <IoIosArrowDown className="downArrow" onClick={handleDropDown} />
            <IoIosArrowUp className="upArrow hidden" />
          </div>
          <h6>Components</h6>
          <div className="dropdown">
            <RiStackFill />
            <h5>UI Element</h5>
            <IoIosArrowDown className="downArrow" onClick={handleDropDown} />
            <IoIosArrowUp className="upArrow hidden" />
          </div>
          <div className="dropdown">
            <MdEdit />
            <h5>Forms</h5>
            <IoIosArrowDown className="downArrow" onClick={handleDropDown} />
            <IoIosArrowUp className="upArrow hidden" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
