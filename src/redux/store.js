import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);

    },

}
//AC=Action Creator


window.store = store;
export default store