import React from 'react';
import TextInput from '../Common/Form/TextInput';
import AddEditQuestion from './AddEditQuestion';

function AddEditQuizForm({quiz, errors, isSaving, onChange, onSave}) {
    return (
        <form onSubmit={onSave}>
            <h2>{`Edit quiz: ${quiz.id}`}</h2>
            <TextInput label='Quiz Name'
                       onChange={onChange}
                       placeholder={"e.x. Which of these is blue"}
                       name='name'
                       value={quiz.name}
            />
            {quiz.questions.map(q => <AddEditQuestion question={q} onChange={onChange} key={q.id}/>)}

            <button type='submit' disabled={isSaving} className="btn btn-primary">
                {isSaving ? 'saving...' : 'save'}
            </button>
        </form>

    );
}

export default AddEditQuizForm;