import React from 'react'
import pic from '../../pic.png'
import { connect } from 'react-redux'
import { saveUsername } from '../../action/conversation'


class Conversation extends React.Component{
  render() {
      console.log('conv :::', this.props)
        return (

          <div className='ConvertationList'
           onClick={() => this.props.dispatch(saveUsername(this.props.name))}>
                <img className='pic' src={pic}/>
                  <div className='information'>
                    <span>{this.props.name} </span><br/>
                    <span>hellooo</span>
                  </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

 export default connect(mapDispatchToProps) (Conversation)
