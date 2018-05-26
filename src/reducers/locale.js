import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';


const getDefaultLocale = () => {
    const defaultLocale = 'ca'

    const userJSON = localStorage.getItem('user');
    if (userJSON)
        return JSON.parse(userJSON).interfaceLanguage || defaultLocale

    return defaultLocale
}

export default function locale(state = { lang: getDefaultLocale() }, action = {}) {
    switch(action.type) {
        case LOCALE_SET:
            return { lang: action.lang }

        case RESET_LOCALE:
            return { lang: getDefaultLocale() }
        default:
            return state
    }
}
