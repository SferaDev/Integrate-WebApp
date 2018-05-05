import * as types from '../constants/ActionTypes'

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

