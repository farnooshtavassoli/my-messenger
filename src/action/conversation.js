export const saveUsername = (name) => ({
    type: 'SAVE_USERNAME',
    payload: name
})

export const sendNewMessage = (newMessage) => ({
    type: 'SAVE_NEW_MESSAGE',
    payload: newMessage
})

export const editMessage = (text, index) => ({
    type: 'EDIT_MESSAGE',
    payload: text,
    index:index
})
