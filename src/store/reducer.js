import {combineReducers} from "redux";
import headerReducer from "../pages/header/store/headerReducer";

export default combineReducers({
    header: headerReducer
})
