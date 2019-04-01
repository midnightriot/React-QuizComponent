import {
    LOAD_QUIZZES_SUCCESS,
    // LOADING_QUIZZES,
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS
} from '../actions/actionTypes';

function quizDataReducer(state = {quizzes: [], isLoadingQuizzes: false}, action) {

    switch (action.type) {

        // ToDo: delete all LOADING_QUIZZES and isloadingQuizzes stuff if not needed (just test stuff still works then delete)
        // case LOADING_QUIZZES: {
        //     const alterations = {
        //         isLoadingQuizzes: true
        //     };
        //
        //     return Object.assign({}, state, alterations);
        // }

        case LOAD_QUIZZES_SUCCESS: {

            const alterations = {
                quizzes: action.quizzes,
                // isLoadingQuizzes: false
            };

            return Object.assign({}, state, alterations);
        }

        case SAVE_NEW_QUIZ_SUCCESS: {
            const alterations = {quizzes: [...state.quizzes, action.quiz]};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {
            const alterations = {quizzes: state.quizzes.map(q => q.id === action.quiz.id ? action.quiz : q)};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default quizDataReducer;