import React from 'react'
import sendIcon from '../../send.png'



class Footer extends React.Component{
    render() {
        return (

           <div className='footer'>
           <input className='newMassage' />
           <img className='sendIcon' src={sendIcon}/>
           </div>

        )
    }
}
 export default Footer
