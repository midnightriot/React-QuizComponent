import React, {Component} from 'react'

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
                        <li>
                            {this.quizQuestion.answer_options[0]}
                        </li>
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