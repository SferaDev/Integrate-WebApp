import {RECEIVE_COUPONS} from '../constants/ActionTypes';
import {combineReducers} from 'redux';

const coupons = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_COUPONS:
            return {
                ...state,
                ...action.coupons.reduce((obj, coupon) => {
                    obj[coupon.id] = coupon
                    return obj
                }, {})
            }
        default:
            const {couponId} = action
            if (couponId) {
                return {
                    ...state,
                    [couponId]: coupons(state[couponId], action)
                }
            }
            return state
    }
}

const activeIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_COUPONS:
            return action.coupons.map(coupon => coupon.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    activeIds
})

export const getCoupon = (state, id) =>
    state.byId[id]

export const getActiveCoupons = state =>
    state.activeIds.map(id => getCoupon(state, id))


