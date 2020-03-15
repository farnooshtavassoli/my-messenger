import React from 'react'

class MyInput extends React.Component{
    render() {
        return (
            <>

                <input
                    className='myinput'
                    className='Username'
                    type={this.props.type}
                    name={this.props.name}

                    onChange={(e) => this.handleChangeEmail(e)}


                />
                {this.props.error &&
                    <p className='pError'>{this.props.error}</p>}
           </>

        )
    }
}
export default MyInput
