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
                        <QuizQuestionButton button_text={this.quizQuestion.answer_options[0]}/>
                    </ul>
                </section>
            </main>
        );
    }

    get quizQuestion() {
        return this.props.quiz_question
    }
}

export default QuizQuestion;