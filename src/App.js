import React from 'react'
import {
  BrowserRouter as Router ,
  Switch ,
  Route
} from " react-router-dom "
import './App.css'
import Login from './components/onboard/login'
import Signup from './components/onboard/signup'

function App () {
  return (
    <Router>
      <switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Signup/' component={Signup} />
      </switch>
    </Router>
  )
}

export default App
