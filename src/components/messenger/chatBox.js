import React from 'react'
import Header from './header'
import sendIcon from '../../send.png'
import ChatScreen from './chatScreen'
import Footer from './footer'
import ConversationList from './convertationList'
import HeaderContainer from '../../container/HeaderContainer'


 export default  class ChatBox extends React.Component{
    constructor() {
        super()
        this.state = {
            newMessage:''
        }

        // IMPORTANT
        // don't forget to bind the function when using ordinary function
        // the alternative would be using an arrow function instead.
        this.getNewMessage = this.getNewMessage.bind(this)
    }

    // you did bind the function to class so it's OK.
    getNewMessage(newMessage) {
        this.setState({newMessage})
    }

    render() {
        return (

               <div className='chatbox' >
                   <HeaderContainer/>
                   <ChatScreen newMessage={this.state.newMessage}/>
                   <Footer getValue={this.getNewMessage} />

                </div>

        )
    } 
}
