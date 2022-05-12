import { 
    
    ADD_PRODUCT_SUCCESS, 
    FETCH_PRODUCT_SUCCESS,
    RESTORE_PRODUCTS_INITIAL,
} from "../ActionTypes/actionTypes";

const INIT_STATE = {
  productCreated: false,
  products: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        productCreated: true,
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case RESTORE_PRODUCTS_INITIAL: {
        return {
          ...state,
          products: [],
          productCreated: false,


        };
      }

    default:
      return state;
  }
};
