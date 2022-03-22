import React from "react";
import s from './Users.module.css'
import userPhoto from "../../assets/img/userPhoto.png"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>

            {pages.map(p => {
                return <span key={p} className={props.currentPage === p && s.selectedPage}
                             onClick={()=>{this.onPageChanged(p)}
                             }>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div>
                            <img className={s.userPhoto}
                                 src={u.photos.small ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>
                                    Unfollow
                                </button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>


            </div>)}
    </div>
}

export default Users