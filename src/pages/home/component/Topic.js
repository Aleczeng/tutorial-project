import React, {Component, Fragment} from 'react'
import '../Home.css'
import {connect} from "react-redux";

class Topic extends Component {

    render() {
        return (
            <Fragment>
                <div className="topic-wrapper">
                    {this.getTopicList()}
                </div>
            </Fragment>
        )
    }

    getTopicList = () => {
        return (this.props.list.map(topic => {
                return (
                    <div className="topic-item" key={topic.get('id')}>
                        <img src={require('../../../assets/images/topic-img1.png')} alt="topic-img"/>
                        {topic.get('title')}
                    </div>
                )
            })
        )
    };
}

const mapState = (state) => ({
    list: state.home.get('topicList')
});
const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(Topic)
