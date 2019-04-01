import { Actions as apiActions } from './apiStatusActions';
import MockQuizApi from '../api/mockQuizQuestionsApi';
import { ActionsUnion } from './types';
import { Quiz } from '../types/Quiz';
import { Dispatch } from 'redux';
import { createAction } from './createActionHelpers';

export const LOAD_ACTIVE_QUIZ_SUCCESS = '[active quiz] loadSuccess';
export const QUESTION_ANSWERED = '[active quiz] QuestionAnswered';
export const RESET_QUIZ = '[active quiz] ResetQuiz';

export const Actions = {
    resetQuiz: () => createAction(RESET_QUIZ),
    // Porb should not be in store, but just local
    quizAnswerAttemptMade: (answer: string) => createAction(QUESTION_ANSWERED, answer),
    loadActiveQuizSuccess: (activeQuiz: Quiz) => createAction(LOAD_ACTIVE_QUIZ_SUCCESS, activeQuiz)
};

export type Actions = ActionsUnion<typeof Actions>;

// Does this really belong in this file? Consider breaking up?
export function loadActiveQuiz(quizId: number) {
    return (dispatch: Dispatch) => {
        dispatch(apiActions.beginApiCall());

        return MockQuizApi.getQuizData(quizId)
            .then(quiz => {
                dispatch(apiActions.apiCallSuccess());
                dispatch(Actions.loadActiveQuizSuccess(quiz));
            })
            .catch(error => {
                dispatch(apiActions.apiCallError());
                throw(error);
            });
    };
}
