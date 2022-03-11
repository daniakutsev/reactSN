const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const profileReducer = (state, action) => {
    switch (action.type) {
        case(ADD_POST): {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        }
        case(UPDATE_NEW_POST_TEXT): {
            state.newPostText = action.newMessage;
            return state;
        }
        default: {
            return state;
        }
    }
}
export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newMessage: text})
export default profileReducer