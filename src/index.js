import React from 'react'
import {render} from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {configureStore} from './store/configureStore';
import Quiz from './components/Quiz';
import {Provider} from 'react-redux';
import {loadActiveQuiz} from './actions/quizActions';

// Changes for practice
// [DONE]Functions instead of classes where possible
// [DONE]Redux for store
// [DONE]React-Redux (Use mapDispatchToProps with bindActionCreators
// [DONE]middle ware for dev mode only
// [DONE WITH MOCK]http server interaction
// multiple quizzes with quiz selection
// Question/Quiz editing/adding (admin) Requires react router, validation
// Score tracking
// User login
// Score board
// Style with bootstrap
// PropTypes or Typescript
// ServerSide Rendering
// ServiceWorkers
// Progressive web app

const store = configureStore();
store.dispatch(loadActiveQuiz());

const app = (
    <Provider store={store}>
        <Quiz/>
    </Provider>
);

render(app, document.getElementById('root'));


registerServiceWorker();
