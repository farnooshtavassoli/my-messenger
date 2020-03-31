import React from 'react'
import ChatBox from './chatBox'
import ConversationList from './convertationList'

export default class Messenger extends React.Component{
    render() {
        return (
            <div className='chatcontainer'>
                <ConversationList />
                <ChatBox />
            </div>
         )
     }
 }
