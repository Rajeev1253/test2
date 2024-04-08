import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootreducer = combineReducers({
  auth: authReducer,

});
const persistedReducer = persistReducer(persistConfig, rootreducer);
export const store = configureStore({
  reducer: persistedReducer,

});
export const persistor = persistStore(store);