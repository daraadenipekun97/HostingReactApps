import React, { useState } from "react";
import "./Expenses.css";
import Header from "../../Components/Header/Header";
import { ModalButtons, DownloadButton } from "../../Components/Buttons/ModalButtons/ModalButtons";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getMuiTheme from "../../Utils/MuiDataTableTheme";

function Expenses() {
  const [year, setYear] = useState([
    { id: 1, year: "1/1/2022" },
    { id: 2, year: "10/10/2021" },
    { id: 3, year: "15/05/2020" },
    { id: 4, year: "20/02/2019" },
  ]);

  const handleClick = () => {};

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  ];

  const columns = [
    {
      name: "name",
      label: "Product",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },

    {
      name: "company",
      label: "Category",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },

    {
      name: "city",
      label: "Quantity",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },
    {
      name: "state",
      label: "Unit",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },
    {
      name: "price",
      label: "Selling Price",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },
    {
      name: "margin",
      label: "Margins",
      //   options: {
      //     filter: true,
      //     sort: true,
      //     customBodyRender: (value, tableMeta) => {
      //       return value === undefined || value === "" ? '' : value;
      //     }
      //   }
    },
  ];

  const options = {
    filter: false,
    filterType: "dropdown",
    responsive: "standard",
    // selectableRows: "none",
    selectableRows: false,
    selectableRowsOnClick: true,
    selectableRowsHeader: true,
    // onRowsSelect: onRowsSelect,
    expandableRowsOnClick: true,
    elevation: 0,
    jumpToPage: false,
    search: true,
  };

  return (
    <div class="expenses_wrapper">
      <Header title="Expenses" subtitle="Manage,Add and Remove expenses" search={true} />

      <div className="expenses-header">
        <div className="left-expenses-header-content">
          <div className="expenses-select">
            <p>Date</p>
            <select name="year" id="year">
              {year.map((item) => {
                return <option value={item.id}>{item.year}</option>;
              })}
            </select>
          </div>
          <div className="total-stock-value">
            <p>Total Stock Valuee</p>
            <h5>$150,000.00 </h5>
          </div>
        </div>
        <div className="expenses-header-btns">
          <DownloadButton icon={<i class="fas fa-download"></i>} onClickFunc={handleClick} />
          <ModalButtons
            icon={<i class="fas fa-plus"></i>}
            text="New Expenses"
            onClickFunction={handleClick}
            color="#223372"
          />
        </div>
      </div>

      <MuiThemeProvider theme={getMuiTheme}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </MuiThemeProvider>
    </div>
  );
}

export default Expenses;
