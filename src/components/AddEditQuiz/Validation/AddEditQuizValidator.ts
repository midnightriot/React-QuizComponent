import { quizHasNoErrors, validateQuiz, Quiz } from 'quiz-validation';
import { QuizValidationErrors } from './QuizQuestionValidationErrors';
import { buildQuizValidationErrors } from './BuildQuizValidationErrors';

export class AddEditQuizValidator {

    // In the future could take language in for i18.
    static validate(quiz: Quiz): QuizValidationErrors | undefined {

        const details = validateQuiz(quiz);

        const allValid = quizHasNoErrors(details);

        return allValid
            ? undefined
            : buildQuizValidationErrors(details);
    }
}
