import {applyMiddleware, createStore} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export function configureStore(initialState) {

    const middlewareArgs = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewareArgs.push(reduxImmutableStateInvariant())
    }

    return createStore(rootReducer, initialState, applyMiddleware(...middlewareArgs));
}