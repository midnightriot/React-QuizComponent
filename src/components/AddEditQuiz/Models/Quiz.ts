import Question from './Question';

interface Quiz {
    id: number,
    name: string,
    questions: [Question]
}

export default Quiz;