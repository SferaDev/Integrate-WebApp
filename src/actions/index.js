import * as types from '../constants/ActionTypes'

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

export const toggleModal = () =>
    ({type: types.TOGGLE_MODAL})

export const toggleModalEdit = (good) =>
    ({
        type: types.TOGGLE_MODAL_EDIT,
        good
    })

export const dispatchToggleModal = () => dispatch => {
    dispatch(toggleModal())
}

export const dispatchToggleModalEdit = (good) => dispatch => {
    dispatch(toggleModalEdit(good))
}

export const cleanModalState = () =>
    ({type: types.CLEAN_MODAL_STATE})

export const dispatchCleanModalState = () => dispatch => {
    dispatch(cleanModalState())
}

