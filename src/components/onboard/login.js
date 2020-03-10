import React from 'react'
import validate from '../../validation/validateFunction.js'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      emailError: null,
      passwordError: null
    }
  }

  handleChange (e) {
    console.log('tttttt', e.target.value)
  }
  handleChangeEmail (e) {
    let name = e.target.name
      this.setState({ [name]: e.target.value })
  }
  validationFields () {
        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)
        this.setState({emailError: emailError, passwordError: passwordError })
  }
  render() {
     console.log('thissss::::', this.state)
        return (
          <div className='container'>
            <h1 className='header'>Welcome</h1>
            <h2>{this.props.title}</h2>
            <label className="fname">Email</label>
            <input className=' Username '
              onChange={(e) => this.handleChangeEmail(e)}
            name='email'
            />
            { this.state.emailError !== null &&
              <p style={{ color: 'red' }}>{this.state.emailError}</p>
            }
            <label className="fname">password</label>
            <input className=' password '
            name='password'
            onChange={(e) => this.handleChangeEmail(e)}
              type='password' />
            { this.state.passwordError !== null &&
              <p style={{ color: 'blue ' }}>{this.state.passwordError}</p>
            }
            <button className='Login'
               onClick={() => this.validationFields()}
            >LOGIN</button>
            <p className='link'>Can't log in?</p>
            <p className='endtext'>  Privacy policy</p>

         </div>
        )
     }
  }
export default Login
