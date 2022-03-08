import c from './Header.module.css'

const Header = () => {
    return(
        <header className={c.header}>
         <img className={c.headerImg}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png'/>
        </header>
    )
}
export default Header