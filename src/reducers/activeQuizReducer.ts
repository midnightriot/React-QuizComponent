import {
    LOAD_ACTIVE_QUIZ_SUCCESS,
    // LOADING_ACTIVE_QUIZ,
    QUESTION_ANSWERED,
    RESET_QUIZ,
    Actions
} from '../actions/activeQuizActions';
import { Quiz } from '../types/Quiz';

interface State {
    quizPosition: number;
    isQuizEnded: boolean;
    isQuizLoading: boolean;
    activeQuiz?: Quiz;
}

const initialState: State = {
    quizPosition: 1,
    isQuizEnded: false,
    isQuizLoading: false,
    activeQuiz: undefined
};

function activeQuizReducer(state = initialState, action: Actions): State {

    // ToDo: Consider how much of our redux global state should really be state local to the react components using it. Guessing some of it should be local
    switch (action.type) {

        // case LOADING_ACTIVE_QUIZ: {
        //
        //     const alterations = {
        //         isQuizLoading: true,
        //         activeQuiz: null
        //     };
        //
        //     return Object.assign({}, state, alterations)
        // }

        case LOAD_ACTIVE_QUIZ_SUCCESS: {

            const {payload: activeQuiz} = action;

            const alterations = {
                isQuizLoading: false,
                activeQuiz: activeQuiz,
                quizPosition: 1,
                isQuizEnded: false
            };

            return {...state, ...alterations};
        }

        // ToDo: I don't think question answered belongs in store/app scope, but should be local to component that cares.
        case QUESTION_ANSWERED: {

            const {payload: answer} = action;

            const quizData = state.activeQuiz;

            if (quizData == null) {
                throw {error: `${QUESTION_ANSWERED}: active quiz empty when question answered`};
            }

            const questionAnswered = quizData.questions[state.quizPosition - 1];

            const answeredCorrectly = questionAnswered.answer === answer;

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

            return {...state, ...alterations};
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
