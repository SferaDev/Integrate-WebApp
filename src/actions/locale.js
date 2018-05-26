import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';
import {apiSetLanguage} from '../api/locale';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => (dispatch) => {
    apiSetLanguage(lang).then(res => {
        console.log('setLocale lang', res.interfaceLanguage)
        let user = JSON.parse(localStorage.getItem('user'))
        user.interfaceLanguage = res.interfaceLanguage
        console.log('setLocale user', user)
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(localeSet(user.interfaceLanguage))
    })
}

export const resetLocale = () => ({
    type: RESET_LOCALE,
})