import api from "../Service/Api";
import { toastr } from "react-redux-toastr";


/**
 * represents the base controller from the API
 */

const baseController = "api/v1/gbi/auth/";

export const authenticate = async (body) => {

  if (navigator.onLine === false) {
    toastr.error('No Internet Connection', 'Please try again');
} else {
  try {
    const response = await api.post(`${baseController}login`, body);
    if (typeof response !== "undefined"){

      if (response.status === 200 && response.data.status === true ) {
        localStorage.clear();
        toastr.success('Login Successful', `Welcome Back ${response.data.data.firstname}`);  
        localStorage.setItem("userLoginData", JSON.stringify(response.data.data));
        return response.data.data;
      }

    }
      else {
        toastr.error("Log in", response.data.message);
      }
  } catch (ex) {
    toastr.error("Log in", "An error occured");
  }

}
  
};

