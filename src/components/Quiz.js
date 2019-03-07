import React from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
import './Quiz.css'
import {connect} from 'react-redux';
import {resetQuiz, quizAnswerAttemptMade} from '../actions/quizActions';

function Quiz({isQuizEnded, answeredIncorrectly, onReset, onQuizAnswerSelected, isQuizDataReady, quizPosition, activeQuiz}) {

    if (!isQuizDataReady) {
        return <div>Getting Quiz Data...</div>;
    }

    const quizQuestion = activeQuiz.quiz_questions[quizPosition - 1];

    const componentToDisplay = isQuizEnded
        ? <QuizEnd onReset={onReset}/>
        : (
            <QuizQuestion quizQuestion={quizQuestion}
                          answeredIncorrectly={answeredIncorrectly}
                          onQuizAnswerSelected={onQuizAnswerSelected}
            />
        );

    return (
        <div>
            {componentToDisplay}
        </div>
    );
}

function mapStateToProps(state, ownProps) {

    const activeQuiz = state.activeQuiz;

    return {
        isQuizEnded: activeQuiz.isQuizEnded,
        answeredIncorrectly: activeQuiz.answeredIncorrectly,
        isQuizDataReady: activeQuiz.isQuizDataReady,
        quizPosition: activeQuiz.quizPosition,
        activeQuiz: activeQuiz.activeQuiz
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onReset: () => dispatch(resetQuiz()),
        onQuizAnswerSelected: answer => dispatch(quizAnswerAttemptMade(answer))
    }
}

// export default connect(mapStateToProps)(test);
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);