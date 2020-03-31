import React from 'react'
import sendIcon from '../../send.png'
import { connect } from 'react-redux'
import { sendNewMessage } from '../../action/conversation'

class Footer extends React.Component{
    constructor() {
        super()
        this.state = {
            newMassage:''
        }
    }

    sendMessage() {
        this.props.dispatch(sendNewMessage(this.state.sendMessage))
        this.setState({ newMassage: ''})
    }
    render() {
        return (

           <div className='footer'>
                <input
                    className='new-message'
                    value={this.state.newMassage}
                    onChange={(e) => this.setState ({ newMassage: e.target.value})}
                />
                <img
                    className='sendIcon'
                    onClick={() => this.sendMessage()}
                    src={sendIcon} />
           </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch : dispatch
})
 export default connect (mapDispatchToProps)(Footer)
