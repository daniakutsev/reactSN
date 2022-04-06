import React from "react";
import s from './Users.module.css'
import userPhoto from "../../assets/img/userPhoto.png"
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

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
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }
                             }>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto}
                                     src={u.photos.small ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingIsFetching(true, u.id)
                                    followAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingIsFetching(false, u.id)
                                    })
                                }}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingIsFetching(true, u.id)
                                    followAPI.follow(u.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingIsFetching(false, u.id)
                                    })
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