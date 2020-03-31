import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import Login from './components/onboard/login'
import Signup from './components/onboard/signup'
import Messenger from './components/messenger/index.js'
import { createStore } from 'redux'
import conversation from './reducer/conversation'
import { Provider } from 'react-redux';



const store = createStore(conversation)

function App () {
  return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Signup/' component={Signup} />
            <Route exact path='/messenger/' component={Messenger} />
          </Switch>
        </Router>
      </Provider>
  )
}

export default App
