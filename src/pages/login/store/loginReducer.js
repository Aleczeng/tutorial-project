import {fromJS} from "immutable";
import {LOGIN} from "./action";

const defaultState = fromJS({
    loginStatus: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN: {
            return state.set('loginStatus', true);
        }
        default:
            return state
    }
}
