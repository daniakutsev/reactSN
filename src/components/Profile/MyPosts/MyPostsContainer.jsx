import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

    let mapStateToProps = (state) => {
        return {
            newPostText: state.profilePage.newPostText,
            posts:state.profilePage.posts
        }

    }
    let mapDispatchToProps = (dispatch) => {
        return {
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextAC(text))
            },
            addPost: () => {
                dispatch(addPostAC())
            }
        }
    }

    const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer