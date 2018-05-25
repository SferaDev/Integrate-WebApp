import {LOCALE_SET} from '../constants/ActionTypes';

export default function locale(state = { lang: "ca" }, action = {}) {
    switch(action.type) {
        case LOCALE_SET:
            return { lang: action.lang }
        default: return state;
    }
}