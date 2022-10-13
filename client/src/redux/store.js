import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxCart";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
});
