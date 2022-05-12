import { LOGIN_SUCCESS } from "../ActionTypes/actionTypes";

const INIT_STATE = {
  userLoginData: {},
  userLoggedIn: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        userLoginData: action.payload,
        userLoggedIn: true,
      };
    }

    default:
      return state;
  }
};
