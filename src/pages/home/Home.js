import React, {Component} from 'react'
import {connect} from "react-redux";
import HomeUI from "./HomeUI";

class Home extends Component {
    render() {
        return <HomeUI/>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
