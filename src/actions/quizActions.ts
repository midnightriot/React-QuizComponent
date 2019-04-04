import MockQuizApi from '../api/mockQuizQuestionsApi';
import {Actions as apiActions} from './apiStatusActions';
import { Quiz } from '../types/Quiz';
import { createAction } from './createActionHelpers';
import { Dispatch } from 'redux';
import { ActionsUnion } from './types';

export const LOAD_QUIZZES_SUCCESS = 'LOAD_QUIZZES_SUCCESS';

export const Actions = {
    loadQuizzesSuccess: (quizzes: Quiz[]) => createAction(LOAD_QUIZZES_SUCCESS, quizzes)
};

export type Actions = ActionsUnion<typeof Actions>;

// ToDo: create failure action and reducer to handle
// toDo Convert to async if possible
export function loadQuizzes() {
    return (dispatch: Dispatch) => {
        dispatch(apiActions.beginApiCall());

        return MockQuizApi.getQuizzes()
            .then(quizzes => {
                dispatch(apiActions.apiCallSuccess());
                dispatch(Actions.loadQuizzesSuccess(quizzes))
            })
            .catch(error => {
                dispatch(apiActions.apiCallError());
                throw(error)
            })
    };
}
