import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/SagasGenericFunction";

import { LOGIN } from "../ActionTypes/actionTypes";

import { authenticate } from "../Api";

import { userLoginSuccess } from "../Actions";

export const loginRequest = function* ({ payload }) {
  yield call(requestFunction, userLoginSuccess, authenticate, payload);
};

export const userLogins = function* () {
  yield takeEvery(LOGIN, loginRequest);
};

export default function* rootSaga() {
  yield all([fork(userLogins)]);
}


  