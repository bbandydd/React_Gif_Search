import gifsConstants from '../constants/gifs';

const initialState = {
    data: []
}

export default function gifs(state = initialState, action) {
    switch(action.type) {
        case gifsConstants.REQUEST_GIFS:
            return {
                ...state,
                data: action.payload.body.data
            }
        default:
            return state
    }
}
