import modalConstants from '../constants/modal';

const initialState = {
    selectedGif: null,
    modalIsOpen: false
}

export default function modal(state = initialState, action) {
    switch(action.type) {
        case modalConstants.OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                selectedGif: action.gif
            }
        case modalConstants.CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false,
                selectedGif: null
            }
        default:
            return state
    }
}
