import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux_slice/authSlice";
import toggleSlice from "../redux_slice/toggleSlice";
import dbSlice from "../redux_slice/dbSlice"

const appStore = configureStore({
  reducer: {
    auth: authSlice,
    toggle: toggleSlice,
    project: dbSlice
  },
});

export default appStore;
