import React, {Component} from 'react'
import {connect} from "react-redux";
import HeaderUI from "./headerUI";
import {searchFocus} from "./store/action";

class Header extends Component {
    render() {
        return <HeaderUI
            changeSearchStatus={this.props.changeSearchStatus}
            focus={this.props.focus}
        />
    }
}

const mapState = (state) => ({
    focus: state.header.get('focus')
});

const mapDispatch = (dispatch) => ({
    changeSearchStatus() {
        dispatch(searchFocus()); //must be a function
    }
});

export default connect(mapState, mapDispatch)(Header);
