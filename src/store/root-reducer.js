import { combineReducers } from "redux";
import { useReducer } from "react";
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoryReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
