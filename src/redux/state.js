import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
        ]
    },


    dialogsPage: {
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
}
export let addPost = (newMessage) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: newMessage
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}
export default state