import React, {Fragment, PureComponent} from 'react'
import {connect} from "react-redux";
import './login.css'


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
                        <button className="btn btn-primary login-btn">Login</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
