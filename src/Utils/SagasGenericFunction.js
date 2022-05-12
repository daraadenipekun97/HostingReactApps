import { call, put } from "redux-saga/effects";
// import { toastr } from "react-redux-toastr";

export default function* (successFunction, ...aPIRequestFunction) {
  try {
    const response = yield call(...aPIRequestFunction);
      if (typeof response !== "undefined") {
        if (typeof successFunction === "function") yield put(successFunction(response));
      } else {
        // yield put(toastr.error("Sign in", "Something went wrong"));
        // yield put(showMessage({ message: response.msg, severity: 0 }));
      }
     
  } catch (ex) {
    // yield put(toastr.error("Sign in", "error in fetching data"));
    // yield put(showMessage({ message: "error in fetching data", severity: 0 }));
  }
}
