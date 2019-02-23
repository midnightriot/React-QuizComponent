import React from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

function Quiz(props) {

    function showNextQuestion() {
        props.showNextQuestion();
    }

    function handleResetClick() {
        props.handleResetClick();
    }

    function onQuizAnswerSelected(answer) {
        props.onQuizAnswerSelected(answer);
    }

    const isQuizEnd = props.isQuizEnd;

    const componentToDisplay = isQuizEnd
        ? <QuizEnd resetClickHandler={handleResetClick}/>
        : <QuizQuestion
            quiz_question={props.quizQuestion}
            showNextQuestionHandler={showNextQuestion}
            onQuizAnswerSelected={onQuizAnswerSelected}
            answeredIncorrectly={props.answeredIncorrectly}/>;

    return (
        <div>
            {componentToDisplay}
        </div>
    );
}

export default Quiz;
