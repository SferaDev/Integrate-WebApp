import {apiPostLogin} from '../api';
import {
    SET_LOGIN_ERROR,
    SET_LOGIN_PENDING,
    SET_LOGIN_SUCCESS
} from '../constants/index';


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
    }
}

export function loginAction(id, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        apiPostLogin({id, password})
            .then(() => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(error => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(false));
                dispatch(setLoginError(error))
            })
    }
}