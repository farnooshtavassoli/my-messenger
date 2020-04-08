import React from 'react'
import sendIcon from '../../send.png'
import { connect } from 'react-redux'
import { sendNewMessage } from '../../action/conversation'

class Footer extends React.Component{

    //remark: super will need to inherit the props from constructor if you want to use
    // props in constructor
    // more info:
    // https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
    constructor(props) {
        super(props)
        this.state = {
            newMassage: ''
        }
    }
    // but here it's OK too:
    // constructor() {
    //   super()
    //   this.state = {
    //     newMassage:''
    //   }
    // }


    // remark: use arrow function so you can use component's 'this' variable.
    // if you want to use normal function instead of arrow function you must bind the
    // function to class.
    sendMessage = () => {
        this.props.dispatch(sendNewMessage(this.state.sendMessage))
        this.setState({ newMassage: ''})
    }
    // sendMessage(){
    //   this.props.dispatch(sendNewMessage(this.state.sendMessage))
    //   this.setState({ newMassage: ''})
    // }


    render() {
        return (
           <div className='footer'>
                <input
                    className='new-message'
                    value={this.state.newMassage}
                    onChange={(e) => this.setState ({ newMassage: e.target.value})}
                />
                <img

                    width='40px'
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

// IMPORTANT
// remark: connect function has two arguments, the first one is mapStateToProps which in this case
// must be null, otherwise it won't work correctly.
export default connect(null, mapDispatchToProps)(Footer)
// export default connect(mapDispatchToProps)(Footer)
