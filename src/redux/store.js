import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";



const rootReducer = combineReducers({
    auth: authReducer,
    // profile: profileReducer,
    // cart: cartReducer,
  });
  
export const store = configureStore({
  reducer: rootReducer,
});
