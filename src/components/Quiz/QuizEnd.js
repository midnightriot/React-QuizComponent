import React from 'react'

function QuizEnd({onReset}) {

    function onResetClicked(event) {
        event.preventDefault();

        onReset();
    }

    return (
        <div>
            <p>Thanks for playing!</p>
            <button onClick={event => onResetClicked(event)}>Reset Quiz</button>
        </div>
    );
}

export default QuizEnd;