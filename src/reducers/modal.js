import {CLEAN_MODAL_STATE, TOGGLE_MODAL, TOGGLE_MODAL_EDIT,} from '../constants/ActionTypes';

const initialState = {
    isOpen: false,
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen,
            }

        case TOGGLE_MODAL_EDIT:
            return {
                ...state,
                isOpen: !state.isOpen,
                coupon: action.coupon,
            }

        case CLEAN_MODAL_STATE:
            return {
                ...state,
                coupon: undefined
            }

        default:
            return state
    }
}
