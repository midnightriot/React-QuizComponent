import React from 'react'
import QuizQuestionButton from './QuizQuestionButton'

function QuizQuestion(props) {

    return (
        <main>
            <section>
                <p>
                    {props.quiz_question.instruction_text}
                </p>
            </section>
            <section className="buttons">
                <ul>
                    {props.quiz_question.answer_options.map((answer_option, index) =>
                        <QuizQuestionButton
                            clickHandler={handleClick}
                            button_text={answer_option} key={index}
                        />)
                    }
                </ul>
            </section>
            {props.answeredIncorrectly ? <p className='error'>Sorry, that's not right</p> : null}
        </main>
    );

    function handleClick(buttonText) {

        props.onQuizAnswerSelected(buttonText);
    }
}

export default QuizQuestion;