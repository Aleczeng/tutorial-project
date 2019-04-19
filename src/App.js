import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./pages/header/header";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <h1>Hello</h1>
            </Fragment>
        );
    }
}

export default App;
