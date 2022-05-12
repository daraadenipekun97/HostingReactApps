import { createTheme } from "@material-ui/core/styles";

const getMuiTheme = createTheme({
  overrides: {
    MuiToolbar: {
      root: {
        display: "none",

        "&:last-of-type": {
          display: "flex",
        },
      },
    },
    MuiTableHead: {
      root: {
        // borderBottom:'15px solid  #f5f6fa',
      },
    },

    MUIDataTableHeadCell: {
      fixedHeader: {
        // backgroundColor:'#5BBE5F !important',
        borderRadius: "10px !important",
        zIndex: "1",

        color: "#fff",
        "&:first-of-type ": {
          borderRadius: "8px 0px 0px 8px !important",
        },
        "&:last-of-type ": {
          borderRadius: "0px 8px 8px 0px !important",
        },
      },
      data: {
        color: "#333333 !important",
        fontWeight: "900",
        fontSize: "1rem",
      },
    },

    MuiTableRow: {
      root: {
        padding: "18px !important",
        borderRadius: "10px !important",
        body: {},
      },
    },
    MUIDataTableBodyRow: {
      root: {
        borderBottom: "5px solid  #f5f6fa",

        borderRadius: "20px !important",

        "&:first-of-type": {
          borderTop: "10px solid  #f5f6fa",
        },
      },
    },
  },

  "@media(max-width:426)": {
    MuiTableCell: {
      footer: {},
    },
  },

  // .MUIDataTableHeadCell-fixedHeader-968
  // .MUIDataTableHeadCell-fixedHeader-2174
});

export default getMuiTheme;
