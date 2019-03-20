import React, {useEffect} from 'react';
import Quiz from '../Quiz/Quiz';
import QuizSelection from './QuizSelection';
import {connect} from 'react-redux';
import {loadActiveQuiz, loadQuizzes, quizAnswerAttemptMade, resetQuiz} from '../../actions/quizActions';

function TakeQuizPage({
                            quizzes,
                            isLoadingQuizzes,
                            isQuizEnded,
                            hasActiveQuiz,
                            onActiveQuizSelected,
                            isQuizLoading,
                            selectedQuizId,
                            loadQuizzes,
                            answeredIncorrectly,
                            quizPosition,
                            activeQuiz,
                            onReset,
                            onQuizAnswerSelected,
                        }) {

    useEffect(() => {
       if (quizzes == null || quizzes.length === 0) {
           loadQuizzes()
       }
    }, []);

    const showQuizSelection = !isLoadingQuizzes
        && !isQuizLoading
        && (isQuizEnded || !hasActiveQuiz);

    const showQuiz = !isQuizLoading && hasActiveQuiz;

    return (
        <React.Fragment>
            {isLoadingQuizzes && <div>Getting Quizzes...</div>}
            {showQuizSelection && <QuizSelection
                                    quizzes={quizzes}
                                    selectedQuizId={selectedQuizId}
                                    onQuizSelected={onActiveQuizSelected}
                                 />}

            {isQuizLoading && <div>Loading Quiz...</div>}
            {showQuiz && <Quiz
                            isQuizEnded={isQuizEnded}
                            answeredIncorrectly={answeredIncorrectly}
                            quizPosition={quizPosition}
                            activeQuiz={activeQuiz}
                            onReset={onReset}
                            onQuizAnswerSelected={onQuizAnswerSelected}
                        />}
        </React.Fragment>
    );
}

function mapStateToProps(state, ownProps) {
    const quiz = state.activeQuiz.activeQuiz;

    return {
        quizzes: state.quizData.quizzes,
        isLoadingQuizzes: state.quizData.isLoadingQuizzes,
        isQuizEnded: state.activeQuiz.isQuizEnded,
        isQuizLoading: state.activeQuiz.isQuizLoading,
        selectedQuizId: quiz != null ? quiz.id : -1,
        hasActiveQuiz: quiz != null,
        answeredIncorrectly: state.activeQuiz.answeredIncorrectly,
        quizPosition: state.activeQuiz.quizPosition,
        activeQuiz: quiz
    }
}

const mapDispatchToProps = {
    onActiveQuizSelected: loadActiveQuiz,
    loadQuizzes,
    onReset: resetQuiz,
    onQuizAnswerSelected: quizAnswerAttemptMade
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeQuizPage);