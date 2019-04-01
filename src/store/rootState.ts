import { Quiz } from '../types/Quiz';

export interface RootState {
    quizData: QuizData
}

interface QuizData {
    quizzes: Quiz[] // Don't like using the type i defined for the compontent.
}