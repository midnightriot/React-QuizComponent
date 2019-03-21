import {combineReducers} from 'redux';
import activeQuizReducer from './activeQuizReducer';
import quizDataReducer from './quizDataReducer';
import addEditQuizReducer from './addEditQuizReducer';

const rootReducer = combineReducers(
    {
        quizData: quizDataReducer,
        activeQuiz: activeQuizReducer,
        addEditQuiz: addEditQuizReducer
    }
);

export default rootReducer;
