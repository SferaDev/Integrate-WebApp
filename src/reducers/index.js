import {combineReducers} from 'redux';
import goods from './goods';
import modal from './modal';
import auth from './auth';
import locale from './locale';
import incentives from './incentives';

export default combineReducers({
    auth,
    goods,
    modal,
    locale,
    incentives,
});
