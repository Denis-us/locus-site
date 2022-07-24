import s from './Text.module.css'

const Text = ({className, children}) => {
    return (
        <p className={`${s.text} ${className}`}>{children}</p>
    )
}
export default Text