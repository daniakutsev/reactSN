import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>

            <div>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.aboutMe}</p>
                ava+description
            </div>
            <div><ProfileStatus status={"my new status"}/></div>
        </div>
    )

}
export default ProfileInfo