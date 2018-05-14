import {LOCALE_SET} from '../constants/ActionTypes';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => (dispatch) => {
    dispatch(localeSet(lang))
}