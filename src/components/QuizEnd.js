import React from 'react'

function QuizEnd({onReset}) {

    function onResetClicked(event) {
        event.preventDefault();

        onReset();
    }

    return (
        <div>
            <p>Thanks for playing!</p>
            <a href='' onClick={event => onResetClicked(event)}>Reset Quiz</a>
        </div>
    );
}


export default QuizEnd;