import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

import store from './store';
import Login from './containers/Login';
import PasswordRecovery from './components/PasswordRecovery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import GoodsContainer from './containers/Goods';
import SignupContainer from './containers/Signup';


fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={SignupContainer}/>
                <Route path='/goods' component={GoodsContainer}/>
                <Route path='/reset' component={PasswordRecovery}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
