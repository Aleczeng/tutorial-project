import axios from "axios";

const initTopicList = value => ({
    type: INIT_TOPIC_LIST,
    value
});
export const SEARCH_FOCUS = 'SEARCH_FOCUS';
export const INIT_TOPIC_LIST = 'INIT_TOPIC_LIST';

export const searchFocus = () => ({
    type: SEARCH_FOCUS
});

export const getTopicList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(resp => {
            console.log(resp.data);
            dispatch(initTopicList(resp.data))
        }).catch(e => {
            console.log(e);
        })
    }
};
