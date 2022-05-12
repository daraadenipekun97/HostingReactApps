import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Dashboard.css";
import DemandChart from "./DashboardCharts/DemandChart";
import ProfitabilityChart from "./DashboardCharts/ProfitabilityChart";

function Dashboard() {
  const [year, setYear] = useState([
    { id: 1, year: "2022" },
    { id: 2, year: "2021" },
    { id: 3, year: "2020" },
    { id: 4, year: "2019" },
  ]);

  const [month, setMonth] = useState([
    { id: 1, month: "January" },
    { id: 2, month: "Febuary" },
    { id: 3, month: "Match" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ]);

  const [activities, setActivities] = useState([
    { id: 1, date: "16th Apr 2021", day: "Sunday", action: "Created New inventory", time: "17:58" },
    { id: 2, date: "10th May 2022", day: "Monday", action: "Edited New Sales", time: "10:55" },
    {
      id: 3,
      date: "11th April 2022",
      day: "Friday",
      action: "Created other inventory",
      time: "12:01",
    },
    { id: 4, date: "25th May 2022", day: "Tuesday", action: "Sold 10 products", time: "1:15" },
  ]);

  return (
    <div class="dashboard_wrapper">
      <Header title="Dashboard" subtitle="Hello Sarah," search={false} />

      <div className="main-dashboard-container">
        <div className="main-dashboard-left">
          <div className="each-left-item-container">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h4>Demand</h4>
                <select name="year" id="year">
                  {year.map((item) => {
                    return <option value={item.id}>{item.year}</option>;
                  })}
                </select>
              </div>

              <div className="chart">
                <DemandChart />
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h4>Profitability</h4>
                <select name="year" id="year">
                  {year.map((item) => {
                    return <option value={item.id}>{item.year}</option>;
                  })}
                </select>
              </div>

              <div className="chart">
                <ProfitabilityChart />
              </div>
            </div>
          </div>
          <div className="each-left-item-container">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h4>Sales</h4>
                <select name="year" id="year">
                  <option value="">Month</option>

                  {month.map((item) => {
                    return <option value={item.id}>{item.month}</option>;
                  })}
                </select>
              </div>

              <div className="dashboard-card-total-price">
                <p>Total Sales</p>
                <h4>$0.00 </h4>
              </div>
              <div class="dashboard-list-items">
                <ul>
                  <li>
                    <a
                      data-toggle="collapse"
                      class="collapse"
                      data-target="#dashboard-list-items-1"
                    >
                      Top selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-1"
                      class="collapse show"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>ttitor rhoncus dolor purus non.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      data-target="#dashboard-list-items-2"
                      class="collapsed"
                    >
                      Least selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-2"
                      class="collapse"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>turpis massa tincidunt dui.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      data-target="#dashboard-list-items-3"
                      class="collapsed"
                    >
                      Best selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-3"
                      class="collapse"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h4>Sales</h4>
                <select name="year" id="year">
                  {month.map((item) => {
                    return <option value={item.id}>{item.month}</option>;
                  })}
                </select>
              </div>

              <div className="dashboard-card-total-price">
                <p>Total Expenditure</p>
                <h4>$0.00 </h4>
              </div>
              <div class="dashboard-list-items">
                <ul>
                  <li>
                    <a
                      data-toggle="collapse"
                      class="collapse"
                      data-target="#dashboard-list-items-4"
                    >
                      Top selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-4"
                      class="collapse show"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>ttitor rhoncus dolor purus non.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      data-target="#dashboard-list-items-5"
                      class="collapsed"
                    >
                      Least selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-5"
                      class="collapse"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>turpis massa tincidunt dui.</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      data-target="#dashboard-list-items-6"
                      class="collapsed"
                    >
                      Best selling products <i class="fas fa-plus icon-show"></i>
                      <i class="fas fa-minus icon-close"></i>
                    </a>
                    <div
                      id="dashboard-list-items-6"
                      class="collapse"
                      data-bs-parent=".dashboard-list-items"
                    >
                      <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-dashboard-right">
          <div className="dashboard-card-header">
            <h4>Sales</h4>
            <select name="year" id="year">
              <option value="">Month</option>

              {month.map((item) => {
                return <option value={item.id}>{item.month}</option>;
              })}
            </select>
          </div>
          {activities.map((item) => {
            return (
              <div className="right-card">
                <div className="right-card-header">
                  <h6>{item.date}</h6> <p>{item.day}</p>
                </div>
                <div className="right-card-content">
                  <p>{item.action}</p>
                  <small>{item.time}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
