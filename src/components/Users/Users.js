import React from "react";
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length == 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg',
                    followed: true,
                    fullname: 'Dania Kutsev',
                    status: 'it`s my status',
                    location: {
                        country: 'Ukraine',
                        city: 'Poltava'
                    }
                },
               {
                    id: 2,
                    photoUrl: 'https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg',
                    followed: true,
                    fullname: 'dania kutsev',
                    status: 'it`s my status',
                    location: {
                        country: 'ukraine',
                        city: 'poltava'
                    }
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl}/>
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
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>


            </div>)}
    </div>
}

export default Users