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
import {getAllCoupons} from './actions';
import GoodsContainer from './containers/GoodsContainer'
import CouponsContainer from './containers/CouponsContainer';
import {ApplicationForm} from "./components/ApplicationFormEntity";
import {Maps} from './components/Maps';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt)

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <h1>Main Page</h1>}/>
                <Route path="/login" component={Login}/>
                <Route path='/goods' component={GoodsContainer}/>
                <Route path='/coupons' component={CouponsContainer}/>
                <Route path='/ApplicationForm' component={ApplicationForm}/>
                <Route path='/Maps' component={Maps}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
