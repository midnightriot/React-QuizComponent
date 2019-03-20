import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {configureStore} from './store/configureStore';
import {Provider} from 'react-redux';
import AddEditQuizPage from './components/AddEditQuiz/AddEditQuizPage';
import TakeQuizPage from './components/TakeQuiz/TakeQuizPage';

// Changes for practice
// [DONE]Functions instead of classes where possible
// [DONE]Redux for store
// [DONE]React-Redux (Use mapDispatchToProps with bindActionCreators
// [DONE]middle ware for dev mode only
// [DONE WITH MOCK]http server interaction
// [DONE]multiple quizzes with quiz selection
// [DONE]Hooks with function components (i.e. componentDidMount but on function)
// [WORKING ON]Question/Quiz editing/adding (admin) Requires react router, validation (Make formComponents stateless (just make control components have have state like in pluralsite vid.)

// Score tracking
// User login
// Score board
// Style with bootstrap
// PropTypes or Typescript
// ServerSide Rendering
// ServiceWorkers
// Progressive web app
// Specs


// Immediate ToDo:
// Figure out why my routing is jacked
// Allow edit of quiz questions (existing)
// Basic validation for quiz questions and quiz in form with errors displayed

// Next ToDo:
// Add new question to existing quiz
// Add a new quiz

// After ToDo:
// Figure out which state can be local component react state and which should be redux store application wide state.
// Split up actions into related groups?
// Convert to typescript
// Style with bootstrap
// Add more features from Changes for practice section

const store = configureStore();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path='/' component={TakeQuizPage}/>
            <Route path='/AddEdit/:id' component={AddEditQuizPage}/>
            <Route path='/AddEdit/' component={AddEditQuizPage}/>
        </BrowserRouter>
    </Provider>
);

render(app, document.getElementById('root'));

registerServiceWorker();
