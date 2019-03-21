import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AddEditQuizForm from './AddEditQuizForm';
import {loadQuizzes, saveQuiz} from '../../actions/quizActions';
import Spinner from '../Common/Spinner/Spinner';

function AddEditQuizPage({loadQuizzes, saveQuiz, history, quizzes, ...props}) {

    const [quiz, setQuiz] = useState({...props.quiz});
    const [errors, setErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (quizzes == null || quizzes.length === 0) {
            loadQuizzes()
            // .catch(error => alert(`Failed to load quizzes from AddEditQuiz: ${error}`));
        } else {
            setQuiz({...props.quiz});
        }
    }, [props.quiz.id]);

    return (quizzes == null || quizzes.length === 0)
        ? <Spinner/>
        : (<AddEditQuizForm
            quiz={quiz}
            onChange={onChange}
            isSaving={isSaving}
            onSave={onSave}
        />);

    function onChange(event) {
        const {name, value} = event.target; // Lets us retain a ref

        setQuizByName(name, value, quiz, setQuiz);
    }

    function onSave(event) {
        event.preventDefault();
        setIsSaving(true);
        saveQuiz(quiz).then(() => history.push('/'));
    }
}

// Better name
function setQuizByName(name, value, quiz, setQuiz) {
    const [nameType, questionIdRaw, answerOptionIndexRaw] = name.split('.');

    switch (nameType) {
        case 'instructionText': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find(q => q.id === questionId);

            const updatedQuestion = {
                ...question,
                instructionText: value
            };

            setQuiz(prevQuiz => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(q => q.id === questionId ? updatedQuestion : q)
            }));
            break;
        }

        case 'answer': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find(q => q.id === questionId);

            const updatedQuestion = {
                ...question,
                answer: value
            };

            setQuiz(prevQuiz => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(q => q.id === questionId ? updatedQuestion : q)
            }));
            break;
        }

        case 'answerOption': {

            const questionId = parseInt(questionIdRaw, 10);

            const question = quiz.questions.find(q => q.id === questionId);

            const answerOptionIndex = parseInt(answerOptionIndexRaw, 10);

            const updatedQuestion = {
                ...question,
                answerOptions: question.answerOptions
                    .map((a, index) => index === answerOptionIndex ? value : a)
            };

            setQuiz(prevQuiz => ({
                ...prevQuiz,
                questions: prevQuiz.questions
                    .map(q => q.id === questionId ? updatedQuestion : q)
            }));
            break;
        }

        default:
            setQuiz(prevQuiz => ({
                ...prevQuiz,
                [nameType]: value
            }));
            break;
    }
}

function findQuizById(quizzes, id) {
    return quizzes.find(q => q.id === id) || null;
}

function mapStateToProps(state, ownProps) {

    const quizzes = state.quizData.quizzes;

    const routeId = ownProps.match.params.id;
    const quizId = routeId != null
        ? parseInt(routeId, 10)
        : null;

    const quiz = findQuizById(quizzes, quizId) || {name: "", questions: []};

    return {
        quiz,
        quizzes // Not crazy about having this depend on a list of quizzes since I'm only really interested in editing a single quiz. Will consider options to get rid of this like saying if quizzes are loaded, or maybe just looking up a quiz some how.
    }
}

const mapDispatchToProps = {
    saveQuiz,
    loadQuizzes
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditQuizPage);