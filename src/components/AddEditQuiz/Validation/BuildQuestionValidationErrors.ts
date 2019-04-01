import {
    QuestionAnswerError, QuestionAnswerOptionsError,
    QuestionIdError, QuestionInstructionTextError,
    QuestionsErrorDetails
} from 'quiz-validation/dist/quiz-validation/errors/questionsErrors';
import { buildAnswerOptionValidationErrors } from './BuildAnswerOptionValidationErrors';
import { QuestionValidationErrors } from './QuizQuestionValidationErrors';

export function buildQuestionValidationErrors(questionDetails: QuestionsErrorDetails): QuestionValidationErrors {

    const id = questionDetails.id === QuestionIdError.Missing
        ? 'Question must have an id.'
        : undefined;

    let instructionText: string | undefined;

    if (questionDetails.instructionText === QuestionInstructionTextError.Missing) {
        instructionText = 'Question must have Instruction Text.';
    } else if (questionDetails.instructionText === QuestionInstructionTextError.TooLong) {
        instructionText = 'Instruction text is too long.';
    }

    let answer: string | undefined;

    if (questionDetails.answer === QuestionAnswerError.Missing) {
        answer = 'Question must have an answer.';
    } else if (questionDetails.answer === QuestionAnswerError.NotAnAnswerOption) {
        answer = 'Answer must also be an answer option.';
    }

    const answerOptions = questionDetails.answerOptions === QuestionAnswerOptionsError.NotEnough
        ? 'Not enough answer options.'
        : undefined;

    const answerOptionDetails = questionDetails.answerOptionDetails != null
        ? questionDetails.answerOptionDetails.map(buildAnswerOptionValidationErrors)
        : undefined;

    return {
        id,
        answer,
        instructionText,
        answerOptions,
        answerOptionDetails
    };
}
