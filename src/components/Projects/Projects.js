import Livingroom from '../../img/Livingroom.png'
import Workspace from '../../img/Workspace.png'
import Library from '../../img/Library.png'
import Container from '../Container/Container'
import Title from '../Title/Title'
import Text from '../Text/Text'
import s from './Projects.module.css'

const Projects = () => {
    return (
        <section className={s.section}>
            <Container>
                <Title className={s.title}>Our project</Title>
                <Text className={s.textMain}>Introducing our first official project</Text>
                <ul className={s.projects}>
                    <li className={s.oneProject}>
                        <div className={s.projectDesc}>
                            <h3 className={s.projectsTitle}>Project Livingroom</h3>
                            <Text className={s.projectsText}>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</Text>
                        </div>
                        <img src={Livingroom} alt='livingroom' className={s.picture}/>
                    </li>
                    <li className={s.oneProject}>
                        <div className={s.projectDesc}>
                            <h3 className={s.projectsTitle}>Project workspace</h3>
                            <Text className={s.projectsText}>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</Text>
                        </div>
                        <img src={Workspace} alt='workspace' className={s.picture}/>
                    </li>
                    <li className={s.oneProject}>
                        <div className={s.projectDesc}>
                            <h3 className={s.projectsTitle}>Library</h3>
                            <Text className={s.projectsText}>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</Text>
                        </div>
                        <img src={Library} alt='library' className={s.picture}/>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Projects