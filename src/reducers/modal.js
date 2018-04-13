import {TOGGLE_MODAL_ADDCOUPON, TOGGLE_MODAL_EDITCOUPON} from '../constants/ActionTypes';

const initialState = {
    modalAddCoupon: {
        isOpen: false
    },
    modalEditCoupon: {
        isOpen: false
    },
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL_ADDCOUPON:
            return {
                ...state,
                modalAddCoupon: {
                    isOpen: !state.modalAddCoupon.isOpen
                }
            }

        case TOGGLE_MODAL_EDITCOUPON:
            return {
                ...state,
                modalEditCoupon: {
                    isOpen: !state.modalEditCoupon.isOpen
                }
            }

        default:
            return state
    }
}
