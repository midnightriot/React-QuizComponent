import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Changes for practice
// [DONE]Functions instead of classes where possible
// [DONE]Redux for store
// [DONE]React-Redux (Use mapDispatchToProps with bindActionCreators
// [DONE]middle ware for dev mode only
// [DONE WITH MOCK]http server interaction
// [DONE]multiple quizzes with quiz selection
// [DONE]Hooks with function components (i.e. componentDidMount but on function)
// [WORKING ON]Question/Quiz editing/adding (admin) Requires react router, validation (Make formComponents stateless (just make control components have have state like in pluralsite vid.)

// PropTypes or Typescript
// Style with bootstrap
// User login/user
// Score tracking
// Score board
// ServerSide Rendering
// ServiceWorkers
// Progressive web app
// Specs

// Immediate ToDo:
// type script interfaces for some type checking.

// Next ToDo:
// Selectable quiz on edit page, links for this
// Add new question to existing quiz
// Add a new quiz

// After ToDo:
// Add an initial state object (like in video)
// Move actions and reducers into redux folder
// Split up actions into related groups
// Figure out which state can be local component react state and which should be redux store application wide state.
// Convert to typescript
// Style with bootstrap
// Add more features from Changes for practice section


render(<App/>, document.getElementById('root'));

registerServiceWorker();
