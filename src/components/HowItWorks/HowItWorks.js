import flower from '../../img/HITpicture.png'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Container from '../Container/Container'
import Mission from '../Mission/Mission'
import s from './HowItWorks.module.css'


const HowItWorks = () => {
    return (
        <section className={s.section}>
            <Container>
                <Title className={s.title}>How it works</Title>
                <Text className={s.text}>Spice up your space even simpler than you think</Text>
                <div className={s.design}>
                    <img src={flower} alt='flower' className={s.flower}/>
                    <div className={s.description}>
                        <Text className={s.descriptionVideo}>We provide design and build for commercial building, interior and furniture to improve the better life. </Text>
                        
                        {/* <button href="/" className={s.play} width="100" height="100">
                            <svg width = "27" height = "42">
                                <use href="../../img/play.svg"></use>
                            </svg>
                        </button> */}

                        <a href="/" className={s.seeVideo}>SEE VIDEO</a>
                        
                    </div>
                </div>
                <Mission/>
            </Container> 
        </section>
    )
}

export default HowItWorks