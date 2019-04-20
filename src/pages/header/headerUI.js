import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFeather} from "@fortawesome/free-solid-svg-icons/faFeather";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class HeaderUI extends Component {
    render() {
        const {focus, focusSearchStatus, blurSearchStatus, topicList} = this.props;
        return (
            <Fragment>
                <nav className="navbar navbar-expand">
                    <img className="logo float-left" src={require("../../assets/images/logo.png")} alt="logo"/>
                    <div className="collapse navbar-collapse float-left">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                        <div>
                            <input className="my-search" placeholder="Search"
                                   onFocus={() => focusSearchStatus(topicList)}
                                   onBlur={blurSearchStatus}/>
                            <span className="search-btn">
                            <FontAwesomeIcon icon={faSearch}/>
                        </span>
                            {this.getSearchArea(focus)}
                        </div>
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Aa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <button className="btn my-2 my-sm-0 register-btn">Register</button>
                        <button className="btn my-2 my-sm-0 write-btn"><FontAwesomeIcon icon={faFeather}/>&nbsp;
                            Write article
                        </button>
                    </ul>
                </nav>
            </Fragment>
        )
    }

    getSearchArea = (focus) => {
        const {topicList} = this.props;
        if (focus) {
            return (
                <div className="search-info">
                    <div className="search-info-title">Popular topic
                        <span className="search-info-change">Change</span>
                    </div>
                    <div className="search-item-list">
                        {topicList.map(topic =>
                            <div className="search-item" key={topic.id}>{topic.title}</div>)}
                    </div>
                </div>
            )
        } else return null;
    };
}

export default HeaderUI
