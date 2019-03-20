import React from 'react'

function QuizSelection({quizzes, selectedQuizId, onQuizSelected}) {

    return (
        <React.Fragment>
            <div>Please select a Quiz</div>
            <select onChange={_onQuizSelected} value={selectedQuizId}>
                <option key={-1} value={-1}>Please select a quiz</option>
                {quizzes.map(q => <option key={q.id} value={q.id}>{q.name}</option>)}
            </select>
        </React.Fragment>
    );

    function _onQuizSelected(event) {
        const id = parseInt(event.target.value);

        if (id > -1) {
            onQuizSelected(id);
        }
    }
}

export default QuizSelection;