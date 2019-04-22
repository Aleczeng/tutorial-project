import {fromJS} from "immutable";

const defaultState = fromJS({
    loginStatus: false
});

export default (state = defaultState, action) => {
    return state;
}
