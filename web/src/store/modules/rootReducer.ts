import { combineReducers } from "redux";

import task from "./task/reducer";
import user from "./user/reducer";
import timer from "./timer/reducer";

export default combineReducers({
  task,
  timer,
  user,
});
