import React, { useContext } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import { ContextDatas } from "../services/Context";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

function RouterConnection() {
  const { mobileSide } = useContext(ContextDatas);

  return (
    <div>
      <div className="mobile-author-actions" />
      <Header />
      <main className="main-content">
        <Sidebar />

        <Outlet />

        {/* <Footer /> */}
      </main>

      <div className={`overlay-dark-sidebar ${mobileSide ? "show" : ""}`} />
      {/* <div className="customizer-overlay" /> */}
    </div>
  );
}

export default RouterConnection;
