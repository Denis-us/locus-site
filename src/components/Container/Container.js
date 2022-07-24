import s from './Container.module.css'

const Container = ({className, children}) => {
    return (
        <div className={`${s.container} ${className}`}>
            {children}
        </div>
    )
}

export default Container