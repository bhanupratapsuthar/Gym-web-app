import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productSlice";



const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    // profile: profileReducer,
    // cart: cartReducer,
  });
  
export const store = configureStore({
  reducer: rootReducer,
});
