import {
    LOAD_ACTIVE_QUIZ_SUCCESS, LOAD_QUIZ_FOR_EDIT_SUCCESS,
    LOAD_QUIZZES_SUCCESS,
    QUESTION_ANSWERED,
    RESET_QUIZ, SAVE_EXISTING_QUIZ_SUCCESS, SAVE_NEW_QUIZ_SUCCESS
} from './actionTypes';
import MockQuizApi from '../api/mockQuizQuestionsApi';
import {beginApiCall} from './apiStatusActions';

export function resetQuiz() {
    return {type: RESET_QUIZ}
}

export function quizAnswerAttemptMade(answer) {
    return {
        type: QUESTION_ANSWERED,
        answer
    }
}

export function loadActiveQuiz(quizId) {
    return dispatch => {
        dispatch(beginApiCall());

        return MockQuizApi.getQuizData(quizId)
            .then(quiz => dispatch(loadActiveQuizSuccess(quiz)))
            .catch(error => {
                throw(error)
            });
    }
}

function loadActiveQuizSuccess(quizData) {
    return {
        type: LOAD_ACTIVE_QUIZ_SUCCESS,
        activeQuiz: quizData
    }
}

// ToDo: create failure action and reducer to handle
export function loadQuizzes() {
    return dispatch => {
        dispatch(beginApiCall());

        return MockQuizApi.getQuizzes()
            .then(quizzes => dispatch(loadQuizzesSuccess(quizzes)))
            .catch(error => {
                throw(error)
            })
    };
}

export function loadQuizForEdit(id) {
    return dispatch => MockQuizApi.getQuizData(id)
        .then(quiz => dispatch(loadQuizForEditSuccess(quiz)))
        .catch(error => {
            throw(error)
        })
}

function loadQuizzesSuccess(quizzes) {
    return {
        type: LOAD_QUIZZES_SUCCESS,
        quizzes
    }
}

function loadQuizForEditSuccess(quiz) {
    return {
        type: LOAD_QUIZ_FOR_EDIT_SUCCESS,
        quiz
    }
}

export function saveQuiz(quiz) {
    return dispatch => {

        return MockQuizApi.saveQuiz(quiz)
            .then(savedQuiz => {
                quiz.id == null
                    ? dispatch(saveNewQuizSuccess(savedQuiz))
                    : dispatch(saveExistingQuizSuccess(savedQuiz));
            })
            .catch(error => {
                throw(error);
            })
    }
}

function saveNewQuizSuccess(quiz) {
    return {
        type: SAVE_NEW_QUIZ_SUCCESS,
        quiz
    }
}

function saveExistingQuizSuccess(quiz) {
    return {
        type: SAVE_EXISTING_QUIZ_SUCCESS,
        quiz
    }
}
