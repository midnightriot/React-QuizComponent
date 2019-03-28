import { quizHasNoErrors, validateQuiz } from 'quiz-validation';
import Quiz from 'quiz-validation/dist/quiz-validation/quiz';
import { QuizValidationErrors } from './QuizQuestionValidationErrors';
import buildQuizValidationErrors from './BuildQuizValidationErrors';

class AddEditQuizValidator {

    // In the future could take language in for i18.
    static validate(quiz: Quiz): QuizValidationErrors | undefined {

        const details = validateQuiz(quiz);

        const allValid = quizHasNoErrors(details);

        return allValid
            ? undefined
            : buildQuizValidationErrors(details);
    }
}

export default AddEditQuizValidator;
