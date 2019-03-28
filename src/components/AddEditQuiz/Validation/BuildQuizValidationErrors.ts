import {
    QuizIdError,
    QuizNameError, QuizQuestionsError,
    QuizValidationErrorDetails
} from 'quiz-validation/dist/quiz-validation/errors/quizErrors';
import buildQuestionValidationErrors from './BuildQuestionValidationErrors';
import { QuizValidationErrors } from './QuizQuestionValidationErrors';

function buildQuizValidationErrors(details: QuizValidationErrorDetails): QuizValidationErrors {

    const id = details.id === QuizIdError.Missing
        ? 'Quiz must have an Id.'
        : undefined;

    let name: string | undefined;

    if (details.name === QuizNameError.Missing) {
        name = 'Quiz must have a name.';
    } else if (details.name === QuizNameError.TooLong) {
        name = 'Quiz name is too long.';
    }

    const questions = details.questions === QuizQuestionsError.NoQuestions
        ? 'Quiz must have questions.'
        : undefined;

    const questionDetails = details.questionDetails != null
        ? details.questionDetails.map(buildQuestionValidationErrors)
        : undefined;

    return {
        id,
        name,
        questions,
        questionDetails
    };
}

export default buildQuizValidationErrors;