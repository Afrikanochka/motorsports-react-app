import { createAction } from "@reduxjs/toolkit";

export const registration = createAction("auth/signUp");
export const login = createAction("auth/signIn");