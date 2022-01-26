import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-slice";

const myMiddelware = () => (next) => (action) => {
  console.log("======My Middleware==========");
  next(action);
};

export const stroe = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (def) => def().concat(myMiddelware),
  devTools: process.env.NODE_ENV !== "production",
});
