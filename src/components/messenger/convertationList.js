import React from 'react'
import pic from '../../pic.png'
import Conversation from './Conversation'
import { connect } from 'react-redux'


class ConvertationList extends React.Component{
     constructor  () {
        super()
        this.state = {
            convList: [
                {
                    name : 'mina',
                    latestMessage: 'hi',
                    id:1

                },
                  {
                    name : 'gvgrfb',
                      latestMessage: 'hi',
                    id:15


                },

                {
                    name : 'erv',
                    latestMessage: 'hi',
                    id:11


                },
                      {
                    name : 'erv',
                          latestMessage: 'hi',
                    id:12


                }

            ]
        }
    }

    render() {
        return (
            <div className='contact'>

                {
                    this.state.convList.map((conv, index) => {
                        return (
                        <Conversation name={conv.name} key={conv.id}/>

                        )

                    })
                }


            </div>


        )
    }
}
 export default ConvertationList
