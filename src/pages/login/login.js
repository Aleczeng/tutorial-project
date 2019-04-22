import React, {Fragment, PureComponent} from 'react'
import {connect} from "react-redux";
import './login.css'
import {login} from "./store/action";


class Login extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="login-wrapper">
                    <div className="login-box">
                        <label htmlFor='username'>Username</label>
                        <input className="form-control" id="username"/>
                        <label htmlFor='password'>Password</label>
                        <input className="form-control" id="password"/>
                        <button className="btn btn-primary login-btn" onClick={this.props.login}>Login</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.login.get('loginStatus')
});

const mapDispatchToProps = (dispatch) => ({
    login() {
        dispatch(login())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
