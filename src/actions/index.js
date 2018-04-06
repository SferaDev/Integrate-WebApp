import api from '../api'
import * as types from '../constants/ActionTypes'

const receiveCoupons = coupons => ({
    type: types.RECEIVE_COUPONS,
    coupons,
})

export const getAllCoupons = () => dispatch => {
    api.getCoupons(coupons => {
        dispatch(receiveCoupons(coupons))
    })
}