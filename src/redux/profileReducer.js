const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {

    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case(ADD_POST): {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        case(UPDATE_NEW_POST_TEXT): {
            return {
                ...state,
                newPostText: action.newMessage
            }

        }
        case(SET_USER_PROFILE): {
            return {
                ...state,
                profile: action.profile
            }

        }
        default: {
            return state;
        }
    }
}
export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newMessage: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer