import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.descriptionBlock}>
            <div><img className={s.contentImg}
                      src='https://wallpapershome.ru/images/wallpapers/les-3840x2160-5k-4k-8k-tuman-holmi-6505.jpg'
                      alt=""/>
            </div>
            <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ProfileInfo