import { getProductsReducers } from "./AppReducer/reducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { cartReducer } from "./CartReducer/reducer";

const rootreducer = combineReducers({
  getProducts: getProductsReducers,
  cart: cartReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
