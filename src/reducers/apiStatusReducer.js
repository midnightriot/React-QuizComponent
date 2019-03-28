import {API_CALL_ERROR, API_CALL_SUCCESS, BEGIN_API_CALL} from '../actions/actionTypes';

// I'm not crazy about a global spinner and thing that each component should know if its loading or not. This is also easy to break and just doesn't feel right to me. Its easy to call begin and for get end/error
function apiStatusReducer(state = 0, action) {

    switch (action.type) {
        case BEGIN_API_CALL:
            return state + 1;
        case API_CALL_SUCCESS:
            return state - 1;
        case API_CALL_ERROR:
            return state - 1;
        default:
            return state;
    }
}

export default apiStatusReducer;