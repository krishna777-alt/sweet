import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../fatures/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
