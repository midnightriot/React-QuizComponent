import {LOAD_QUIZZES_SUCCESS} from '../actions/actionTypes';

function quizDataReducer(state = {quiz_questions: []}, action) {

    switch (action.type) {

        case LOAD_QUIZZES_SUCCESS:
            return action.quizes;
        default:
            return state;
    }
}

export default quizDataReducer;