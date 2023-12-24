"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/user/UserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
