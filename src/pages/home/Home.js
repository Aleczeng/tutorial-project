import React, {Component} from 'react'
import {connect} from "react-redux";
import HomeUI from "./HomeUI";
import {getHomeContent} from "./store/action";

class Home extends Component {
    render() {
        return <HomeUI/>
    }

    componentDidMount() {
        this.props.getHomeContent();
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => ({
    getHomeContent() {
        dispatch(getHomeContent());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
