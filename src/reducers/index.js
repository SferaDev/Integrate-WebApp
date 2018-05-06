import {combineReducers} from 'redux';
import goods from './goods';
import modal from './modal';
import auth from './auth';

export default combineReducers({
    auth,
    goods,
    modal
});
