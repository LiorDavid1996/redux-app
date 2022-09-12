
import userReducer from "./user-reducer";
import adminReducer from "./admin-reducer";
import { combineReducers } from "redux";

export default combineReducers({
    userReducer,adminReducer
})