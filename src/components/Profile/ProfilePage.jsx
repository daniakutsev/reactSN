import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>

        </div>
    )
}
export default ProfilePage