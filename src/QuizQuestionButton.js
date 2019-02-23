import React from 'react'

function QuizQuestionButton(props) {

    function handleClick() {
        props.clickHandler(props.button_text)
    }

    return (
        <li>
            <button onClick={handleClick}>{props.button_text}</button>
        </li>
    );
}

export default QuizQuestionButton;