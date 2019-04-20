import React, {Component} from 'react'
import {connect} from "react-redux";
import HeaderUI from "./headerUI";
import {getTopicList, searchFocus} from "./store/action";

class Header extends Component {
    render() {
        return <HeaderUI
            focusSearchStatus={this.props.focusSearchStatus}
            blurSearchStatus={this.props.blurSearchStatus}
            focus={this.props.focus}
            topicList={this.props.topicList}
        />
    }
}

const mapState = (state) => ({
    focus: state.header.get('focus'),
    topicList: state.header.get('topicList')
});

const mapDispatch = (dispatch) => ({
    focusSearchStatus() {
        dispatch(searchFocus());
        dispatch(getTopicList()); //must be a function
    },
    blurSearchStatus() {
        dispatch(searchFocus());
    },
});

export default connect(mapState, mapDispatch)(Header);
