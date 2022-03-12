import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>

        </div>
    )
}
export default ProfilePage