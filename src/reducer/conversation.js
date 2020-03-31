const Init = {
    name: ''
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
                newMessage: action.payload
            }
        default:
            return state
    }
}
