//for profilePage
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//for dialogPage
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
            ],
            newPostText: ""
        },


        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("work")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newMessage;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            this._state.dialogsPage.messages.push(
                {id: this._state.dialogsPage.messages.length + 1, message: this._state.dialogsPage.newMessageBody})
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    },

}
//AC=Action Creator
export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newMessage: text})

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store;
export default store