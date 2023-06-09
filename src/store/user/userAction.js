import { createAction } from "../../utils/reducer/Reducer";
import { USER_ACTION_TYPES } from "./userTypes";

export const setCurrentUser = (user) => {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
