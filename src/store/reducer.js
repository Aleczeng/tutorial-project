import {combineReducers} from "redux";
import headerReducer from "../pages/header/store/headerReducer";
import homeReducer from "../pages/home/store/homeReducer";
import loginReducer from "../pages/login/store/loginReducer";

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer
})
