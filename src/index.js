import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import todoApp from './reducers'
import applyMiddleware from 'redux/es/applyMiddleware';
import Provider from 'react-redux/es/components/Provider';
import thunk from 'redux-thunk';
import {getAllCoupons} from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Login} from './components/Login';
import Switch from 'react-router-dom/es/Switch';
import CouponsContainer from './containers/CouponsContainer';
import {Form} from './components/Form';
import {Maps} from './components/Maps';



const middleware = [thunk];

const store = createStore(
    todoApp,
    applyMiddleware(...middleware)
)

store.dispatch(getAllCoupons())

render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={Login}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/coupons' component={CouponsContainer}/>
                <Route path='/Form' component={Form}/>
                <Route path='/Maps' component={Maps}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)