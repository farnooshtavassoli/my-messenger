import React from 'react'
import Header from './header'
import ChatScreen from './chatScreen'
import Footer from './footer'
import ConvertationList from './convertationList'


class ChatBox extends React.Component{
    render() {
        return (

            <div className='chatcontainer'>
                <ConvertationList/>
               <div className='chatbox' >
                   <Header/>
                   <ChatScreen />
                   <Footer />

               </div>
            </div>


        )
    }
}
 export default ChatBox
