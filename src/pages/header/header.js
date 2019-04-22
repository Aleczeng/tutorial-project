import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import HeaderUI from "./headerUI";
import {getTopicList, searchFocus} from "./store/action";

class Header extends PureComponent {
    render() {
        return <HeaderUI
            focusSearchStatus={this.props.focusSearchStatus}
            blurSearchStatus={this.props.blurSearchStatus}
            focus={this.props.focus}
            topicList={this.props.topicList}
            loginStatus={this.props.loginStatus}
        />
    }
}

const mapState = (state) => ({
    focus: state.header.get('focus'),
    topicList: state.header.get('topicList'),
    loginStatus: state.login.get('loginStatus')
});

const mapDispatch = (dispatch) => ({
    focusSearchStatus(topicList) {
        if (topicList.size != null && topicList.size === 0) {
            dispatch(getTopicList()); //must be a function
        }
        dispatch(searchFocus());
    },
    blurSearchStatus() {
        dispatch(searchFocus());
    },
});

export default connect(mapState, mapDispatch)(Header);
