import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const enhancers = compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const configureStore = createStore(rootReducer, enhancers)

if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default
        configureStore.replaceReducer(nextRootReducer)
    })
}

export default configureStore;
