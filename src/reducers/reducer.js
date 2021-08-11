import * as redux from "redux";
import AReducer from "./AReducer.js";
import BReducer from "./BReducer.js";

export const rootReducer = redux.combineReducers({
  a: AReducer,
  b: BReducer
});
