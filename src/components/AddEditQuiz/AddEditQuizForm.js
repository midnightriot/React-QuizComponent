import React from 'react';
import TextInput from '../Common/Form/TextInput';
import AddEditQuestion from './AddEditQuestion';

function AddEditQuizForm({quiz, errors, isSaving, onChange, onSave}) {

    const canSave = !isSaving || errors == null;

    errors = errors || {};

    const questionErrors = errors.questionDetails || [];

    return (
        <form onSubmit={onSave}>
            <h1>{`Edit quiz: ${quiz.id}`}</h1>
            {errors.id && <div className="alert alert-danger">{errors.id}</div>}

            <TextInput label='Quiz Name'
                       onChange={onChange}
                       placeholder={"e.x. Which of these is blue"}
                       name='name'
                       error={errors.name}
                       value={quiz.name}
            />

            <h2>Questions</h2>
            {errors.question && <div className="alert alert-danger">{errors.questions}</div>}

            {quiz.questions
                .map((question, index) =>
                    <AddEditQuestion
                        question={question}
                        onChange={onChange}
                        key={question.id}
                        errors={questionErrors[index]}
                    />)}

            <button type='submit' disabled={canSave} className="btn btn-primary">
                {isSaving ? 'saving...' : 'save'}
            </button>
        </form>

    );
}

export default AddEditQuizForm;