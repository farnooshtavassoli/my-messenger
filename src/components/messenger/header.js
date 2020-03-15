import React from 'react'
import pic from '../../pic.png'



class Header extends React.Component{
    render() {
        return (
            <div className='header-container'>
                <img className='head-pic' src={pic}/>
                 <div className='header'>Farnoosh Tavassoli</div>

            </div>





        )
    }
}
 export default Header
