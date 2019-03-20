import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AddEditQuizForm from './AddEditQuizForm';
import {loadQuizzes, saveQuiz} from '../../actions/quizActions';

function AddEditQuizPage({isSaving, loadQuizzes, saveQuiz, history, quizzes, ...props}) {

    const [quiz, setQuiz] = useState({...props.quiz});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (quizzes == null || quizzes.length === 0) {
            loadQuizzes()
                // .catch(error => alert(`Failed to load quizzes from AddEditQuiz: ${error}`));
        } else {
            setQuiz({...props.quiz});
        }
    }, [props.quiz]);

    return (
        <AddEditQuizForm
            quiz={quiz}
            onChange={onChange}
            isSaving={isSaving}
            onSave={onSave}
        />
    );

    function onChange(event) {
        const {name, value} = event.target; // Lets us retain a ref

        setQuiz(prevQuiz => ({
            ...prevQuiz,
            [name]: value // May need to process value to get in correct format.
        }));

    }

    function onSave(event) {
        event.preventDefault();
        saveQuiz(quiz).then(() => history.push('/'));
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

    const quiz = findQuizById(quizzes, quizId) || { name: "", questions: []};

    return {
        quiz,
        isSaving: state.addEditQuiz.isSaving,
        quizzes // Not crazy about having this depend on a list of quizzes since I'm only really interested in editing a single quiz. Will consider options to get rid of this like saying if quizzes are loaded, or maybe just looking up a quiz some how.
    }
}

const mapDispatchToProps = {
    saveQuiz,
    loadQuizzes
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditQuizPage);