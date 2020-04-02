import { act } from "react-dom/test-utils"

const Init = {
    name: 'kkkkk',
    messageList: [
        {
            text: 'Hiiiii',
            id: 2
        }
    ]

}

export default function conversation(state = Init, action) {
    switch (action. type) {
        case 'SAVE_USERNAME':
            return {
                ...state,
                name: action.payload
            }

        case 'SAVE_NEW_MESSAGE':
            return {
                ...state,
                //newMessage: action.payload
                messageList : [
                    ...state.messageList,
                    {
                        text: action.payload,
                        id: 2
                    }
                ]
            }
        case 'EDIT_MESSAGE':
            let newMessageList = state.messageList
            newMessageList[action.index] = {
                id: 2,
                text: action.payload
            }
            return {
                ...state,
                messageList:newMessageList

            }
        default:
            return state
    }
}
