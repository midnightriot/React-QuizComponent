import {
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS,
    Actions
} from '../actions/addEditQuizActions';
import { Quiz } from '../types/Quiz';

interface State {
    quiz?: Quiz
}

const initialState: State = {
    quiz: undefined
};

// Consider if we really need global state/reducer for addEdit quiz (seems like this should mostly be local state)
function addEditQuizReducer(state = initialState, action: Actions) {

    switch (action.type) {

        // ToDo: not sure if I really need these two types
        case SAVE_NEW_QUIZ_SUCCESS: {

            const {payload: quiz} = action;

            const alterations = {quiz};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {

            const {payload: quiz} = action;

            const alterations = {quiz};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default addEditQuizReducer;