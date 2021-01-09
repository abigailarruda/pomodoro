import { combineReducers } from "redux";

import task from "./task/reducer";
import timer from "./timer/reducer";
import user from "./user/reducer";

export default combineReducers({
  task,
  timer,
  user,
});
