import {
    LOAD_QUIZZES_SUCCESS,
    LOADING_QUIZZES,
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS
} from '../actions/actionTypes';

function quizDataReducer(state = {quizzes: [], isLoadingQuizzes: false}, action) {

    switch (action.type) {

        case LOADING_QUIZZES: {
            const alterations = {
                isLoadingQuizzes: true
            };

            return Object.assign({}, state, alterations);
        }

        case LOAD_QUIZZES_SUCCESS: {

            const alterations = {
                quizzes: action.quizzes,
                isLoadingQuizzes: false // This seems backwards, but breaks If I set to false
            };

            return Object.assign({}, state,  alterations);
        }

        // Should these actions just return the entire new list of quizzes.
        // I feel like thats what would happen normally rather than this insertions stuff here.
        case SAVE_NEW_QUIZ_SUCCESS: {
            const alterations = { quizzes: [...state.quizzes, action.quiz]};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {
            const alterations = { quizzes: state.quizzes.map(q => q.id === action.quiz.id ? action.quiz : q)};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default quizDataReducer;