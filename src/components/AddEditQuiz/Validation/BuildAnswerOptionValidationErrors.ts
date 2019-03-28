import {
    AnswerOptionError as AnswerOptionErrorFromValidator,
    AnswerOptionErrorDetails
} from 'quiz-validation/dist/quiz-validation/errors/answerOptionsErrors';
import { AnswerOptionError } from './QuizQuestionValidationErrors';

function buildAnswerOptionValidationErrors(answerOptionDetails: AnswerOptionErrorDetails): AnswerOptionError {

    let error;

    switch (answerOptionDetails.error) {
        case AnswerOptionErrorFromValidator.Missing:
            error = 'Answer option is missing.';
            break;
        case AnswerOptionErrorFromValidator.TooLong:
            error = 'Answer option is too long.';
            break;
        case AnswerOptionErrorFromValidator.Duplicate:
            error = 'Answer option is a duplicate.';
            break;
        default:
            error = undefined;
            break;
    }

    return {
        error,
        forIndex: answerOptionDetails.forIndex
    };
}

export default buildAnswerOptionValidationErrors;