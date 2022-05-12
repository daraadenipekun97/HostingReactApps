import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import "./Product.css";
import { ModalButtons, DownloadButton } from "../../Components/Buttons/ModalButtons/ModalButtons";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getMuiTheme from "../../Utils/MuiDataTableTheme";
import ProductForm from "../../Components/Forms/Product/ProductForm";
import { Tooltip, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LoadingOverlay from "react-loading-overlay";

import { fetchProduct } from "../../Actions";

const getProductState = (state) => state.product;

function Product() {
  const { products } = useSelector(getProductState);
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const [loader, setLoader] = useState(true);
  const [searchText, setSearchText] = useState("");


  const [productsTableData, setProductsTableData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);


  const updateSearchText = text => {
    setSearchText(text);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);       
  }

 

  // ================================creating table data ==================== //

  useEffect(() => {
    setSearchText('');       
    const createTableData = () => {
      let productsArray = [];

      products.map((val) => {
        let row = [
          val.name,
          val.category_name,
          val.quantity,
          val.code,
          val.selling_price,
          val.cost_price,

          {
            productId: val.hid,
          },
        ];
        productsArray.push(row);
      });
      setProductsTableData(productsArray);
      setLoader(false);
    };
    products.length !== 0 && createTableData();
  }, [products]);





//  ********************This useEffect handles the search functionality **************************//

  useEffect(() => {
    if(searchText !== "") {
      setLoader(true);
      const filteredProducts = products.filter((val) => val.name.toLowerCase().includes(searchText.toLowerCase()) )
      let filteredproductsArray = [];

      filteredProducts.map((val) => {
        let row = [
          val.name,
          val.category_name,
          val.quantity,
          val.code,
          val.selling_price,
          val.cost_price,

          {
            productId: val.hid,
          },
        ];
        filteredproductsArray.push(row);
      });
      setProductsTableData(filteredproductsArray);
      setTimeout(() => {
        setLoader(false);
      }, 1000)

    }
    else{

      let productsArray = [];

      products.map((val) => {
        let row = [
          val.name,
          val.category_name,
          val.quantity,
          val.code,
          val.selling_price,
          val.cost_price,

          {
            productId: val.hid,
          },
        ];
        productsArray.push(row);
      });
      setProductsTableData(productsArray);
      setLoader(false);
    };

    

  }, [searchText])




  

  const handleClickOpen = (formType) => {
    setFormType(formType);
    setOpen(true);
  };

  const addOnClickHandler = () => {
    handleClickOpen("add");
  };

  const modifyOnClickHandler = (id) => {
    handleClickOpen("modify");
  };

  const handleClose = () => {
    setOpen(false);
    setLoader(true);
    setSearchText('');       

    dispatch(fetchProduct());
  };


  const columns = [
    {
      name: "name",
      label: "Product",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },

    {
      name: "company",
      label: "Category",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },

    {
      name: "city",
      label: "Quantity",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },
    {
      name: "state",
      label: "Product Code",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },
    {
      name: "price",
      label: "Selling Price",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },
    {
      name: "margin",
      label: "Cost Price",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return value === undefined || value === "" ? "" : value;
        },
      },
    },

    {
      name: "Actions",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta) => {
          return (
            <span>
              <Tooltip title="Modify" arrow>
                <IconButton size="small" onClick={() => modifyOnClickHandler(value.productId)}>
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>
            </span>
          );
        },
      },
    },
  ];

  const options = {
    filter: false,
    filterType: "dropdown",
    responsive: "standard",
    // selectableRows: "none",
    selectableRows: "none",
    selectableRowsOnClick: true,
    selectableRowsHeader: true,
    // onRowsSelect: onRowsSelect,
    expandableRowsOnClick: true,
    elevation: 0,
    jumpToPage: false,
    search: true,
 
  };

  return (
    <div class="product_wrapper">
      <Header title="Product" subtitle="Manage,Add and Remove Products" search={true} handleSearchChange = {handleSearchChange} searchText = {searchText}/>
      <div className="product-header">
        <div className="total-stock-value">
          <p>Total Stock Value</p>
          <h5>$150,000.00 </h5>
        </div>
        <div className="product-header-btns">
          <DownloadButton icon={<i class="fas fa-download"></i>} onClickFunc={addOnClickHandler} />

          <ModalButtons
            icon={<i class="fas fa-plus"></i>}
            text="New Product"
            onClickFunction={addOnClickHandler}
            color="#223372"
          />
        </div>
      </div>

      <MuiThemeProvider theme={getMuiTheme}>
        <LoadingOverlay
          active={loader}
          styles={{ overlay: (base) => ({ ...base, background: "rgba(0, 0, 0, 0.12)" }) }}
          spinner
          text="Loading all products"
        >
          <MUIDataTable data={productsTableData} columns={columns} options={options} />
        </LoadingOverlay>
      </MuiThemeProvider>

      <ProductForm open={open} handleClose={handleClose} formType={formType} />
    </div>
  );
}

export default Product;
