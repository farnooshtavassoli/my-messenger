import React from 'react'
import pic from '../../pic.png'


class ContactList extends React.Component{
    render() {
        return (

                <div className='ConvertationList'>

                    <img className='pic' src={pic}/>

                <div className='information'>
                    <span>Farnaz </span><br/>
                    <span>hellooo</span>

                </div>
                </div>



        )
    }
}
 export default ContactList
