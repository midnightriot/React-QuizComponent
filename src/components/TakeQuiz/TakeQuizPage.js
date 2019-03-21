import React, {useEffect} from 'react';
import Quiz from '../Quiz/Quiz';
import QuizSelection from './QuizSelection';
import {connect} from 'react-redux';
import {loadActiveQuiz, loadQuizzes, quizAnswerAttemptMade, resetQuiz} from '../../actions/quizActions';
import Spinner from '../Common/Spinner/Spinner';

function TakeQuizPage({
                          quizzes,
                          isLoading,
                          isQuizEnded,
                          hasActiveQuiz,
                          onActiveQuizSelected,

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


    const showQuizSelection = !isLoading
        && (isQuizEnded || !hasActiveQuiz);

    const showQuiz = !isLoading && activeQuiz != null;

    return (
        <React.Fragment>
            {isLoading && <Spinner/>}
            {showQuizSelection && <QuizSelection
                quizzes={quizzes}
                selectedQuizId={selectedQuizId}
                onQuizSelected={onActiveQuizSelected}
            />}
                                 
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

    // ToDo: try to reduce the amount of props
    return {
        quizzes: state.quizData.quizzes,
        // isLoadingQuizzes: state.quizData.isLoadingQuizzes,
        isQuizEnded: state.activeQuiz.isQuizEnded,
        // isQuizLoading: state.activeQuiz.isQuizLoading,
        selectedQuizId: quiz != null ? quiz.id : -1,
        // hasActiveQuiz: quiz != null,
        answeredIncorrectly: state.activeQuiz.answeredIncorrectly,
        quizPosition: state.activeQuiz.quizPosition,
        activeQuiz: quiz,
        isLoading: state.apiStatus > 0
    }
}

const mapDispatchToProps = {
    onActiveQuizSelected: loadActiveQuiz,
    loadQuizzes,
    onReset: resetQuiz,
    onQuizAnswerSelected: quizAnswerAttemptMade
};

export default connect(mapStateToProps, mapDispatchToProps)(TakeQuizPage);