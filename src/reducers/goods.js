import {ADD_GOOD, DELETE_GOOD, EDIT_GOOD, RECEIVE_GOODS, RESET_GOODS} from '../constants/ActionTypes';

export default function goods(state = [], action) {
    switch (action.type) {
        case RECEIVE_GOODS:
            return action.goods.reduce((goodsList, good) => {
                good.productName = good.productName_original
                delete good.productName_original
                goodsList.push(good);
                return goodsList
            }, []);

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
            ];

        case DELETE_GOOD:
            return state.filter(good =>
                good._id !== action.good._id
            );

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
            );

        case RESET_GOODS:
            return []

        default:
            return state
    }
}
