import Button from '../Button/Button';
import HeaderNav from '../HeaderNav/HeaderNav'
import Logo from '../Logo/Logo'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}> 
            <Logo/>
            
            <HeaderNav/>

            <Button>Sign up</Button>
        </header>
    )
}

export default Header