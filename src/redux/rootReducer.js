import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["idToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export default rootReducer;