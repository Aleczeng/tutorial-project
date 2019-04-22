import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";

class List extends Component {
    render() {
        return (
            <Fragment>
                {this.getArticleList()}
                <div className="load-more">More</div>
            </Fragment>
        )
    }

    getArticleList = () => {
        return (
            this.props.articleList.map(article => {
                return (
                    <div className='article-list' key={article.get('id')}>
                        <div className='article-content'>
                            <h3>{article.get('title')}</h3>
                            <p>{article.get('content')}</p>
                        </div>
                        <img src={require('../../../assets/images/topic-img1.png')} alt='pic'/>
                    </div>
                )
            })
        )
    }
}

const mapState = (state) => ({
    articleList: state.home.get('articleList')
});

export default connect(mapState, null)(List)
