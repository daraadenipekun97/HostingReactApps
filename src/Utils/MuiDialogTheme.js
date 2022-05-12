import { createTheme } from "@material-ui/core/styles";

const getMuiDialogTheme = createTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "19px",
      },
    },
    MuiDialog: {
      paper: {
        padding: "0px 30px 0px 30px",
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.28)",
        padding: "10px 0px",
      },
    },
    MuiTypography: {
      h6: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    MuiDialogContent: {
      root: {
        padding: "40px 0px",
        overflowX: "hidden",
        "& ::-webkit-scrollbar": {
          width: "2px",
        },
      },
    },
  },
});

export default getMuiDialogTheme;
