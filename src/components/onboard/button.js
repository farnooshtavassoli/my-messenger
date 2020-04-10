import React from 'react'

const existClass = ['delete-btn', 'default-btn', 'Login']
export default class Button extends React.Component {
  render () {
    return (
      <button
        className={this.props.className && existClass.includes(this.props.className) ? this.props.className : 'default-btn'}
      >{this.props.lable}</button>
    )
  }
}
