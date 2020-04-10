import React from 'react'
import pic from '../../pic.png'



 export default class Header extends React.Component{
    render() {
        return (
            <div className='header-container'>

                <img className='head-pic' src={pic}/>
                 <div className='header-messenger'>  {this.props.name}</div>

            </div>



        )
    }
}
