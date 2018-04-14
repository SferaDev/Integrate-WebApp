import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import todoApp from './reducers'
import applyMiddleware from 'redux/es/applyMiddleware';
import Provider from 'react-redux/es/components/Provider';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Login} from './components/Login';
import Switch from 'react-router-dom/es/Switch';
import CouponsContainer from './containers/CouponsContainer';
import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt)
import {ApplicationForm} from './components/ApplicationFormEntity';

const middleware = [thunk];

const store = createStore(
    todoApp,
    applyMiddleware(...middleware)
)

render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={Login}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/coupons' component={CouponsContainer}/>
                <Route path='/ApplicationForm' component={ApplicationForm}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)