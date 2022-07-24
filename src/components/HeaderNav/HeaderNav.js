import s from './HeaderNav.module.css'

const HeaderNav = () => {
    return (
        <nav className={s.nav}>
            <li className={s.listEl}>
                <a href="/" className={s.navLink}>Home</a>
            </li>
            <li className={s.listEl}>
                <a href="/" className={s.navLink}>Contact</a>
            </li>
            <li className={s.listEl}>
                <a href="/" className={s.navLink}>Location</a>
            </li>
            <li className={s.listEl}>
                <a href="/" className={s.navLink}>About us</a>
            </li>
        </nav>
    )
}

export default HeaderNav