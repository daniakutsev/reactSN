import React from "react";
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from "../../assets/img/userPhoto.png"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(
                        response.data.items
                    )
                })

        }
    }
    return <div>
        <button onClick={getUsers}>get users</button>
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
                                </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>
                                    Follow</button>}
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