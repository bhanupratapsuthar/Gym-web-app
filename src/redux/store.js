import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import blogReducer from "./slices/blogSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  // profile: profileReducer,
  cart: cartReducer,
  blogs: blogReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);