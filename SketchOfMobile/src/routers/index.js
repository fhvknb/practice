import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../containers/home';


export default function Root() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </Router>
    );
}
