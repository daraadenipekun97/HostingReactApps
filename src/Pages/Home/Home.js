import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav";
import "./Home.css";

function Home() {
  return (
    <>
      <div class="home-wrapper">
        <Sidenav />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
