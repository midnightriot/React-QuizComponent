import {combineReducers} from 'redux';
import activeQuizReducer from './activeQuizReducer';
import quizDataReducer from './quizDataReducer';

export const rootReducer = combineReducers(
    {
        quizData: quizDataReducer,
        activeQuiz: activeQuizReducer
    }
);
