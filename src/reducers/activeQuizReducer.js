import {
    LOAD_ACTIVE_QUIZ_SUCCESS,
    LOADING_ACTIVE_QUIZ,
    QUESTION_ANSWERED,
    RESET_QUIZ
} from '../actions/actionTypes'

function activeQuizReducer(state = {
    quizPosition: 1,
    isQuizEnded: false,
    isQuizLoading: false,
    activeQuiz: null
}, action) {

    // ToDo: Consider how much of our redux global state should really be state local to the react components using it. Guessing some of it should be local
    switch (action.type) {

        case LOADING_ACTIVE_QUIZ: {

            const alterations = {
                isQuizLoading: true,
                activeQuiz: null
            };

            return Object.assign({}, state, alterations)
        }

        case LOAD_ACTIVE_QUIZ_SUCCESS: {

            const alterations = {
                isQuizLoading: false,
                activeQuiz: action.activeQuiz,
                quizPosition: 1,
                isQuizEnded: false
            };

            return Object.assign({}, state, alterations);
        }

        case QUESTION_ANSWERED: {

            const quizData = state.activeQuiz;

            const questionAnswered = quizData.questions[state.quizPosition - 1];

            const answeredCorrectly = questionAnswered.answer === action.answer;

            const isLastQuestion = quizData.questions.length === state.quizPosition;

            const isQuizEnded = isLastQuestion && answeredCorrectly;

            const quizPosition = answeredCorrectly
                ? state.quizPosition + 1
                : state.quizPosition;

            const alterations = {
                answeredIncorrectly: !answeredCorrectly,
                quizPosition: quizPosition,
                isQuizEnded: isQuizEnded
            };

            return Object.assign({}, state, alterations);
        }

        case RESET_QUIZ: {
            const alterations = {
                quizPosition: 1,
                isQuizEnded: false
            };

            return Object.assign({}, state, alterations);
        }

        default:
            return state;
    }
}

export default activeQuizReducer;
