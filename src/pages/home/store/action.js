import axios from "axios";

const initHomeContent = (value) => ({
    type: INIT_HOME_CONTENT,
    value
});

export const INIT_HOME_CONTENT = 'INIT_HOME_CONTENT';

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
