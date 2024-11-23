import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";

function Header() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);
 
  return (
    <header className="header-top">
      <nav className="navbar navbar-light">
        <div className="navbar-left">
          <div className="logo-area">
            <a className="navbar-brand" href="/">
            <h6>RBAC</h6>
            </a>
            <a
              href="#"
              className="sidebar-toggle"
              onClick={(e) => {
                e.preventDefault();
                setmobileSide(!mobileSide);
              }}
            >
              <img
                className="svg"
                src="/img/svg/align-center-alt.svg"
                alt="/img"
              />
            </a>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="navbar-right__menu">
            <li className="nav-author">
              <div className="dropdown-custom">
                <a href="javascript:;" className="nav-item-toggle">
                  <img
                    src="/img/author-nav.jpg"
                    alt
                    className="rounded-circle"
                  />
                  <span className="nav-item__title">
                  Admin
                    <i className="las la-angle-down nav-item__arrow" />
                  </span>
                </a>
                <div className="dropdown-parent-wrapper">
                  <div className="dropdown-wrapper">
                    <div className="nav-author__options nav-author__info" onClick={()=>{
                        localStorage.clear();window.location.href = "/login"
                      }} style={{cursor:"pointer"}}>
                      <a href className="nav-author__signout" >
                        <i className="uil uil-sign-out-alt" /> Sign Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
