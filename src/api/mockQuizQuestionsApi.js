import delay from './delay';

let quizData = getInitialQuizData();

function getInitialQuizData() {
    return require('./quizData.json');
}

class MockQuizApi {
    static getQuizData(quizId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const quiz = quizData.quizzes
                    .find(quiz => quiz.id === quizId);

                if (quiz != null) {
                    resolve(Object.assign({}, quiz));
                } else {
                    reject();
                }
            }, delay);
        });
    }

    static getQuizzes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const quizzes = quizData.quizzes.map(q => ({...q}));

                resolve(Object.assign([], quizzes));
            }, delay);
        });
    }

    // ToDo: handle errors
    static saveQuiz(quiz) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isNewQuiz = quiz.id == null;
                if (isNewQuiz) {
                    const maxId = quizData.quizzes.reduce((max, q) => q.id > max ? q.id : max, 0);
                    const newQuiz = Object.assign({}, quiz, {id: maxId + 1});

                    quizData = {
                        ...quizData,
                        quizzes: [...quizData.quizzes, newQuiz]
                    };

                    resolve(newQuiz);
                } else {
                    const index = quizData.quizzes.findIndex(q => q.id === quiz.id);
                    if (index < 0) {
                        throw 'Could not find existing quiz while trying to update.'
                    }
                    const existingQuiz = quizData.quizzes[index];
                    const updatedQuiz = Object.assign({}, existingQuiz, quiz);

                    quizData = {
                        ...quizData,
                        quizzes: quizData.quizzes.map(q => q.id === updatedQuiz.id ? updatedQuiz : q)
                    };
                    resolve(updatedQuiz);
                }
            }, delay);
        })
    }
}

export default MockQuizApi;