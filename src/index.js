import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/onboard/login.js'
import Signup from './components/onboard/signup'
import ChatBox from './components/messenger/chatBox'
import ConverstationList from './components/messenger/convertationList'
import Button from '@material-ui/core/Button';
import * as serviceWorker from './serviceWorker'


ReactDOM.render(<ChatBox />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
