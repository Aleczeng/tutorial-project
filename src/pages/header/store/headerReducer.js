import {fromJS} from "immutable";
import {INIT_TOPIC_LIST, SEARCH_FOCUS} from "./action";

const defaultState = fromJS({
    focus: false,
    topicList: []
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
        case (INIT_TOPIC_LIST): {
            return state.set('topicList', action.value);
        }
        default:
            return state;
    }
}
