import {RECEIVE_USER_INFO} from '../constants/ActionTypes';

export const receiveUserInfo = (user) => ({
    type: RECEIVE_USER_INFO,
    user,
});