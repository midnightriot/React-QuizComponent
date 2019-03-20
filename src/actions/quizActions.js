import {
    ACTIVE_QUIZ_IS_READY, LOAD_QUIZ_FOR_EDIT_SUCCESS,
    LOAD_QUIZZES_SUCCESS, LOADING_ACTIVE_QUIZ, LOADING_QUIZZES,
    QUESTION_ANSWERED,
    RESET_QUIZ, SAVE_EXISTING_QUIZ_SUCCESS, SAVE_NEW_QUIZ_SUCCESS, SAVING_QUIZ
} from './actionTypes';
import MockQuizApi from '../api/mockQuizQuestionsApi';

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
        dispatch({type: LOADING_ACTIVE_QUIZ});

        return MockQuizApi.getQuizData(quizId)
            .then(quiz => dispatch(activeQuizIsReady(quiz)))
            .catch(error => {
                throw(error)
            });
    }
}

function activeQuizIsReady(quizData) {
    return {
        type: ACTIVE_QUIZ_IS_READY,
        activeQuiz: quizData
    }
}

// ToDo: create failure action and reducer to handle
export function loadQuizzes() {
    return dispatch =>  {
        dispatch({type: LOADING_QUIZZES});

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
        dispatch({type: SAVING_QUIZ});

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
