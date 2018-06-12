import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';
import {localStorage} from "../utils/localstorage";
import {apiSetLanguage} from '../api/locale';
import {logoutAction} from './auth';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => (dispatch) => {
    const userJSON = localStorage.getItem('user');
    if (userJSON !== null) {
        return apiSetLanguage(lang).then(res => {
            let user = JSON.parse(userJSON)
            user.interfaceLanguage = res.interfaceLanguage
            localStorage.setItem('user', JSON.stringify(user))
            dispatch(localeSet(user.interfaceLanguage))
        })
            .catch(() => {
                dispatch(logoutAction())
            })
    } else {
        return new Promise((resolve, reject) => {
            resolve(dispatch(localeSet(lang)))
            resolve(lang)
        })
    }
}

export const resetLocale = () => ({
    type: RESET_LOCALE,
})