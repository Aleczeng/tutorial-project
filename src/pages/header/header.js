import React, {Component} from 'react'
import HeaderUI from "./headerUI";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return <HeaderUI/>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
