import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import HomeUI from "./HomeUI";
import {getHomeContent} from "./store/action";

class Home extends PureComponent {
    render() {
        return <HomeUI/>
    }

    componentDidMount() {
        this.props.getHomeContent();
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.home.get('showScroll'),
});

const mapDispatchToProps = (dispatch) => ({
    getHomeContent() {
        dispatch(getHomeContent());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
