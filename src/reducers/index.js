import {combineReducers} from 'redux'
import goods from './goods'
import modal from './modal';

const rootReducer = combineReducers({
    goods,
    modal
})

export default rootReducer
