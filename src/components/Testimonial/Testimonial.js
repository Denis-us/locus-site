import Klamby from '../../img/Klamby.svg'
import Mayoutfit from '../../img/Mayoutfit.svg'
import Zalora from '../../img/Zalora.svg'
import Geulis from '../../img/Geulis.svg'
import Container from '../Container/Container'
import Title from '../Title/Title'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import s from './Testimonial.module.css'

const Testimonial = () => {
    return (
        <section className={s.section}>
            <Container>
                <Title className={s.title}>Testimonial</Title>
                <ul className={s.list}>
                    <li className={s.listEl}>
                        <a href="/">
                            <img src={Klamby} alt='klamby'/>
                        </a>
                    </li>
                    <li className={s.listEl}>
                        <a href="/">
                            <img src={Mayoutfit} alt='mayoutfit'/>
                        </a>
                    </li>
                    <li className={s.listEl}>
                        <a href="/">
                            <img src={Zalora} alt='zalora'/>
                        </a>
                    </li>
                    <li className={s.listEl}>
                        <a href="/">
                            <img src={Geulis} alt='geulis'/>
                        </a>
                    </li>
                </ul>
                <TestimonialCard/>
            </Container>
        </section>
    )
}

export default Testimonial