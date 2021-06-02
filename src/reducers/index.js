import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articleReducer from "../reducers/articleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReducer;
