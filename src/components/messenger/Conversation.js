import React from 'react'
import pic from '../../pic.png'


class Conversation extends React.Component{
    render() {
        return (

                <div className='ConvertationList'>
                <img className='pic' src={pic}/>
                  <div className='information'>
                    <span>{this.props.name} </span><br/>
                    <span>hellooo</span>
                  </div>
                </div>



        )
    }
}
 export default Conversation
