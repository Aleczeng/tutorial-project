import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'Redux'
    }, {
        id: 2,
        title: 'Router'
    }, {
        id: 3,
        title: 'Axios'
    }, {
        id: 4,
        title: 'Thunk'
    }, {
        id: 5,
        title: 'CSS'
    }]
});

export default (state = defaultState, action) => {
    return state;
}
