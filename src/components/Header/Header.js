import Button from '../Button/Button';
import HeaderNav from '../HeaderNav/HeaderNav'
import Logo from '../Logo/Logo'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}> 
            <Logo/>
            
            <HeaderNav/>
            <div className={s.btnContainer}>
                <Button>Sign up</Button>
            </div>
            {/* <Button>Sign up</Button> */}
        </header>
    )
}

export default Header