import {RESET_INCENTIVES, SET_INCENTIVES} from '../constants/ActionTypes';

export default function incentives(
    state = {
        incentives: {
            goodsCreated: 0,
            beneficiariesHelped: 0,
            totalSavedMoney: 0.00,
        }
    },
    action = {}) {
    switch(action.type) {
        case SET_INCENTIVES:
            return {
                incentives: {
                    goodsCreated: action.incentives.goodsCreated,
                    beneficiariesHelped: action.incentives.beneficiariesHelped,
                    totalSavedMoney: action.incentives.totalSavedMoney,
                }
            }

        case RESET_INCENTIVES:
            return {
                incentives: {
                    goodsCreated: 0,
                    beneficiariesHelped: 0,
                    totalSavedMoney: 0.00,
                }
            }

        default:
            return state
    }
}