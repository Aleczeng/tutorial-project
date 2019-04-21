import {fromJS} from "immutable";
import {INIT_HOME_CONTENT} from "./action";

const defaultState = fromJS({
    topicList: [],
    articleList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case INIT_HOME_CONTENT: {
            return state.merge({
                topicList: fromJS(action.value.topicList),
                articleList: fromJS(action.value.articleList),
            })
        }
        default:
            return state;
    }
}
