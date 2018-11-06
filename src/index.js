import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './css/style.css'

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    ,root 
)