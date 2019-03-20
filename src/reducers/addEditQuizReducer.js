import {
    SAVE_EXISTING_QUIZ_SUCCESS,
    SAVE_NEW_QUIZ_SUCCESS,
    SAVE_QUIZ_SUCCESS,
    SAVING_QUIZ
} from '../actions/actionTypes';

function addEditQuizReducer(state = { isSaving: false, quiz: {
        "id": 1,
        "name": "Default Quiz",
        "questions": [
            {
                "id": 1,
                "instructionText": "How many continents are there on Planet Earth?",
                "answerOptions": [
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                "answer": "7"
            },
            {
                "id": 2,
                "instructionText": "What's your favorite number?",
                "answerOptions": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }}, action) {

    switch(action.type) {

        case SAVING_QUIZ: {
            const alterations = { isSaving: true};

            return Object.assign({}, state, alterations);
        }

        case SAVE_NEW_QUIZ_SUCCESS: {
            const alterations = { isSaving: false, quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        case SAVE_EXISTING_QUIZ_SUCCESS: {
            const alterations = { isSaving: false, quiz: action.quiz};

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default addEditQuizReducer;