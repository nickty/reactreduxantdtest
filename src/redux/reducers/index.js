import { combineReducers } from "redux";
import { addressReducer } from "./addressReducer";
const reducers = combineReducers({
  allAddresses: addressReducer,
});
export default reducers;
