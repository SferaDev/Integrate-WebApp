import React from 'react'
import {Login} from '../components/Login';
import './style.css';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

fontawesome.library.add(brands, faCheckSquare, faCoffee)

const App = () => (
    <div className="appContainer">
        <Login/>
    </div>
)

export default App