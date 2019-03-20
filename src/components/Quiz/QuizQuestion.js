import React from 'react'
import QuizQuestionButton from './QuizQuestionButton'

function QuizQuestion({quizQuestion, answeredIncorrectly, onQuizAnswerSelected}) {

    const quizButtons = quizQuestion.answerOptions.map((answerOption, index) =>
        <QuizQuestionButton
            onQuizAnswerSelected={onQuizAnswerSelected}
            answerText={answerOption} key={index}
        />);


    const answeredIncorrectlyDescription = answeredIncorrectly
        ? <p className='error'>Sorry, that's not right</p>
        : null;

    return (
        <main>
            <section>
                <p>
                    {quizQuestion.instructionText}
                </p>
            </section>
            <section className="buttons">
                <ul>
                    {quizButtons}
                </ul>
            </section>
            {answeredIncorrectlyDescription}
        </main>
    );
}

export default QuizQuestion;