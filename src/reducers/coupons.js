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
                    productName: action.productName,
                    picture: action.picture,
                    initialPrice: action.initialPrice,
                    discountType: action.discountType,
                    discount: action.discount,
                    category: action.category,
                    reusePeriod: action.reusePeriod,
                    pendingUnits: action.pendingUnits,
                }
            ]

        case DELETE_COUPON:
            return state.filter(coupon =>
                coupon.id !== action.id
            )

        case EDIT_COUPON:
            return state.map(coupon =>
                coupon.id === action.id ?
                    {
                        ...coupon,
                        productName: action.productName,
                        picture: action.picture,
                        initialPrice: action.initialPrice,
                        discountType: action.discountType,
                        discount: action.discount,
                        category: action.category,
                        reusePeriod: action.reusePeriod,
                        pendingUnits: action.pendingUnits,
                    } :
                    coupon
            )

        default:
            return state
    }
}
