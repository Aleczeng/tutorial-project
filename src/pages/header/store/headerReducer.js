import {fromJS} from "immutable";
import {SEARCH_FOCUS} from "./action";

const defaultState = fromJS({
    focus: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case (SEARCH_FOCUS): {
            if (state.get('focus') === false) {
                return state.set('focus', true)
            } else {
                return state.set('focus', false)
            }
        }
        default:
            return state;
    }
}
