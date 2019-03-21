import {API_CALL_ERROR, BEGIN_API_CALL} from '../actions/actionTypes';

// NOt crazy about this because it will break if convention is not followed and failurse should also do this. Plus if other actions have Success or Failure in them they will tirgger this.

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS";
}

function apiStatusReducer(state = 0, action) {

    if (action.type === BEGIN_API_CALL) {
        return state + 1;
    } else if (
        action.type === API_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)
    ) {
        return state - 1;
    }

    return state;
}

export default apiStatusReducer;