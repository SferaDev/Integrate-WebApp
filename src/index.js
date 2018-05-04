import React from 'react';
import {render} from 'react-dom';
import Login from './containers/Login';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import GoodsContainer from './containers/GoodsContainer'

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt)

const middleware = [thunk];

const store = createStore(
    todoApp,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <h1>Main Page</h1>}/>
                <Route path="/login" component={Login}/>
                <Route path='/goods' component={GoodsContainer}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
