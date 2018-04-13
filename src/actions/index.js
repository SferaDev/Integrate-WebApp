import * as types from '../constants/ActionTypes'

export const addCoupon = (productName, picture, discountType, discount, category, reusePeriod, initialPrice, pendingUnits) =>
    ({
        type: types.ADD_COUPON,
        productName,
        picture,
        discountType,
        discount,
        category,
        reusePeriod,
        initialPrice,
        pendingUnits
    })

export const deleteCoupon = id => ({type: types.DELETE_COUPON, id})

export const editCoupon = (id, productName, picture, discountType, discount, category, reusePeriod, initialPrice, pendingUnits) =>
    ({
        type: types.EDIT_COUPON,
        id,
        productName,
        picture,
        discountType,
        discount,
        category,
        reusePeriod,
        initialPrice,
        pendingUnits
    })

export const toggleModalAddCoupon = () =>
    ({type: types.TOGGLE_MODAL_ADDCOUPON})

export const toggleModalEditCoupon = () =>
    ({type: types.TOGGLE_MODAL_EDITCOUPON})

export const dispatchToggleModalAddCoupon = () => dispatch => {
    dispatch(toggleModalAddCoupon())
}

export const dispatchToggleModalEditCoupon = () => dispatch => {
    dispatch(toggleModalEditCoupon())
}
