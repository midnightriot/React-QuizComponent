import {ACTIVE_QUIZ_IS_READY, QUESTION_ANSWERED, RESET_QUIZ} from '../actions/actionTypes'

function activeQuizReducer(state = {
    quizPosition: 1,
    isQuizEnded: false,
    isQuizDataReady: false,
    activeQuiz: null
}, action) {

    switch (action.type) {

        case ACTIVE_QUIZ_IS_READY: {

            const alterations = {
                isQuizDataReady: true,
                activeQuiz: action.activeQuiz
            };

            return Object.assign({}, state, alterations);
        }

        case QUESTION_ANSWERED: {

            const quizData = state.activeQuiz;

            const questionAnswered = quizData.quiz_questions[state.quizPosition - 1];

            const answeredCorrectly = questionAnswered.answer === action.answer;

            const isLastQuestion = quizData.quiz_questions.length === state.quizPosition;

            const isQuizEnded = isLastQuestion && answeredCorrectly;

            const quizPosition = answeredCorrectly
                ? state.quizPosition + 1
                : state.quizPosition;

            const quizQuestion = quizData.quiz_questions[quizPosition - 1];

            const alterations = {
                answeredIncorrectly: !answeredCorrectly,
                quizPosition: quizPosition,
                quizQuestion: quizQuestion,
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
