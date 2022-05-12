import React, { useState } from "react";
import { ModalButtons } from "../../Components/Buttons/ModalButtons/ModalButtons";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getMuiTheme from "../../Utils/MuiDataTableTheme";
import Header from "../../Components/Header/Header";
import "./Sales.css";

function Sales() {
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
    <div class="sales_wrapper">
      <Header title="Sales" subtitle="Manage,Add and Remove Products" search={true} />

      <div className="sales-header">
        <div className="left-sales-header-content">
          <div className="sales-select">
            <p>Date</p>
            <select name="year" id="year">
              {year.map((item) => {
                return <option value={item.id}>{item.year}</option>;
              })}
            </select>
          </div>
          <div className="total-stock-value">
            <p>Total Stock Value</p>
            <h5>$150,000.00 </h5>
          </div>
        </div>
        <div className="sales-header-btns">
          <ModalButtons
            icon={<i class="fas fa-plus"></i>}
            text="New Sales"
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

export default Sales;
