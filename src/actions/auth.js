import {apiPostLogin} from '../api';
import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants';
import {resetGoods} from './goods';
import {resetLocale} from './locale';
import {cleanModalState} from './modal';
import {LOG_OUT} from '../constants/ActionTypes';

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    };
}

export function loginAction(id, password) {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(setUser(null));
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        apiPostLogin({id, password}).then(auth => {
            localStorage.setItem('token', auth.token);
            localStorage.setItem('user', JSON.stringify(auth.user))
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            dispatch(setLoginError(null));
        }).catch(error => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(false));
            dispatch(setLoginError(error));
        })
    }
}

export function logout(){
    return {
        type: LOG_OUT,
    }
}

export function logoutAction(){
    return dispatch => {
        dispatch(resetGoods());
        dispatch(resetLocale());
        dispatch(cleanModalState());
        dispatch(logout())
    }
}