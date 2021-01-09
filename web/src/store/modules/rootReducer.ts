import { combineReducers } from "redux";

import task from "./task/reducer";
import user from "./user/reducer";

export default combineReducers({
  task,
  user,
});
