import * as types from '../constants/ActionTypes'
import {apiGetListAllGoods} from '../api/goods';

export const receiveGoods = (goods) => ({
    type: types.RECEIVE_GOODS,
    goods,
})

export const dispatchReceiveGoods = () => dispatch => {
    apiGetListAllGoods()
        .then(goodsList => {
            dispatch(receiveGoods(goodsList))
        })
        .catch(error => {
            console.log(error)
        })
}

export const addGood = (good) =>
    ({
        type: types.ADD_GOOD,
        good,
    })

export const dispatchAddGood = (good) => dispatch => {
    dispatch(addGood(good))
}

export const deleteGood = (good) => ({type: types.DELETE_GOOD, good})

export const dispatchDeleteGood = (good) => dispatch => {
    dispatch(deleteGood(good))
}

export const editGood = (good) =>
    ({
        type: types.EDIT_GOOD,
        good
    })

export const dispatchEditGood = (good) => dispatch => {
    dispatch(editGood(good))
}