import {combineReducers} from "redux";
import headerReducer from "../pages/header/store/headerReducer";
import homeReducer from "../pages/home/store/homeReducer";

export default combineReducers({
    header: headerReducer,
    home: homeReducer
})
