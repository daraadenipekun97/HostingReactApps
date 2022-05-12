import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { InfoIcon, ImageIcon } from "../../Icons/OtherIcons";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { alpha, withStyles, makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getMuiDialogTheme from "../../../Utils/MuiDialogTheme";
import { toastr } from "react-redux-toastr";
import { addProduct, restoreProductsInitial } from "../../../Actions";


import "./ProductForm.css";
import {
  Grid,
  TextField,
  Paper,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Typography,
  IconButton,
  Tooltip,
  InputAdornment,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#fcfcfb",
    border: "1px solid rgb(193, 194, 194)",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#223372",
      boxShadow: "0 0 0 0.2rem rgba(34, 51, 114,.25)",
    },
  },
}))(InputBase);

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#223372",
    width: "100%",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#1f3686",
      borderColor: "#1f3686",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#1f3686",
      borderColor: "#1f3686",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  //   root:{
  //     '& .MuiFormControl-root':{
  //         width:'90%',
  //         margin: theme.spacing(0.5),
  //         border:'solid'
  //     }
  // },
  // endAdornment:{
  //   '& . '
  // }
}));

const useStyledInput = makeStyles((theme) => ({
  root: {
    border: "none",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function StyledTextField(props) {
  const classes = useStyledInput();

  return (
    <TextField
      style={{ backgroundColor: "#F9FAFB", marginBottom: "20px" }}
      InputProps={{ classes, disableunderline: true }}
      {...props}
    />
  );
}

function StyledTextFieldWithAdornment(props) {
  const classes = useStyledInput();

  return (
    <TextField
      style={{ backgroundColor: "#F9FAFB", marginBottom: "20px" }}
      InputProps={{
        classes,
        disableunderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <InfoIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}



const getProductState = (state) => state.product;



function ProductForm(props) {
  const dispatch = useDispatch();
  const { productCreated } = useSelector(getProductState);
  const { open, handleClose, formType } = props;
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [valid, setValid] = useState(false);


  const initialFormState = {
    buttonState: false,
    buttonText: "Add Product",
    spinner:false
};

  const [formState, setFormState] = useState({ ...initialFormState });



  const initialFormError = {
    errorState: false,
    errorText: "This field is required",
};


  const [formError, setFormError] = useState({ ...initialFormError });





  const initialFormValues = {

    
      category: "",
      product_code: "",
      product_type: "",
      name: "",
      cost_price: "",
      selling_price: "",
      quantity: "",
      product_image: null,
      tax_method: "",
      tax: '',
      product_details: "",
      alert_quantity: ""
  

  }

  const [formValues, setFormValues] = useState({ ...initialFormValues });




  const handleCloseHandler = () => {
    setFormState({...initialFormState})
    handleReset();
    handleClose();

  };

  const handleShowAdvancedSetting = () => setToggle(!toggle);

  const getFileUploadId = () => {
    document.getElementById("fileUpload").click();
  };


  //=======================FORM HANDLERS================================//

  const nameHandler = e => {
    setFormError({
      ...formError,
      errorState:false
    })
  
    if (e) {
        let nameValue = e.target.value;
        e.preventDefault();
        setFormValues({
          ...formValues,
          name: nameValue
        });
    } else {

      setFormValues({
        ...formValues,
        name: ""
      });


    }
};


const descHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let descValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        product_details: descValue
      });
  } else {

    setFormValues({
      ...formValues,
      product_details: ""
    });


  }
};

const catHandler = e => {
  
  setFormError({
    ...formError,
    errorState:false
  })

  if (e) {
      let catValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        category: catValue
      });
  } else {

    setFormValues({
      ...formValues,
      category: ""
    });


  }
};

const typeHandler = e => {
  
  setFormError({
    ...formError,
    errorState:false
  })

  if (e) {
      let typeValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        product_type: typeValue
      });
  } else {

    setFormValues({
      ...formValues,
      product_type: ""
    });


  }
};

const codeHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let codeValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        product_code: codeValue
      });
  } else {

    setFormValues({
      ...formValues,
      product_code: ""
    });


  }
};

const quantityHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let quantityValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        quantity: quantityValue
      });
  } else {

    setFormValues({
      ...formValues,
      quantity: ""
    });


  }
};

const alertQuantityHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let alertQuantityValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        alert_quantity: alertQuantityValue
      });
  } else {

    setFormValues({
      ...formValues,
      alert_quantity: ""
    });


  }
};

const taxMethodHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let taxMethodValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        tax_method: taxMethodValue
      });
  } else {

    setFormValues({
      ...formValues,
      tax_method: ""
    });


  }
};

const taxHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let taxValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        tax: taxValue
      });
  } else {

    setFormValues({
      ...formValues,
      tax: ""
    });


  }
};

const costPriceHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let costPriceValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        cost_price: costPriceValue
      });
  } else {

    setFormValues({
      ...formValues,
      cost_price: ""
    });


  }
};

const sellingPriceHandler = e => {

  setFormError({
    ...formError,
    errorState:false
  })
  
  if (e) {
      let sellingPriceValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        selling_price: sellingPriceValue
      });
  } else {

    setFormValues({
      ...formValues,
      selling_price: ""
    });


  }
};


const handleReset = () => {
  setFormValues({...initialFormValues})
}

const handleSubmit = () => {
  setValid(true)
}



useEffect(() => {


  if(valid && (

    formValues.category === "" ||
    formValues.product_code === "" ||
    formValues.product_type === "" ||
    formValues.name === "" ||
    formValues.cost_price === "" ||
    formValues.selling_price === "" ||
    formValues.quantity === "" ||
    formValues.tax_method === "",
    formValues.tax === '' ||
    formValues.product_details === "" ||
    formValues.alert_quantity === ""

  )){

    toastr.error("You missed some required fields", '');
    setFormError({
      ...formError,
      errorState: true,

    })


  }
 else if(

  valid && (

    formValues.category !== "" ||
    formValues.product_code !== "" ||
    formValues.product_type !== "" ||
    formValues.name !== "" ||
    formValues.cost_price !== "" ||
    formValues.selling_price !== "" ||
    formValues.quantity !== "" ||
    formValues.tax_method !== "",
    formValues.tax !== '' ||
    formValues.product_details !== "" ||
    formValues.alert_quantity !== ""

 )){

  setFormState({
    ...formState,
    buttonState: true,
    buttonText:'Adding...',
    spinner:true

  })

  dispatch(addProduct(formValues))


  

 }else{
          
 }

  return () => {
    setValid(false);
};

},[valid])


useEffect(() => {

  if(productCreated){
    handleCloseHandler()
  }

  return () => {
    dispatch(restoreProductsInitial());
};


},[productCreated])



  return (
    <>
      <MuiThemeProvider theme={getMuiDialogTheme}>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth={true}
          maxWidth="md"
        >
          <DialogTitle id="customized-dialog-title">
            <span>{formType === "add" ? "Add Product" : "Modify Product"}</span>
            <IconButton aria-label="close" onClick={handleCloseHandler}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {formType === "add" ? (
              <form autoComplete="off">
                <Grid container>
                  <Grid item xs={12} md={6} lg={6}>
                    <div className="drag-image-wrapper">
                      <div className="drag-image-box">
                        <div className="image-icon-div">
                          <ImageIcon />
                          <p className="drag-text">Drag and Drop a photo or</p>
                          <p onClick={getFileUploadId} className="file-upload-text">
                            Browse
                          </p>
                          <input type="file" id="fileUpload" style={{ display: "none" }} />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <StyledTextField
                      label=""
                      variant="outlined"
                      value={formValues.name}
                      fullWidth
                      size="small"
                      placeholder="Name"
                      error={formError.errorState}
                      helperText={formError.errorState ? `${formError.errorText}`: ''}
                      onChange={(e) => {
                        nameHandler(e)
                      }}
                    />
                    <StyledTextField
                      label=""
                      variant="outlined"
                      value={formValues.product_details}
                      fullWidth
                      placeholder="Description"
                      multiline
                      rows={4}
                      error={formError.errorState}
                      helperText={formError.errorState ? `${formError.errorText}`: ''}
                      onChange={(e) => {
                        descHandler(e)
                      }}
                    />

                    <StyledTextField
                      label=""
                      variant="outlined"
                      value={formValues.category}
                      fullWidth
                      placeholder="Product Category"
                      size="small"
                      error={formError.errorState}
                      helperText={formError.errorState ? `${formError.errorText}`: ''}                      onChange={(e) => {
                        catHandler(e)
                      }}
                    />

                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} lg={6} className="grid-item">
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.product_type}
                          fullWidth
                          size="small"
                          placeholder="Product Type"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            typeHandler(e)
                          }}
                        />
                      </Grid>
                      <Grid item md={6} sm={12} lg={6} className="grid-item">
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.product_code}
                          fullWidth
                          size="small"
                          placeholder="Product Code"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            codeHandler(e)
                          }}
                        />
                      </Grid>
                    </Grid>

                    <StyledTextField
                      label=""
                      variant="outlined"
                      style={{ marginTop: "10px", marginBottom: "20px" }}
                      value={formValues.quantity}
                      fullWidth
                      placeholder="Quantity"
                      size="small"
                      error={formError.errorState}
                      helperText={formError.errorState ? `${formError.errorText}`: ''}
                      onChange={(e) => {
                        quantityHandler(e)
                      }}
                    />

                    <StyledTextField
                      label=""
                      variant="outlined"
                      value={formValues.alert_quantity}
                      fullWidth
                      placeholder="Alert Quantity"
                      size="small"
                      error={formError.errorState}
                      helperText={formError.errorState ? `${formError.errorText}`: ''}
                      onChange={(e) => {
                        alertQuantityHandler(e)
                      }}
                    />

                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} lg={6} className="grid-item">
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.tax_method}
                          fullWidth
                          size="small"
                          placeholder="Tax Method"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            taxMethodHandler(e)
                          }}
                        />{" "}
                      </Grid>
                      <Grid item md={6} sm={12} lg={6} className="grid-item">
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.tax}
                          fullWidth
                          size="small"
                          placeholder="Tax"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            taxHandler(e)
                          }}
                        />
                      </Grid>
                    </Grid>

                    <p onClick={handleShowAdvancedSetting} className="advanced-setting">
                      Advanced Unit settings &nbsp;
                      {toggle ? (
                        <i class="fa fa-chevron-up"></i>
                      ) : (
                        <i class="fa fa-chevron-down"></i>
                      )}
                    </p>

                    {toggle ? (
                      <>
                        <Grid container spacing={2}>
                          <Grid item md={6} sm={12} lg={6} className="grid-item">
                            <StyledTextField
                              label=""
                              variant="outlined"
                              value=""
                              fullWidth
                              size="small"
                              placeholder="Sub Unit eg packs"
                              error={false}
                              // helperText="This field is required"
                            />{" "}
                          </Grid>
                          <Grid item md={6} sm={12} lg={6} className="grid-item">
                            <StyledTextFieldWithAdornment
                              label=""
                              className={classes.endAdornment}
                              variant="outlined"
                              value=""
                              fullWidth
                              size="small"
                              placeholder="Conversion"
                              error={false}
                              // helperText="This field is required"
                            />
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      ""
                    )}

                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} lg={6}>
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.cost_price}
                          fullWidth
                          size="small"
                          placeholder="Cost Price"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            costPriceHandler(e)
                          }}
                        />
                      </Grid>
                      <Grid item md={6} sm={12} lg={6}>
                        <StyledTextField
                          label=""
                          variant="outlined"
                          value={formValues.selling_price}
                          fullWidth
                          size="small"
                          placeholder="Selling Price"
                          error={formError.errorState}
                          helperText={formError.errorState ? `${formError.errorText}`: ''}
                          onChange={(e) => {
                            sellingPriceHandler(e)
                          }}
                        />
                      </Grid>
                    </Grid>

                    <BootstrapButton
                      variant="contained"
                      color="primary"
                      disabled={formState.buttonState}
                      disableRipple
                      onClick = {handleSubmit}
                      endIcon={ formState.spinner ?
                        <CircularProgress
                          style={{ width: "17px", color: "white", height: "17px" }}
                        /> : ""
                      }
                    >
                        {formState.buttonText}
                    </BootstrapButton>
                  </Grid>
                </Grid>
              </form>
            ) : (
              <div className="hello">Modify shit here</div>
            )}
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </MuiThemeProvider>
    </>
  );
}

export default ProductForm;

{
  /* <Select
className="m-select"
labelId="demo-simple-select-label"
id="demo-simple-select"
value=""
fullWidth
input={<BootstrapInput/>}
>
<MenuItem value={0}>All</MenuItem>
<MenuItem value={1}>Pending</MenuItem>
<MenuItem value={2}>Approved</MenuItem>
<MenuItem value={3}>Disapproved</MenuItem>
</Select> */
}
