import React, {Component} from 'react'
import HeaderUI from "./headerUI";
import {connect} from "react-redux";
import {SEARCH_FOCUS, searchFocus} from "./store/action";

class Header extends Component {
    render() {
        return <HeaderUI changeSearchStatus={this.props.changeSearchStatus}/>
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
