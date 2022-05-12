import axios from "axios";
// import { getLoggedInUser } from '../helpers/authUtils';

import store from "../Store";
let aPIRootUrl = "";
const env = process.env.NODE_ENV;
// debugger
switch (env) {
  case "local":
    aPIRootUrl = process.env.REACT_APP_API_BASE_LOCAL_URL;
    break;
  case "development":
    aPIRootUrl = process.env.REACT_APP_API_BASE_DEV_URL;
    break;
  case "production":
    aPIRootUrl = process.env.REACT_APP_API_BASE_PROD_URL;
    break;
  default:
    aPIRootUrl = "";
}


const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userLoginData"));

const token = userDataFromLocalStorage === null ? '' : userDataFromLocalStorage.token;


const api = axios.create({
  baseURL: aPIRootUrl,
  headers: { "x-access-token": token, 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json', 

},
});

// api.interceptors.request.use(function (config) {
//   const state = typeof store !== 'undefined' ? store.getState() : { auth: {} };
//   const user = state.auth
//   const token = user.authUser === null ? '' : user.authUser.token;
//   config.headers.Authorization = `Bearer ${token}`;
//   return config
// })

export default api;
