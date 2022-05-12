import { LOGIN, LOGIN_SUCCESS } from "../ActionTypes/actionTypes";

export const userLogin = ({ email, password }) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const userLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
