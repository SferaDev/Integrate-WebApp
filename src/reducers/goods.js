import {ADD_GOOD, DELETE_GOOD, EDIT_GOOD, RECEIVE_GOODS} from '../constants/ActionTypes';
import * as goodsMock from '../api/mock/goods'

const initialState = goodsMock

export default function goods(state = initialState, action) {
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
                    id: state.reduce((maxId, good) => Math.max(good.id, maxId), -1) + 1,
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
            return state.filter(good =>
                good.id !== action.good.id
            )

        case EDIT_GOOD:
            return state.map(good =>
                good.id === action.good.id ?
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
