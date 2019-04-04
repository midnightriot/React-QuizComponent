import { combineReducers } from 'redux';
import activeQuizReducer from './activeQuizReducer';
import quizDataReducer from './quizDataReducer';
import addEditQuizReducer from './addEditQuizReducer';
import apiStatusReducer from './apiStatusReducer';

const rootReducer = combineReducers(
    {
        quizData: quizDataReducer,
        activeQuiz: activeQuizReducer,
        addEditQuiz: addEditQuizReducer,
        apiStatus: apiStatusReducer
    }
);

export default rootReducer;
