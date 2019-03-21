import {
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS
} from '../actions/actionTypes';

function addEditQuizReducer(state = {quiz: null}, action) {

    switch (action.type) {

        // ToDo: not sure if I really need these two types
        case SAVE_NEW_QUIZ_SUCCESS: {
            const alterations = {quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {
            const alterations = {quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default addEditQuizReducer;