import React, { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faThLarge,
  faChartLine,
  faEnvelope,
  faInfo,
  faCog,
  faFile,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <div className="fixing-after-header">
      <header>
        <div className="toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h3>Dashboard</h3>
        <a href="#">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </header>

      <nav className={isSidebarActive ? "active" : ""}>
        <ul>
          <li>
            <a href="#" className="toggle">
              <span className="icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
              <span className="title">Menu</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="title">Homework</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faThLarge} />
              </span>
              <span className="title">Blog</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faChartLine} />
              </span>
              <span className="title">Chart</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faInfo} />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <span className="title">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faFile} />
              </span>
              <span className="title">History</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              <span className="title">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
