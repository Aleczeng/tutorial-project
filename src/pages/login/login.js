import React, {Fragment, PureComponent} from 'react'
import {connect} from "react-redux";
import './login.css'
import {login} from "./store/action";
import {Redirect} from "react-router-dom";


class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <Fragment>
                    <div className="login-wrapper">
                        <div className="login-box">
                            <label htmlFor='username'>Username</label>
                            <input className="form-control" id="username"
                                   ref={(input => this.accountName = input)}/>

                            <label htmlFor='password'>Password</label>
                            <input className="form-control" id="password" type="password"
                                   ref={(input => this.password = input)}/>
                            <button className="btn btn-primary login-btn"
                                    onClick={() => this.props.login(this.accountName.value, this.password.value)}>Login
                            </button>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return <Redirect to="/"/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.login.get('loginStatus')
});

const mapDispatchToProps = (dispatch) => ({
    login(accountName, password) {
        console.log(accountName, password);
        dispatch(login())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
