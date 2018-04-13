import {ADD_COUPON, DELETE_COUPON, EDIT_COUPON} from '../constants/ActionTypes';
import * as couponsMock from '../api/mock/coupons'

const initialState = couponsMock

export default function coupons(state = initialState, action) {
    switch (action.type) {
        case ADD_COUPON:
            return [
                ...state,
                {
                    id: state.reduce((maxId, coupon) => Math.max(coupon.id, maxId), -1) + 1,
                    productName: action.coupon.productName,
                    picture: action.coupon.picture,
                    initialPrice: action.coupon.initialPrice,
                    discountType: action.coupon.discountType,
                    discount: action.coupon.discount,
                    category: action.coupon.category,
                    reusePeriod: action.coupon.reusePeriod,
                    pendingUnits: action.coupon.pendingUnits,
                }
            ]

        case DELETE_COUPON:
            return state.filter(coupon =>
                coupon.id !== action.coupon.id
            )

        case EDIT_COUPON:
            return state.map(coupon =>
                coupon.id === action.coupon.id ?
                    {
                        ...coupon,
                        productName: action.coupon.productName,
                        picture: action.coupon.picture,
                        initialPrice: action.coupon.initialPrice,
                        discountType: action.coupon.discountType,
                        discount: action.coupon.discount,
                        category: action.coupon.category,
                        reusePeriod: action.coupon.reusePeriod,
                        pendingUnits: action.coupon.pendingUnits,
                    } :
                    coupon
            )

        default:
            return state
    }
}
