import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";
import {
  basePath,
  notificationPath,
  outletsPath,
  settingsPath,
  usersPath,
  historyPath,
  // productsPath,
} from "../services/UrlPaths";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { mobileSide, setmobileSide, urlPath, setUrlPath } =
    useContext(ContextDatas);
  const location = useLocation();

  const handleMenuItemClick = (path) => {
    setUrlPath(path);
  };

  return (
    <div className="sidebar-wrapper">
      <div
        className={`sidebar sidebar-collapse ${
          mobileSide ? "collapsed" : ""
        }`}
        id="sidebar"
      >
        <div className="sidebar__menu-group">
          <ul className="sidebar_nav">
            {/* <li className={location.pathname === basePath ? "active" : ""}>
              <Link to={basePath} onClick={() => handleMenuItemClick(basePath)}>
                <span className="nav-icon uil uil-create-dashboard" />
                <span className="menu-text">Products</span>
              </Link>
            </li> */}
            {/* <li className={location.pathname.includes("outlet") ? "active" : ""}>
              <Link to={basePath + outletsPath} onClick={() => handleMenuItemClick(basePath + outletsPath)}>
                <span className="nav-icon uil uil-home" />
                <span className="menu-text">Outlets</span>  
              </Link>
            </li> */}
            <li className={location.pathname.includes("user-list") ? "active" : ""}>
              <Link to={basePath + usersPath} onClick={() => handleMenuItemClick(basePath + usersPath)}>
                <span className="nav-icon uil uil-users-alt" />
                <span className="menu-text">Users</span>
              </Link>
            </li>
            {/* <li className={location.pathname.includes("history") ? "active" : ""}>
              <Link to={basePath + historyPath} onClick={() => handleMenuItemClick(basePath + historyPath)}>
                <span className="nav-icon uil uil-history" />
                <span className="menu-text">Movement History</span> 
              </Link>
            </li> */}
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
