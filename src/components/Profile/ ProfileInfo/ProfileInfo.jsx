import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            <div>
                <img className={s.contentImg}
                     src='https://wallpapershome.ru/images/wallpapers/les-3840x2160-5k-4k-8k-tuman-holmi-6505.jpg'
                     alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.aboutMe}</p>
                ava+description
            </div>
        </div>
    )

}
export default ProfileInfo