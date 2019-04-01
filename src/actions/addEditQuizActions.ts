import MockQuizApi from '../api/mockQuizQuestionsApi';
import { Quiz } from '../types/Quiz';
import { createAction } from './createActionHelpers';
import { Dispatch } from 'redux';

export const LOAD_QUIZ_FOR_EDIT_SUCCESS = '[add edit quiz] load success';
export const SAVE_NEW_QUIZ_SUCCESS = '[add edit quiz] save new success';
export const SAVE_EXISTING_QUIZ_SUCCESS = '[add edit quiz] save existing success';

export const Actions = {
    saveNewQuizSuccess: (quiz: Quiz) => createAction(SAVE_NEW_QUIZ_SUCCESS, quiz),
    saveExistingQuizSuccess: (quiz: Quiz) => createAction(SAVE_EXISTING_QUIZ_SUCCESS, quiz),
    loadQuizForEditSuccess: (quiz: Quiz) => createAction(LOAD_QUIZ_FOR_EDIT_SUCCESS, quiz),
};

// ToDo: I don't feel like these belong here. Consider what to do with all async type actions. Almost feel like static class (sorta like an angular service)
export function saveQuiz(quiz: Quiz) {
    return (dispatch: Dispatch) => {

        return MockQuizApi.saveQuiz(quiz)
            .then(savedQuiz => {
                quiz.id == null
                    ? dispatch(Actions.saveNewQuizSuccess(savedQuiz))
                    : dispatch(Actions.saveExistingQuizSuccess(savedQuiz));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export function loadQuizForEdit(id: number) {
    return (dispatch: Dispatch) => MockQuizApi.getQuizData(id)
        .then(quiz => dispatch(Actions.loadQuizForEditSuccess(quiz)))
        .catch(error => {
            throw(error);
        });
}
