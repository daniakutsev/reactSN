const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {

    newMessageBody: "",
    messages: [
        {id: 1, message: "1"},
        {id: 2, message: "2"},
        {id: 3, message: "3"},
        {id: 4, message: "4"}
    ],
    dialogs: [
        {id: 1, name: "1"},
        {id: 2, name: "2"},
        {id: 3, name: "3"},
        {id: 4, name: "4"}
    ]

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SEND_MESSAGE): {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(
                {id: state.messages.length + 1, message: state.newMessageBody})
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case(UPDATE_NEW_MESSAGE_BODY): {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}
export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer