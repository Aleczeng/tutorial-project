import React, {PureComponent} from 'react'
import DetailUI from "./DetailUI";
import {connect} from "react-redux";

class Detail extends PureComponent {
    render() {
        return <DetailUI/>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
