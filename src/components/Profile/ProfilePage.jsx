
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>

        </div>
    )
}
export default ProfilePage