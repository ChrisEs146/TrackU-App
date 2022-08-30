import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/user";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
