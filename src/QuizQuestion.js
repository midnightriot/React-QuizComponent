import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <main>
                <section>
                    <p>
                        {this.quizQuestion.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) =>
                            <QuizQuestionButton
                                clickHandler={this.handleClick.bind(this)}
                                button_text={answer_option} key={index}
                            />)
                        }
                    </ul>
                </section>
            </main>
        );
    }

    handleClick(buttonText) {
        const answeredCorrectly = buttonText === this.quizQuestion.answer;

        answeredCorrectly && this.props.showNextQuestionHandler();
    }

    get quizQuestion() {
        return this.props.quiz_question
    }
}

export default QuizQuestion;