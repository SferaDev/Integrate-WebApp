import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import fontawesome from '@fortawesome/fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import store from './store'
import App from './containers/App'

fontawesome.library.add(faCoffee, faPlusCircle, faEdit, faTrashAlt)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
