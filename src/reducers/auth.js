import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants';
import {LOG_OUT} from '../constants/ActionTypes';

function authReducer(state = {
    user: null,
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };

        case LOG_OUT:
            return { }

        default:
            return state;
    }
}

export default authReducer;