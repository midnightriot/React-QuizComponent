import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddEditQuizForm from './AddEditQuizForm';
import { loadQuizzes } from '../../actions/quizActions';
import { saveQuiz } from '../../actions/addEditQuizActions';
import Spinner from '../Common/Spinner/Spinner';
import { toast } from 'react-toastify';
import { AddEditQuizValidator } from './Validation/AddEditQuizValidator';
import { Quiz } from '../../types/Quiz';
import { Question } from '../../types/Question';
import { QuizValidationErrors } from './Validation/QuizQuestionValidationErrors';
import { History } from 'history';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../store/rootState';

interface Props {
    loadQuizzes: () => Promise<void>; // Double check type, also not sure if really returns a promise as this is wrapped code.
    saveQuiz: (quiz: Quiz) => Promise<void>; // Again double check type
    history: History;
    quizzes: Quiz[];
    propsQuiz: Quiz
}

function AddEditQuizPage({loadQuizzes, saveQuiz, history, quizzes, propsQuiz}: Props) {

    const [quiz, setQuiz] = useState<Quiz>({...propsQuiz});
    const [errors, setErrors] = useState<QuizValidationErrors | undefined>({});
    const [isSaving, setIsSaving] = useState<boolean>(false);

    useEffect(() => {
        if (quizzes == null || quizzes.length === 0) {
            loadQuizzes();
            // .catch(error => alert(`Failed to load quizzes from AddEditQuiz: ${error}`));
        } else {
            setQuiz({...propsQuiz});
        }
    }, [propsQuiz.id]);

    useEffect(() => {
        // Problem with this is that it will run on first pass (including if new quiz, or focus change)
        const validationErrors = AddEditQuizValidator.validate(quiz);
        setErrors(validationErrors);
    }, [quiz]);

    return (quizzes == null || quizzes.length === 0)
        ? <Spinner/>
        : (<AddEditQuizForm
            quiz={quiz}
            onChange={onChange}
            isSaving={isSaving}
            onSave={onSave}
            errors={errors}
        />);

    // ToDo: Figure out why type doesn't work (I'm not sure what wasn't working :o)
    function onChange(event: React.FormEvent<HTMLInputElement>) {
        // ToDo: Double check this still works (was using target instead of current target)
        const {name, value} = event.currentTarget; // Lets us retain a ref

        setQuizByName(name, value, quiz, setQuiz);
    }

    function onSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const validationErrors = AddEditQuizValidator.validate(quiz);

        if (validationErrors == null) {
            setIsSaving(true);
            saveQuiz(quiz).then(() => {
                toast.success('Quiz Saved');
                history.push('/');
            });
        } else {
            toast.error('Quiz not valid');
            setErrors(validationErrors);
        }
    }
};

type SetQuizType = (fn: React.SetStateAction<Quiz>) => void;

// Better name
function setQuizByName(name: string, value: string, quiz: Quiz, setQuiz: SetQuizType) {
    const [nameType, questionIdRaw, answerOptionIndexRaw] = name.split('.');

    switch (nameType) {
        case 'instructionText': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find((question: Question) => question.id === questionId);

            if (question == null) {
                throw {error: 'Error updating quiz @instructionText: No question found with id'};
            }

            const updatedQuestion = {
                ...question,
                instructionText: value
            };

            setQuiz((prevQuiz: Quiz) => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(question => question.id === questionId ? updatedQuestion : question)
            } as Quiz));
            break;
        }

        case 'answer': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find(question => question.id === questionId);

            if (question == null) {
                throw {error: 'Error updating quiz @answer: No question found with id'};
            }

            const updatedQuestion = {
                ...question,
                answer: value
            };

            setQuiz((prevQuiz: Quiz) => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(question => question.id === questionId ? updatedQuestion : question)
            } as Quiz));
            break;
        }

        case 'answerOption': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find(question => question.id === questionId);

            if (question == null) {
                throw {error: 'Error updating quiz @answerOption: No question found with id'};
            }

            const answerOptionIndex = parseInt(answerOptionIndexRaw, 10);

            const updatedQuestion = {
                ...question,
                answerOptions: question.answerOptions
                    .map((answerOption, index) => index === answerOptionIndex ? value : answerOption)
            };

            setQuiz((prevQuiz: Quiz) => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(question => question.id === questionId ? updatedQuestion : question)
            } as Quiz));
            break;
        }

        default:
            setQuiz((prevQuiz: Quiz) => ({
                ...prevQuiz,
                [nameType]: value
            }));
            break;
    }
}

interface MatchParams {
    id?: string;
}

function mapStateToProps(state: RootState, ownProps: RouteComponentProps<MatchParams>) {

    const quizzes = state.quizData.quizzes;

    const routeId = ownProps.match.params.id;
    const quizId = routeId != null
        ? parseInt(routeId, 10)
        : null;

    const quiz = quizzes
        .find(quiz => quiz.id === quizId) || {name: '', questions: [], id: 0};

    return {
        propsQuiz: quiz,
        quizzes // Not crazy about having this depend on a list of quizzes since I'm only really interested in editing a single quiz. Will consider options to get rid of this like saying if quizzes are loaded, or maybe just looking up a quiz some how.
    };
}

const mapDispatchToProps = {
    saveQuiz,
    loadQuizzes
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditQuizPage);