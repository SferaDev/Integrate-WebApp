import * as types from '../constants/ActionTypes'
import * as actions from './modal'

describe('Modal actions', () => {
    it('toggleModal should create TOGGLE_MODAL action', () => {
        expect(actions.toggleModal()).toEqual({
            type: types.TOGGLE_MODAL,
        })
    })

    it('toggleModalEdit should create TOGGLE_MODAL_EDIT action', () => {
        const Good = {}
        expect(actions.toggleModalEdit(Good)).toEqual({
            type: types.TOGGLE_MODAL_EDIT,
            good: {}
        })
    })

    it('cleanModalState should create CLEAN_MODAL_STATE action', () => {
        expect(actions.cleanModalState()).toEqual({
            type: types.CLEAN_MODAL_STATE,
        })
    })
})
