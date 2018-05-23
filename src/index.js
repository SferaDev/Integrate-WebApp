import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import store from './store';
import LoginContainer from './containers/Login';
import MainViewContainer from './containers/MainView';
import ChangePasswordContainer from './containers/ChangePassword';
import PasswordRecoveryContainer from './containers/PasswordRecovery';
import GoodsContainer from './containers/Goods';
import SignupContainer from './containers/Signup';

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginContainer}/>
                <Route path="/signup" component={SignupContainer}/>
                <Route path='/goods' component={GoodsContainer}/>
                <Route path='/reset' component={PasswordRecoveryContainer}/>
                <Route path='/changepassword' component={ChangePasswordContainer}/>
                <Route path='/main' component={MainViewContainer}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
