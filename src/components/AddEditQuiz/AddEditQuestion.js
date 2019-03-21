import React from 'react';
import TextInput from '../Common/Form/TextInput';

function AddEditQuestion({question, onChange}) {
    return (
        <React.Fragment>
            <h3>{`Edit Question: ${question.id}`}</h3>
            <TextInput
                label='Instruction Text'
                name={`instructionText.${question.id}`}
                value={question.instructionText}
                placeholder='The text for the question'
                onChange={onChange}
            />
            <TextInput
                label='Answer'
                name={`answer.${question.id}`}
                value={question.answer}
                placeholder='The answer option that is correct'
                onChange={onChange}
            />
            <h4>Answer Options</h4>
            {question.answerOptions.map((a, index) =>
                <TextInput
                    key={index}
                    label={`Option: ${index + 1}`}
                    name={`answerOption.${question.id}.${index}`}
                    placeholder='An answer to the question'
                    value={a}
                    onChange={onChange}
                />)}
        </React.Fragment>
    );
}

export default AddEditQuestion;