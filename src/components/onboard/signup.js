import React from 'react'
import validate from '../../validation/validateFunction.js'
import Input from './input'
import Button from './button'
import { Link } from 'react-router-dom'

  export default class Signup extends React.Component{
     constructor () {
       super()
        this.state = {
          fields: {
          email: '',
          password: '',
          retypePassword: ''
        },
          error: {
          email: '',
          password: ''
        },
        clicked: false
    }

  }

  handleChange (key, value) {
    console.log('####', key, value)
    this.setState({ ...this.state, fields: { ...this.state.fields, [key]: value } })
  }

    render() {
    console.log('£££££', this.state)
      return (

      <div className='container'>
         <h2>{this.props.title}</h2>

        <h1 className='header'>Welcome</h1>

          <label className="fname">Email</label>

          <Input
            className='Username'
            myOnChange={(key, value) => this.handleChange(key, value)}
            name='email'
            error=''
          />

         { this.state.emailError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.emailError}</p>
            }

          <label className="fname">password</label>

          <Input
            className='password'
            name='password'
            myOnChange={(key, value) => this.handleChange(key, value)}
            type='password'
             value={this.state.password}
          />

        { this.state.passwordError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.passwordError}</p>
            }
        <label className="fname">Confirm password</label>
          <Input
            className='confirmpassword'
            name='confirmpassword'
            myOnChange={(key, value) => this.handleChange(key, value)}
            type='password'
            value={this.state.confirmpassword}
          />

        { this.state.passwordError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.confirmpassword}</p>
            }

          <Button
            className='Login'
            lable='Sign Up'
          />

          <p className='link'>Can't log in?</p>

          <p className='endtext'>  Privacy policy</p>

      </div>



    )
  }
}
