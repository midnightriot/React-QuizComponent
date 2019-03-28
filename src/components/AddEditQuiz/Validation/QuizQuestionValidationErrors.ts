export interface QuizValidationErrors {
    id?: string,
    name?: string,
    questions?: string,

    questionDetails?: QuestionValidationErrors[]
}

export interface QuestionValidationErrors {
    id?: string,
    instructionText?: string,
    answer?: string,
    answerOptions?: string,

    answerOptionDetails?: AnswerOptionError[]
}

export interface AnswerOptionError {
    forIndex: number,
    error?: string
}