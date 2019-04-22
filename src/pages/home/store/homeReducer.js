import {fromJS} from "immutable";
import {INIT_HOME_CONTENT, SET_HOME_LIST} from "./action";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case INIT_HOME_CONTENT: {
            return state.merge({
                topicList: fromJS(action.value.topicList),
                articleList: fromJS(action.value.articleList),
            })
        }
        case SET_HOME_LIST: {
            return state.set('articleList', state.get('articleList').concat(action.value))
                .set('articlePage', action.nextPage)
        }
        default:
            return state;
    }
}
