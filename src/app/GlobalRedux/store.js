"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/UserSlice";

const rootReducer = combineReducers({
  user: userReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
