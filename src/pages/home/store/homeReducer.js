import {fromJS} from "immutable";

const defaultState = fromJS({
    header: true
});

export default (state = defaultState, action) => {
    return state;
}
