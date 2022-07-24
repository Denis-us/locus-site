import furniture from '../../img/furniture.png'
import Container from '../Container/Container'
import Button from '../Button/Button'
import Title  from '../Title/Title'
import Text from '../Text/Text'
import s from './Hero.module.css'

const Hero = () => {
    return (
        <section className={s.section}>
            <Container className={s.container}>
                <div className={s.description}>
                    <Title className={s.title}>Get the inspiration of interior design here</Title>

                    <Text className={s.text}>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</Text>

                    <Button>Let`s go</Button>
                </div>
                <div className={s.backdropFurniture}>
                    <img src={furniture} alt='furniture'/>
                </div>
                
            </Container>
            
        </section>
    )
}

export default Hero