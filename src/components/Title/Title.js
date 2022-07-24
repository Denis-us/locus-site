import s from './Title.module.css'

const Title = ({className, children}) => {
    return (
        <h2 className={`${s.title} ${className}`}>{children}</h2>
    )
}

export default Title