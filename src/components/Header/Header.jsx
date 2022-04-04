import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.loginBlock}>{props.isAuth ? props.login : <NavLink to={'/login'}/>}</div>
            <img className={c.headerImg}
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png'/>
        </header>
    )
}
export default Header