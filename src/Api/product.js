import api from "../Service/Api";
import { toastr } from "react-redux-toastr";

const productBaseController = "api/v1/gbi/";

export const createProduct = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${productBaseController}product`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          toastr.success("Product Added Successfully!", "Success");
          return response.data;
        }
      } else {
        toastr.error("Something went wrong", "Please try again");
      }
    } catch (ex) {
      toastr.error("Something went wrong", "Please try again");
    }
  }
};

export const getProducts = async () => {
    debugger
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${productBaseController}products`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
         toastr.success("Products", "Success");
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};
