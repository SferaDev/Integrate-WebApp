<<<<<<< HEAD
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import todoApp from './reducers'
import applyMiddleware from 'redux/es/applyMiddleware';
import Provider from 'react-redux/es/components/Provider';
import thunk from 'redux-thunk';
=======
import React from 'react';
import {render} from 'react-dom';
import Login from './containers/Login';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

>>>>>>> b43e9562fab5834caf23453b1d60db32d441084f
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
<<<<<<< HEAD
import {BrowserRouter, Route} from 'react-router-dom';
import {Login} from './components/Login';
import Switch from 'react-router-dom/es/Switch';
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
)
=======
>>>>>>> b43e9562fab5834caf23453b1d60db32d441084f

render(
    <Provider store={store}>
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route exact path='/' component={Login}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/coupons' component={GoodsContainer}/>
=======
                <Route exact path="/" render={() => <h1>Main Page</h1>}/>
                <Route path="/login" component={Login}/>
>>>>>>> b43e9562fab5834caf23453b1d60db32d441084f
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);