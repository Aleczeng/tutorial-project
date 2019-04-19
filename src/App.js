import React, {Component, Fragment} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import Header from "./pages/header/header";
import {Provider} from "react-redux";
import store from './store/store'

library.add(faStroopwafel);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <h1>Hello</h1>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
