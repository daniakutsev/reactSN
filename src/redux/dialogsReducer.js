const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case(SEND_MESSAGE): {
            state.messages.push(
                {id: state.messages.length + 1, message: state.newMessageBody})
            return state;
        }
        case(UPDATE_NEW_MESSAGE_BODY): {
            state.newMessageBody = action.body;
            return state;
        }
        default: {
            return state;
        }
    }
}
export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer