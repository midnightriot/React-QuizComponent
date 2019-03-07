import React from 'react'
import {render} from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {configureStore} from './store/configureStore';
import Quiz from './components/Quiz';
import {Provider} from 'react-redux';
import {loadActiveQuiz} from './actions/quizActions';

// Changes for practice
// 1. [DONE]Functions instead of classes where possible
// 2. [DONE]Redux for store
// 3. React-Redux (Use mapDispatchToProps with bindActionCreators
// middle ware for dev mode only (reduxImmutableStateInvariant, dev tools)

// 4. PropTypes
// 5. Typescript
// 6. Add routing to form, validation, enter new question
// 7. http server interaction

const store = configureStore();
store.dispatch(loadActiveQuiz());

const app = (
    <Provider store={store}>
        <Quiz/>
    </Provider>
);

render(app, document.getElementById('root'));


registerServiceWorker();
