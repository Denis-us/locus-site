import Logotype from '../../img/Logo.svg'
import s from './Logo.module.css'

const Logo = () => {
    return (
        <div className={s.logo}>
                <a href="/" className={s.logoImg}>
                    <img src={Logotype} alt="Logo" width="37" height="45"/>
                </a>
                <a href="/">
                    <p className={s.logoText}>Locus</p>
                </a>
        </div>
    )
}

export default Logo