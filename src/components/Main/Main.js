import Hero from "../Hero/Hero"
import HowItWorks from "../HowItWorks/HowItWorks"
import Projects from "../Projects/Projects"
import Testimonial from "../Testimonial/Testimonial"
import Form from '../Form/Form'
import s from './Main.module.css'

const Main = () => {
    return (
        <main>
            <h1 className={s.mainTitle}>Interior design</h1>
            <Hero/>
            <HowItWorks/>
            <Projects/>
            <Testimonial/>
            <Form/>
        </main>
    )
}

export default Main