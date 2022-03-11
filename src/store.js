import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./state-management/userReducer";

export const store = configureStore({
  reducer: userReducer,
});
