import {ADD_COUPON} from '../constants/ActionTypes';

const couponsList = (state, action) => {
    switch (action.type) {
        case ADD_COUPON:
            return state;
        //TODO
        default:
            return state;
    }
}

export default couponsList;


