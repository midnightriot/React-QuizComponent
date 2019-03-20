import React from 'react'

function QuizQuestionButton({onQuizAnswerSelected, answerText}) {

    function handleClick() {
        onQuizAnswerSelected(answerText)
    }

    return (
        <li>
            <button onClick={handleClick}>{answerText}</button>
        </li>
    );
}

export default QuizQuestionButton;