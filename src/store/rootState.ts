import { Quiz } from '../types/Quiz';

export interface RootState {
    quizData: QuizData
}

interface QuizData {
    quizzes: Quiz[]
}