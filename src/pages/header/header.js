import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg">
                    <img className="logo" src={require("../../assets/images/logo.png")} alt="logo"/>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Header
