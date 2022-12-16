import {getProductsReducers as AppReducer} from "./reducer"
import thunk from "redux-thunk"
import { applyMiddleware, legacy_createStore } from "redux"

// const rootReducer = ({AppReducer})
export const store = legacy_createStore(AppReducer,applyMiddleware(thunk))