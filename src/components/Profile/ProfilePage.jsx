import c from './ProfilePage.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ ProfileInfo/ProfileInfo";

const ProfilePage = () => {
    return (
        <div className={c.content}>

            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}
export default ProfilePage