import {apiGetIncentives} from '../api/incentive';
import {RESET_INCENTIVES, SET_INCENTIVES} from '../constants/ActionTypes';
import {logoutAction} from './auth';

export const setIncentives = incentives => ({
    type: SET_INCENTIVES,
    incentives,
})

export const dispatchSetIncentives = () => (dispatch) => {
    return apiGetIncentives().then(incentives => {
        dispatch(setIncentives(incentives))
    }).catch(() => {
        dispatch(logoutAction())
    })
}

export const resetIncentives = () => ({
    type: RESET_INCENTIVES,
})