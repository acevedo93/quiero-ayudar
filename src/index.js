import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import rootReducer from './redux/reducers'
import './css/style.css'


const root = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)


ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    ,root 
)