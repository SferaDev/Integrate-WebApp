import * as types from '../constants/ActionTypes'
import {apiAddNewGood, apiDeleteExistingGood, apiGetListAllGoods, apiUpdateExistingGood} from '../api/goods';

export const receiveGoods = (goods) => ({
    type: types.RECEIVE_GOODS,
    goods,
});

export const dispatchReceiveGoods = () => dispatch => {
    apiGetListAllGoods().then(goodsList => {
        dispatch(receiveGoods(goodsList))
    })
};

export const addGood = (good) => ({
    type: types.ADD_GOOD,
    good,
});

export const dispatchAddGood = (good) => dispatch => {
    apiAddNewGood(good).then(good => {
        dispatch(addGood(good))
    })
};

export const deleteGood = (good) => ({type: types.DELETE_GOOD, good});

export const dispatchDeleteGood = (good) => dispatch => {
    apiDeleteExistingGood(good).then(() => {
        dispatch(deleteGood(good))
    })
};

export const editGood = (good) => ({
    type: types.EDIT_GOOD,
    good
});

export const dispatchEditGood = (good) => dispatch => {
    apiUpdateExistingGood(good).then(good => {
        dispatch(editGood(good))
    })
};