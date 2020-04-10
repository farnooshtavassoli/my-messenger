import React from 'react'

export default  class Input extends React.Component{
    render() {
        return (
            <>
                {this.props.lable &&
                    <span>{this.props.lable}</span>}
                <input

                    className='Username'
                    type={this.props.type}
                    name={this.props.name}
                    onChange={(e) => this.props.myOnChange(this.props.name, e.target.value)}
                />
                
                {this.props.error &&
                    <p className='pError'>{this.props.error}</p>}
           </>

        )
    }
}
