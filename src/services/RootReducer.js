import { combineReducers } from "redux";
import SubmitReducer from "./reducers/SubmitReducer";

const RootReducer = combineReducers({
    SubmitReducer,
})

export default RootReducer;