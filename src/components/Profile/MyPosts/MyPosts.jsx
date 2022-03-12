import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}/>)


    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(onPostChangeAC(''))
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeAC(text))
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts