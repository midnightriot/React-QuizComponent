import {ACTIVE_QUIZ_IS_READY, LOAD_QUIZZES_SUCCESS, QUESTION_ANSWERED, RESET_QUIZ} from './actionTypes';
import CourseApi from '../api/mockQuizQuestionsApi';

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
    // ToDo: in future load a specific quiz. Right now I just have one.

    return dispatch => CourseApi.getQuizData()
        .then(quizzes => dispatch(activeQuizIsReady(quizzes)))
        .catch(error => {
            throw(error)
        });

}

function activeQuizIsReady(quizData) {
    return {
        type: ACTIVE_QUIZ_IS_READY,
        activeQuiz: quizData
    }
}

// ToDo: create failure action and reducer to handle
export function loadQuizzes() {
    return dispatch => CourseApi.getQuizData()
        .then(quizzes => dispatch(loadQuizzesSuccess(quizzes)))
        .catch(error => {
            throw(error)
        });
}

function loadQuizzesSuccess(quizzes) {
    return {
        type: LOAD_QUIZZES_SUCCESS,
        quizzes
    }
}