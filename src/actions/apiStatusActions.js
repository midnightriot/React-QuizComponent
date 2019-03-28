import {API_CALL_ERROR, API_CALL_SUCCESS, BEGIN_API_CALL} from './actionTypes';

export function beginApiCall() {
    return {type: BEGIN_API_CALL}
}

export function apiCallSuccess() {
    return {type: API_CALL_SUCCESS}
}

export function apiCallError() {
    return {type: API_CALL_ERROR}
}