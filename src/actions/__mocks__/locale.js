import {LOCALE_SET, RESET_LOCALE} from '../../constants/ActionTypes';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => (dispatch) => {
    dispatch(localeSet(lang))
}

export const resetLocale = () => ({
    type: RESET_LOCALE,
})