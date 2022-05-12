import React, { useState, useEffect } from "react";
import "./Sidenav.css";
import {
  DashboardIcon,
  ProductIcon,
  SalesIcon,
  ExpensesIcon,
  ReportsIcon,
  OthersIcon,
  SettingsIcon,
  ArrowRight,
} from "../Icons/SidenavIcons";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logomark.png";

function Sidenav() {
  const [sidebar, setSidebar] = useState(false);
  const [fill, setFill] = useState("#fff");
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const [clicked3, setClicked3] = useState(false);

  const [clicked4, setClicked4] = useState(false);

  const [clicked5, setClicked5] = useState(false);

  const [clicked6, setClicked6] = useState(false);

  const [clicked7, setClicked7] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  // const hoverIn = () => setFill('#fff')
  // const hoverOut = () => setFill('#000')

  useEffect(() => {
    setClicked1(true);
  }, []);

  let link_classes = document.querySelectorAll(".nav_link");

  const linkColor1 = document.getElementById("link_ref1");
  const linkColor2 = document.getElementById("link_ref2");
  const linkColor3 = document.getElementById("link_ref3");
  const linkColor4 = document.getElementById("link_ref4");
  const linkColor5 = document.getElementById("link_ref5");
  const linkColor6 = document.getElementById("link_ref6");
  const linkColor7 = document.getElementById("link_ref7");

  const allLinks = document.querySelectorAll(
    "#link_ref1, #link_ref2, #link_ref3, #link_ref4, #link_ref5, #link_ref6, #link_ref7"
  );

  useEffect(() => {
    debugger;
    if (sidebar === false && link_classes.id === "link_ref2") {
    } else if (sidebar === false && link_classes.id === "link_ref3") {
      activeHandler3();
    }
  }, [sidebar]);

  const activeHandler2 = () => {
    if (linkColor2 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor2.classList.add("active");
      setClicked2(true);
      setClicked1(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    } else if (linkColor2 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor2.classList.add("active_closed");
      setClicked2(true);
      setClicked1(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    }
  };
  const activeHandler1 = () => {
    if (linkColor1 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor1.classList.add("active");
      setClicked1(true);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    } else if (linkColor1 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor1.classList.add("active_closed");
      setClicked1(true);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    }
  };

  const activeHandler3 = () => {
    if (linkColor3 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor3.classList.add("active");
      setClicked3(true);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    } else if (linkColor3 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor3.classList.add("active_closed");
      setClicked3(true);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    }
  };
  const activeHandler4 = () => {
    if (linkColor4 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor4.classList.add("active");
      setClicked4(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    } else if (linkColor4 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor4.classList.add("active_closed");
      setClicked4(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked5(false);
      setClicked6(false);
      setClicked7(false);
    }
  };
  const activeHandler5 = () => {
    if (linkColor5 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor5.classList.add("active");
      setClicked5(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked6(false);
      setClicked7(false);
    } else if (linkColor5 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor5.classList.add("active_closed");
      setClicked5(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked6(false);
      setClicked7(false);
    }
  };
  const activeHandler6 = () => {
    if (linkColor6 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor6.classList.add("active");
      setClicked6(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked7(false);
    } else if (linkColor6 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor6.classList.add("active_closed");
      setClicked6(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked7(false);
    }
  };

  const activeHandler7 = () => {
    if (linkColor7 && sidebar === true) {
      debugger;
      allLinks.forEach((l) => l.classList.remove("active"));
      linkColor7.classList.add("active");
      setClicked7(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
    } else if (linkColor7 && sidebar === false) {
      allLinks.forEach((l) => l.classList.remove("active_closed"));
      linkColor7.classList.add("active_closed");
      setClicked7(true);
      setClicked3(false);
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
    }
  };
  // allLinks.forEach(l=> l.addEventListener('click', activeHandler2 , activeHandler1))

  return (
    <>
      <div class={sidebar ? "l-navbar" : "s-navbar"} id="nav-bar">
        <div class="arrow" onClick={toggleSidebar}>
          <ArrowRight />
        </div>
        <nav class="nav">
          <div>
            <div class="nav_list">
              <Link to="/" class={sidebar ? "nav_link" : "nav_link_closed"}>
                <img src={Logo} width="25" height="25" alt="Inventory Logo" />
                <span class="nav_logo-name ">Inventory </span>
              </Link>
              <Link
                to="/home/dashboard"
                className={sidebar ? "nav_link active" : "nav_link_closed active_closed"}
                id="link_ref1"
                onClick={activeHandler1}
              >
                <DashboardIcon fillColor={clicked1 ? fill : "#000"} />{" "}
                <span class="nav_name">Dashboard</span>
              </Link>
              <Link
                to="/home/product"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref2"
                onClick={activeHandler2}
              >
                <ProductIcon fillColor={clicked2 ? fill : "#000"} />{" "}
                <span class="nav_name">Product</span>
              </Link>
              <Link
                to="/home/sales"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref3"
                onClick={activeHandler3}
              >
                <SalesIcon fillColor={clicked3 ? fill : "#000"} />{" "}
                <span class="nav_name">Sales</span>
              </Link>
              <Link
                to="/home/expenses"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref4"
                onClick={activeHandler4}
              >
                <ExpensesIcon fillColor={clicked4 ? fill : "#000"} />
                <span class="nav_name">Expenses</span>
              </Link>
              <Link
                to="/home/reports"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref5"
                onClick={activeHandler5}
              >
                <ReportsIcon fillColor={clicked5 ? fill : "#000"} />{" "}
                <span class="nav_name">Reports</span>
              </Link>
              <Link
                to="/home/others"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref6"
                onClick={activeHandler6}
              >
                <OthersIcon fillColor={clicked6 ? fill : "#000"} />{" "}
                <span class="nav_name">Others</span>
              </Link>
              <Link
                to="/home/settings"
                class={sidebar ? "nav_link" : "nav_link_closed"}
                id="link_ref7"
                onClick={activeHandler7}
              >
                <SettingsIcon fillColor={clicked7 ? fill : "#000"} />{" "}
                <span class="nav_name">Settings</span>
              </Link>
            </div>
          </div>
          {/* <Link to = "/" class="nav_link"> <SettingsIcon /> <span class="nav_name">SignOut</span> </Link> */}
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
