import {LOCALE_SET} from '../constants/ActionTypes';
import {apiSetLanguage} from '../api/locale';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => (dispatch) => {
    apiSetLanguage(lang).then(lang => {
        dispatch(localeSet(lang.interfaceLanguage))
    })
}