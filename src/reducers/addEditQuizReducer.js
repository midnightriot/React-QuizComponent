import {
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS,

    SAVING_QUIZ
} from '../actions/actionTypes';

function addEditQuizReducer(state = {isSaving: false, quiz: null}, action) {

    switch (action.type) {

        case SAVING_QUIZ: {
            const alterations = {isSaving: true};

            return Object.assign({}, state, alterations);
        }

        case SAVE_NEW_QUIZ_SUCCESS: {
            const alterations = {isSaving: false, quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {
            const alterations = {isSaving: false, quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default addEditQuizReducer;