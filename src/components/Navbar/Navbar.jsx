import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem}
                          to='/profile'>Profile</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem}
                          to='/users'>Users</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem}
                          to='/dialogs'>Messages</NavLink></div>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem} to='/news'>News</NavLink>
            </div>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem} to='/music'>Music</NavLink>
            </div>
            <div><NavLink className={navData => navData.isActive ? c.active : c.linkItem}
                          to='/settings'>Settings</NavLink></div>
        </nav>
    )
}
export default Navbar