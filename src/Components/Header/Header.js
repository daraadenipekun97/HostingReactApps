import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  FilterIcon,
  NotificationIcon,
  Avatar,
  CheckedNotificationIcon,
  UncheckedNotificationIcon,
} from "../Icons/OtherIcons";

function Header({ title, subtitle, search }) {
  const [notificationData, setNotificationData] = useState([
    { title: "New offers Available", time: "2 hours ago", status: "unchecked" },
    { title: "Check out Greenbii Apps", time: "Just now", status: "unchecked" },
    {
      title: "Upgrade your Plan to enjoy more of Greenbii offers in a cool inventory app",
      time: "1 hour ago",
      status: "checked",
    },
  ]);

  //vanilla js

  useEffect(() => {
    const notification = document.getElementById("header-notif");
    const notificationDropdown = document.getElementById("header-notif-dropdown");
    const panelStyles = window.getComputedStyle(notificationDropdown);

    notification.addEventListener("click", () => {
      debugger;
      if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
        notificationDropdown.style.clipPath = "circle(100% at 50% 50%)";
      } else {
        notificationDropdown.style.clipPath = "circle(0% at 100% 0%)";
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (panelStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
        if (!notificationDropdown.contains(event.target)) {
          notificationDropdown.style.clipPath = "circle(0% at 100% 0%)";
        }
      }
    });

    const avatarr = document.getElementById("avatar");
    const avatarDropDown = document.getElementById("avatar-dropdown");
    const avatarpanelStyles = window.getComputedStyle(avatarDropDown);

    avatarr.addEventListener("click", () => {
      debugger;
      if (avatarpanelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
        avatarDropDown.style.clipPath = "circle(100% at 50% 50%)";
      } else {
        avatarDropDown.style.clipPath = "circle(0% at 100% 0%)";
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (avatarpanelStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
        if (!avatarDropDown.contains(event.target)) {
          avatarDropDown.style.clipPath = "circle(0% at 100% 0%)";
        }
      }
    });
  }, []);

  return (
    <div className="header-wrapper">
      <div className="header-text-wrap">
        <h4 className="header-title">{title}</h4>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      {search ? (
        <div className="header-right-wrapper">
          <div className="header-search">
            <input type="text" name="search" placeholder="Search" />
            <div className="header-search-icon">
              <i class="fas fa-search search-icon"></i>
            </div>
            <div className="header-filter-icon">
              <FilterIcon />
            </div>
            <input type="submit" value="" />
          </div>

          <div class="header-notification" id="header-notif">
            <NotificationIcon />
            <div class="header-notification-dropdown" id="header-notif-dropdown">
              <div className="notification-dropdown-header">
                <h3>Notifications</h3>
                <p>Mark all as read</p>
              </div>

              {notificationData.map((item, index) => {
                return (
                  <div className="each-notification" key={index}>
                    <div className="notification-text">
                      <h5>{item.title}</h5>
                      <p>{item.time}</p>
                    </div>

                    <div className="notification-checked-icon">
                      {item.status === "checked" ? (
                        <CheckedNotificationIcon />
                      ) : (
                        <UncheckedNotificationIcon />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="header-avatar" id="avatar">
            <Avatar />

            <div className="header-avatar-dropdown" id="avatar-dropdown">
              <div className="avatar-and-name">
                <Avatar />
                <div className="name">
                  <h4>Sarah's Store</h4>
                  <p>sarahstore@gmail.com</p>
                </div>
              </div>
              <ul className="avatar-list">
                <li>
                  {" "}
                  <Link to="/">View Profile</Link>
                </li>
                <li>
                  <Link to="/">Help and Support</Link>
                </li>
                <li>
                  {" "}
                  <button>Log Out</button>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-right-wrapper">
          <div class="header-notification" id="header-notif">
            <NotificationIcon />
            <div class="header-notification-dropdown" id="header-notif-dropdown">
              <div className="notification-dropdown-header">
                <h3>Notifications</h3>
                <p>Mark all as read</p>
              </div>

              {notificationData.map((item, index) => {
                return (
                  <div className="each-notification" key={index}>
                    <div className="notification-text">
                      <h5>{item.title}</h5>
                      <p>{item.time}</p>
                    </div>

                    <div className="notification-checked-icon">
                      {item.status === "checked" ? (
                        <CheckedNotificationIcon />
                      ) : (
                        <UncheckedNotificationIcon />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="header-avatar" id="avatar">
            <Avatar />

            <div className="header-avatar-dropdown" id="avatar-dropdown">
              <div className="avatar-and-name">
                <Avatar />
                <div className="name">
                  <h4>Sarah's Store</h4>
                  <p>sarahstore@gmail.com</p>
                </div>
              </div>
              <ul className="avatar-list">
                <li>
                  {" "}
                  <Link to="/">View Profile</Link>
                </li>
                <li>
                  <Link to="/">Help and Support</Link>
                </li>
                <li>
                  {" "}
                  <button>Log Out</button>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
