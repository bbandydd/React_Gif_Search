import { combineReducers } from 'redux'

import gifs from './gifs'
import modal from './modal'

const rootReducer = combineReducers({
    gifs,
    modal
})

export default rootReducer;
