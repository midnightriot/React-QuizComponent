import React from 'react';
import {configureStore} from '../store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TakeQuizPage from './TakeQuiz/TakeQuizPage';
import AddEditQuizPage from './AddEditQuiz/AddEditQuizPage';
import PageNotFound from './PageNotFound';
import Header from './Common/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path='/' component={TakeQuizPage}/>
                    <Route path='/AddEdit/:id' component={AddEditQuizPage}/>
                    <Route path='/AddEdit' component={AddEditQuizPage}/>
                    <Route component={PageNotFound}/>
                </Switch>

                <ToastContainer autoClose={3000} hideProgressBar />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
