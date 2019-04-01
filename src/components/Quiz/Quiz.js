import React from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
import './Quiz.css'

// Prob should rename this since Quiz is also a type. Maybe something like active quiz (hopefully something better)
function Quiz({
                  isQuizEnded,
                  answeredIncorrectly,
                  onReset,
                  onQuizAnswerSelected,
                  quizPosition,
                  activeQuiz
              }) {

    const quizQuestion = activeQuiz.questions[quizPosition - 1];

    return (
        <React.Fragment>
            {isQuizEnded
                ? <QuizEnd onReset={onReset}/>
                : <QuizQuestion quizQuestion={quizQuestion}
                                answeredIncorrectly={answeredIncorrectly}
                                onQuizAnswerSelected={onQuizAnswerSelected}
                />
            }
        </React.Fragment>
    );
}

export default Quiz;