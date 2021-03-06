import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Topic from "./component/Topic";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Writer from "./component/Writer";

const HomeUI = (props) => {
    return (
        <Fragment>
            <div className="my-home">
                <div className='my-home-left'>
                    <img src={require('../../assets/images/banner.png')} alt='banner'/>
                    <Topic/>
                    <List/>
                </div>
                <div className='my-home-right'>
                    <Recommend/>
                    <Writer/>
                </div>
                <div className="back-to-top" onClick={() => window.scroll(0, 0)}>Top</div>
            </div>
        </Fragment>
    )
};

export default HomeUI
