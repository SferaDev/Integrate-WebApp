import {RECEIVE_USER_INFO} from '../constants/ActionTypes';

export default function entity(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USER_INFO:
            return {
                name: action.user.name,
                addressName: action.user.addressName,
                description: action.user.description,
                picture: action.user.picture,
            }

        default:
            return state
    }
}