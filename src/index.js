import React from 'react';
import {render} from 'react-dom';
import Login from './containers/Login';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <h1>Main Page</h1>}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);