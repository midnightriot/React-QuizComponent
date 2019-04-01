import { ActionsUnion } from './types';
import { createAction } from './createActionHelpers';

export const BEGIN_API_CALL = '[apiCall] Being';
export const API_CALL_SUCCESS = '[apiCall] Success';
export const API_CALL_ERROR = '[apiCall] Error';

export const Actions = {
    beginApiCall: () => createAction(BEGIN_API_CALL),
    apiCallSuccess: () => createAction(API_CALL_SUCCESS),
    apiCallError: () => createAction(API_CALL_ERROR)
};

export type Actions = ActionsUnion<typeof Actions>;