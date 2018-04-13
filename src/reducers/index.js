import {combineReducers} from 'redux'
import coupons from './coupons'
import modal from './modal';

const rootReducer = combineReducers({
    coupons,
    modal
})

export default rootReducer
