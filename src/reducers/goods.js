import {ADD_GOOD, DELETE_GOOD, EDIT_GOOD, RECEIVE_GOODS} from '../constants/ActionTypes';
import * as goodsMock from '../api/mock/goods'

const initialState = goodsMock

export default function goods(state = [], action) {
    switch (action.type) {
        case RECEIVE_GOODS:
            return action.goods.reduce((goodsList, good) => {
                goodsList.push(good)
                return goodsList
            }, [])

        case ADD_GOOD:
            return [
                ...state,
                {
                    _id: action.good._id,
                    productName: action.good.productName,
                    picture: action.good.picture,
                    initialPrice: action.good.initialPrice,
                    discountType: action.good.discountType,
                    discount: action.good.discount,
                    category: action.good.category,
                    reusePeriod: action.good.reusePeriod,
                    pendingUnits: action.good.pendingUnits,
                }
            ]

        case DELETE_GOOD:
            console.log("DELETE_GOOD dispatched", state, action)
            return state.filter(good =>
                good._id !== action.good._id
            )

        case EDIT_GOOD:
            return state.map(good =>
                good._id === action.good._id ?
                    {
                        ...good,
                        productName: action.good.productName,
                        picture: action.good.picture,
                        initialPrice: action.good.initialPrice,
                        discountType: action.good.discountType,
                        discount: action.good.discount,
                        category: action.good.category,
                        reusePeriod: action.good.reusePeriod,
                        pendingUnits: action.good.pendingUnits,
                    } :
                    good
            )

        default:
            return state
    }
}
