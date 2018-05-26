import {LOCALE_SET, RESET_LOCALE} from '../constants/ActionTypes';

export default function locale(state = { lang: "ca" }, action = {}) {
    switch(action.type) {
        case LOCALE_SET:
            return { lang: action.lang }

        case RESET_LOCALE:
            return {}
        default: return state;
    }
}