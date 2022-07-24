import Container from '../Container/Container'
import Title from '../Title/Title'
import Text from '../Text/Text'
import s from './Form.module.css'
import Button from '../Button/Button'

const Form = () => {
    return (
        <section className={s.section}>
            <Container className={s.container}>
                <div className={s.desc}>
                    <Title className={s.title}>Contact us</Title>
                    <Text className={s.text}>Have any questions? Want help before getting started?</Text>
                </div>


                <form className={s.form}>
                        <label className={s.label}>
                            <input type="name" name="name" placeholder="Full name" className={s.input}/>
                        </label>
                        <label className={s.label}>
                            <input type="email" name="email" placeholder="Email address" className={s.input}/>
                        </label>
                        <label className={s.label}>
                            <input type="text" name="description" placeholder="Description" className={s.input}/>
                        </label>
                    <div className={s.button}>
                        <Button type="submit">Send now</Button>
                    </div>
                    
                </form>
            </Container>
        </section>
    )
}

export default Form