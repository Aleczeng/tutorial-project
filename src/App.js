import React, {Component, Fragment} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import Header from "./pages/header/header";
import {Provider} from "react-redux";
import store from './store/store'
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login/loadable";

library.add(faStroopwafel);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Route path='/login' exact component={Login}/>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
