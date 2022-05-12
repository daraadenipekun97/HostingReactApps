import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/SagasGenericFunction";

import { ADD_PRODUCT, FETCH_PRODUCT } from "../ActionTypes/actionTypes";

import { createProduct, getProducts } from "../Api";

import { addProductSuccess, fetchProductSuccess } from "../Actions";

export const addProductRequest = function* ({ payload }) {
  yield call(requestFunction, addProductSuccess, createProduct, payload);
};

export const addProducts = function* () {
  yield takeEvery(ADD_PRODUCT, addProductRequest);
};

const fetchProductsRequest = function* ({payload}) {
  yield call(requestFunction, fetchProductSuccess, getProducts, payload);
};

export const fetchProducts = function* () {
  yield takeEvery(FETCH_PRODUCT, fetchProductsRequest);
};

export default function* rootSaga() {
  yield all([fork(addProducts), fork(fetchProducts)]);
}
