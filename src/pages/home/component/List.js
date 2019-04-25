import React, {PureComponent, Fragment} from 'react'
import {connect} from "react-redux";
import {getMoreList} from "../store/action";
import {NavLink} from "react-router-dom";

class List extends PureComponent {

    render() {
        const {articlePage} = this.props;
        return (
            <Fragment>
                {this.getArticleList(articlePage)}
                <div className="load-more" onClick={() => this.props.getMoreList(articlePage)}>More</div>
            </Fragment>
        )
    }

    getArticleList = () => {
        return (
            this.props.articleList.map((article, index) => {
                return (
                    <div className='article-list' key={index}>
                        <div className='article-content'>
                            <h3>
                                <NavLink to={"/detail/" + article.get('id')}>{article.get('title')}</NavLink>
                            </h3>
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
    articleList: state.home.get('articleList'),
    articlePage: state.home.get('articlePage')
});

const mapDispatch = (dispatch) => ({
    getMoreList(articlePage) {
        dispatch(getMoreList(articlePage));
    }
});

export default connect(mapState, mapDispatch)(List)
