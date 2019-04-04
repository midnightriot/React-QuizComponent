import { Question } from './Question';

export interface Quiz {
    id: number,
    name: string,
    questions: Question[]
}