import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Auth from './Auth';
import Product from "./Product";



import {reducer as toastrReducer} from 'react-redux-toastr';


export default (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  product: Product,


  toastr: toastrReducer,

});
