import React from 'react'
import validate from '../../validation/validateFunction.js'
import MyInput from './input'

  class Signup extends React.Component{
     constructor () {
       super()

      this.state = {
      email: '',
      password: '',
      comfirmpassword:'',
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
    return (

      <div className='container'>
         <h2>{this.props.title}</h2>

        <h1 className='header'>Welcome</h1>
        <label className="fname">Email</label>
        <MyInput className='Username'
          onChange={(e) => this.handleChangeEmail(e)}
          name='email'
         />
         { this.state.emailError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.emailError}</p>
            }
        <label className="fname">password</label>
        <MyInput className='password'
          name='password'

            onChange={(e) => this.handleChangeEmail(e)}
          type='password' />
        { this.state.passwordError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.passwordError}</p>
            }
        <label className="fname">Confirm password</label>
        <MyInput className='confirmpassword'
          name='confirmpassword'

            onChange={(e) => this.handleChangeEmail(e)}
          type='confirmpassword' />
        { this.state.passwordError !== null &&
              <p className= 'pError' style={{ color: '#c72963' }}>{this.state.confirmpassword}</p>
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

export default Signup
