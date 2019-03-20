import React from 'react';

function AddEditQuestion({question}) {
    return (
        <React.Fragment>
            <h3>{`Edit Question: ${question.id}`}</h3>
        </React.Fragment>
    );
}

export default AddEditQuestion;