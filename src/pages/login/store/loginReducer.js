import {fromJS} from "immutable";
import {LOGIN, LOGOUT} from "./action";

const defaultState = fromJS({
    loginStatus: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN: {
            console.log(state.get('loginStatus'));
            return state.set('loginStatus', true);
        }
        case LOGOUT: {
            return state.set('loginStatus', false);
        }
        default:
            return state
    }
}
