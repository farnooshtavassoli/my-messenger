import React from 'react'
import Header from './header'
import sendIcon from '../../send.png'
import ChatScreen from './chatScreen'
import Footer from './footer'
import ConversationList from './convertationList'


 export default  class ChatBox extends React.Component{
    constructor() {
        super()
        this.state = {
            newMessage:''
        }
        this.getNewMessage = this.getNewMessage.bind(this)
    }

    getNewMessage(newMessage) {
        this.setState({newMessage})
    }
    render() {
        return (

               <div className='chatbox' >
                   <Header/>
                   <ChatScreen newMessage={this.state.newMessage}/>
                   <Footer getValue={this.getNewMessage} />

                </div>

        )
    }
}
