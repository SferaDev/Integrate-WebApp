import {RESET_INCENTIVES, SET_INCENTIVES} from '../constants/ActionTypes';
import incentives from './incentives';

describe('incentives reducer', () => {
    it('should handle initial state', () => {
        expect(
            incentives(undefined, {})
        ).toEqual({
            incentives: {
                goodsCreated: 0,
                beneficiariesHelped: 0,
                totalSavedMoney: 0.00,
            }
        })
    });

    it('should handle SET_INCENTIVES', () => {
        expect(
            incentives({}, {
                type: SET_INCENTIVES,
                incentives: {
                    goodsCreated: 1,
                    beneficiariesHelped: 1,
                    totalSavedMoney: 1.00,
                }
            })
        ).toEqual({
            incentives: {
                goodsCreated: 1,
                beneficiariesHelped: 1,
                totalSavedMoney: 1.00,
            }
        })
    });

    it('should handle RESET_INCENTIVES', () => {
        expect(
            incentives({}, {
                type: RESET_INCENTIVES,
            })
        ).toEqual({
            incentives: {
                goodsCreated: 0,
                beneficiariesHelped: 0,
                totalSavedMoney: 0.00,
            }})
    });
})