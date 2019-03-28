import React from 'react';
import TextInput from '../Common/Form/TextInput';

function AddEditQuestion({question, onChange, errors}) {

    errors = errors || {};

    const answerOptionErrors = (errors.answerOptionDetails || []).map(e => e.error);

    return (
        <React.Fragment>
            {errors.id && <div className="alert alert-danger">{errors.id}</div>}

            <h3>{`Edit Question: ${question.id}`}</h3>
            <TextInput
                label='Instruction Text'
                name={`instructionText.${question.id}`}
                value={question.instructionText}
                error={errors.instructionText}
                placeholder='The text for the question'
                onChange={onChange}
            />
            <TextInput
                label='Answer'
                name={`answer.${question.id}`}
                value={question.answer}
                error={errors.answer}
                placeholder='The answer option that is correct'
                onChange={onChange}
            />

            <h4>Answer Options</h4>
            {errors.answerOptions && <div className="alert alert-danger">{errors.answerOptions}</div>}

            {question.answerOptions.map((answerOption, index) =>
                <TextInput
                    key={index}
                    label={`Option: ${index + 1}`}
                    name={`answerOption.${question.id}.${index}`}
                    placeholder='An answer to the question'
                    error={answerOptionErrors[index]}
                    value={answerOption}
                    onChange={onChange}
                />)}
        </React.Fragment>
    );
}

export default AddEditQuestion;