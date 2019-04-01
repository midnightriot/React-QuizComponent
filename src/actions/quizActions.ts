import MockQuizApi from '../api/mockQuizQuestionsApi';
import {Actions as apiActions} from './apiStatusActions';

export const LOAD_QUIZZES_SUCCESS = 'LOAD_QUIZZES_SUCCESS';

// ToDo: create failure action and reducer to handle
// toDo Convert to async if possible
export function loadQuizzes() {
    return dispatch => {
        dispatch(apiActions.beginApiCall());

        return MockQuizApi.getQuizzes()
            .then(quizzes => {
                dispatch(apiActions.apiCallSuccess());
                dispatch(loadQuizzesSuccess(quizzes))
            })
            .catch(error => {
                dispatch(apiActions.apiCallError());
                throw(error)
            })
    };
}

function loadQuizzesSuccess(quizzes) {
    return {
        type: LOAD_QUIZZES_SUCCESS,
        quizzes
    }
}
