import { createReducer } from "@reduxjs/toolkit";
import { login, registration } from "./actions";

export const authReducer = createReducer(
  {},
  {
    [registration]: (_, { payload }) => payload,
    [login]: (_, { payload }) => payload,
  }
);