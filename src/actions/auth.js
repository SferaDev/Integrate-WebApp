import {apiPostLogin} from '../api';
import {SET_LOGIN_ERROR, SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_USER} from '../constants';
import {resetGoods} from './goods';
import {resetLocale} from './locale';
import {cleanModalState} from './modal';
import {LOG_OUT} from '../constants/ActionTypes';

export function setUserAndToken(user, token) {
    return {
        type: SET_USER,
        user,
        token,
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
        localStorage.clear();
        dispatch(logout())
    }
}

export function loginAction(id, password) {
    return dispatch => {
        dispatch(setUserAndToken(null, null));
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        apiPostLogin({id, password}).then(auth => {
            dispatch(setUserAndToken(auth.user, auth.token));
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            dispatch(setLoginError(null));
        }).catch(error => {
            dispatch(logout());
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(false));
            dispatch(setLoginError(error));
        })
    }
}