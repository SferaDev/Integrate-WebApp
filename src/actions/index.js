import * as types from '../constants/ActionTypes'

export const addCoupon = (coupon) =>
    ({
        type: types.ADD_COUPON,
        coupon,
    })

export const dispatchAddCoupon = (coupon) => dispatch => {
    dispatch(addCoupon(coupon))
}

export const deleteCoupon = coupon => ({type: types.DELETE_COUPON, coupon})

export const dispatchDeleteCoupon = (coupon) => dispatch => {
    dispatch(deleteCoupon(coupon))
}

export const editCoupon = (coupon) =>
    ({
        type: types.EDIT_COUPON,
        coupon
    })

export const dispatchEditCoupon = (coupon) => dispatch => {
    dispatch(editCoupon(coupon))
}

export const toggleModal = () =>
    ({type: types.TOGGLE_MODAL})

export const toggleModalEdit = (coupon) =>
    ({
        type: types.TOGGLE_MODAL_EDIT,
        coupon
    })

export const dispatchToggleModal = () => dispatch => {
    dispatch(toggleModal())
}

export const dispatchToggleModalEdit = (coupon) => dispatch => {
    dispatch(toggleModalEdit(coupon))
}

export const cleanModalState = () =>
    ({type: types.CLEAN_MODAL_STATE})

export const dispatchCleanModalState = () => dispatch => {
    alert('Cleaning modal state')
    dispatch(cleanModalState())
}

