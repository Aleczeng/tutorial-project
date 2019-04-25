import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const changeLoginStatus = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
});

export const login = (accountName, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?accountName=' + accountName + '&password=' + password)
            .then(resp => {
                console.log(resp.data);
                if (resp.data.data) {
                    console.log(resp.data.data);
                    dispatch(changeLoginStatus())
                }
            });
    }
};
