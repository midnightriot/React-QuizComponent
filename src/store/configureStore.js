import {applyMiddleware, createStore} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// ToDo: load choose middleware based on environment
// i.e. no imputableStateInvariant if prod, etc.

export function configureStore(initialState) {

    const middlewareArgs = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewareArgs.push(reduxImmutableStateInvariant())
    }

    return createStore(rootReducer, initialState, applyMiddleware(...middlewareArgs));
}

// Need to figure out initial state when doing combine reducers. Quiz reducer is getting passed undefined or empty object and this messes everything up. I'm guessing my reducers should handle less state and not full object, or I need to define a different default state.
// export function configureStore(initialState) {
//     return createStore(rootReducer,
//         initialState,
//         applyMiddleware(reduxImmutableStateInvariant));
// }
