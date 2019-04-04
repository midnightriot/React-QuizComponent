import {
    LOAD_QUIZZES_SUCCESS,
    Actions as QuizActions
    // LOADING_QUIZZES,
} from '../actions/quizActions';

import {
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS,
    Actions as AddEditQuizActions
} from '../actions/addEditQuizActions';
import { Quiz } from '../types/Quiz';

interface State {
    quizzes: Quiz[],
    isLoadingQuizzes: boolean
}

const initialState: State = {
    quizzes: [],
    isLoadingQuizzes: false
};

function quizDataReducer(state: State = initialState, action: QuizActions | AddEditQuizActions) {

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

            const {payload: quizzes} = action;


            const alterations = {
                quizzes: quizzes,
                // isLoadingQuizzes: false
            };

            return Object.assign({}, state, alterations);
        }

        case SAVE_NEW_QUIZ_SUCCESS: {

            const {payload: quiz} = action;

            const alterations = {quizzes: [...state.quizzes, quiz]};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {

            const {payload: quiz} = action;

            const alterations = {quizzes: state.quizzes.map(q => q.id === quiz.id ? quiz : q)};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default quizDataReducer;