import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";
import {
  basePath,
  usersPath,
  welcomePath,
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

  const role = localStorage.getItem("role");

  return (
    <div className="sidebar-wrapper">
      <div
        className={`sidebar sidebar-collapse ${mobileSide ? "collapsed" : ""
          }`}
        id="sidebar"
      >
        <div className="sidebar__menu-group">
          <ul className="sidebar_nav">

            <li className={location.pathname.includes("welcome") ? "active" : ""}>
              <Link to={basePath + welcomePath} onClick={() => handleMenuItemClick(basePath + welcomePath)}>
                <span className="nav-icon uil uil-history" />
                <span className="menu-text">Welcome</span>
              </Link>
            </li>

            {role === 'admin' && (
              <li className={location.pathname.includes("user-list") ? "active" : ""}>
                <Link to={basePath + usersPath} onClick={() => handleMenuItemClick(basePath + usersPath)}>
                  <span className="nav-icon uil uil-users-alt" />
                  <span className="menu-text">Users</span>
                </Link>
              </li>
            )}


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
