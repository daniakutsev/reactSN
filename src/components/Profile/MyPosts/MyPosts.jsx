import s from './MyPosts.module.css'
import Post from "./Post/Post";

let posts = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
]

let postsElements = posts.map(p => <Post id={p.id} message={p.message}/>)

const MyPosts = () => {
    return (
        <div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts