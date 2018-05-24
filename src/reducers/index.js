import {combineReducers} from 'redux';
import goods from './goods';
import modal from './modal';
import auth from './auth';
import locale from './locale';

export default combineReducers({
    auth,
    goods,
    modal,
    locale,
});
