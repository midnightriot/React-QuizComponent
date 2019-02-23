import React, {Component} from 'react'
import './App.css'
import Quiz from './Quiz'

// Changes for practice
// 1. [DONE]Functions instead of classes where possible
// 2. Redux for store
// 3. React-Redux
// 4. Typescript

let quizData = require('./quiz_data.json');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };

        this.showNextQuestion = this.showNextQuestion.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.onQuizAnswerSelected = this.onQuizAnswerSelected.bind(this);
    }

    render() {

        const isQuizEnded = this.state.quiz_position - 1 === quizData.quiz_questions.length;

        return (
            <Quiz quizQuestion={this.quizQuestion}
                  quiz_position={this.state.quiz_position}
                  isQuizEnd={isQuizEnded}
                  handleResetClick={this.handleResetClick}
                  onQuizAnswerSelected={this.onQuizAnswerSelected}
                  answeredIncorrectly={this.state.answeredIncorrectly}
            />
        )
    }

    showNextQuestion() {

        const nextQuestionPosition = this.state.quiz_position + 1;

        this.setState({quiz_position: nextQuestionPosition});
    }

    handleResetClick() {
        this.setState({quiz_position: 1})
    }

    onQuizAnswerSelected(answer) {

        const answeredCorrectly = answer === this.quizQuestion.answer;

        this.setState({answeredIncorrectly: !answeredCorrectly});

        answeredCorrectly && this.showNextQuestion();
    }

    get quizQuestion() {
        return quizData.quiz_questions[this.state.quiz_position - 1]
    }
}

export default App;
