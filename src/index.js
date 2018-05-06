import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

import store from './store';
import Login from './containers/Login';
import SignUp from './components/Signup';
import PasswordRecovery from './components/PasswordRecovery'

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import GoodsContainer from './containers/GoodsContainer/GoodsContainer';

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <h1>Main Page</h1>}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path='/goods' component={GoodsContainer}/>
                <Route path='/reset' component={PasswordRecovery}/>

            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
