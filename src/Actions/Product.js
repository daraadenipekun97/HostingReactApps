import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  RESTORE_PRODUCTS_INITIAL
} from "../ActionTypes/actionTypes";

export const addProduct = ({
  category,
  product_code,
  product_type,
  name,
  cost_price,
  selling_price,
  quantity,
  product_image,
  tax_method,
  tax,
  product_details,
  alert_quantity,
}) => ({
  type: ADD_PRODUCT,
  payload: {
    category,
    product_code,
    product_type,
    name,
    cost_price,
    selling_price,
    quantity,
    product_image,
    tax_method,
    tax,
    product_details,
    alert_quantity,
  },
});

export const addProductSuccess = (payload) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload,
});

export const fetchProduct = () => ({
  type: FETCH_PRODUCT,
});

export const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});

export const restoreProductsInitial = () => ({
    type: RESTORE_PRODUCTS_INITIAL
});