import axios from "axios";
import {fromJS} from "immutable";

const initHomeContent = (value) => ({
    type: INIT_HOME_CONTENT,
    value
});

const setHomeList = (value, nextPage) => ({
    type: SET_HOME_LIST,
    value: fromJS(value),
    nextPage
});

export const INIT_HOME_CONTENT = 'INIT_HOME_CONTENT';
export const SET_HOME_LIST = 'SET_HOME_LIST';

export const getHomeContent = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(resp => {
            console.log(resp.data);
            dispatch(initHomeContent(resp.data));
        }).catch(e => {
            console.log(e);
        })
    }
};

export const getMoreList = (articlePage) => {
    console.log(articlePage);
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + articlePage).then(resp => {
            dispatch(setHomeList(resp.data.list, articlePage + 1));
        }).catch(e => {
            console.log(e);
        })
    }
};
