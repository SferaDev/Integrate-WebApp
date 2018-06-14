import * as actions from './incentives';
import {RESET_INCENTIVES, SET_INCENTIVES} from '../constants/ActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('../api/incentive')

describe('Incentive actions', () => {
    it('setIncentives should create SET_INCENTIVES action', () => {
        const incentives = {
            goodsCreated: 1,
            beneficiariesHelped: 1,
            totalSavedMoney: 1.00,
        }
        expect(actions.setIncentives(incentives)).toEqual({
            type: SET_INCENTIVES,
            incentives,
        })
    })

    it('dispatchSetIncentives should dispatch the SET_INCENTIVES action', () => {
        const incentives = {
            goodsCreated: 1,
            beneficiariesHelped: 1,
            totalSavedMoney: 1.00,
        }

        const expectedActions = [
            {
                type: SET_INCENTIVES,
                incentives: {
                    goodsCreated: incentives.goodsCreated,
                    beneficiariesHelped: incentives.beneficiariesHelped,
                    totalSavedMoney: incentives.totalSavedMoney,
                }
            }
        ]

        const store = mockStore ({ goods: [], modal: {}, locale: {}, auth: {}, incentives: {} })

        return store.dispatch(actions.dispatchSetIncentives()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('resetLocale should create RESET_LOCALE action', () => {
        expect(actions.resetIncentives()).toEqual({
            type: RESET_INCENTIVES,
        })
    })
})