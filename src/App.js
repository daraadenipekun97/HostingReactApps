import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Product from "./Pages/Product/Product";
import Notfound from "./Pages/Notfound/Notfound";
import Sales from "./Pages/Sales/Sales";
import Expenses from "./Pages/Expenses/Expenses";
import Reports from "./Pages/Reports/Reports";
import Others from "./Pages/Others/Others";
import Settings from "./Pages/Settings/Settings";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./Store/index";

import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename = "/HostingReactApps">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<Product />} />
              <Route path="sales" element={<Sales />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="reports" element={<Reports />} />
              <Route path="others" element={<Others />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      ;
    </>
  );
}

export default App;
