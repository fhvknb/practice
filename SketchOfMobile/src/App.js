import React, { Component } from 'react';
import AppRouter from './routers';
import './App.css';
import 'flex.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return <AppRouter />;
    }
}

export default App;
