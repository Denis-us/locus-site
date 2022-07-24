import missionImg from '../../img/missionImg.png'
import Title from '../Title/Title'
import Text from '../Text/Text'
import s from './Mission.module.css'
import Container from '../Container/Container'

const Mission = () => {
    return (
        <section>
            <Container className={s.mission}>
                <img src={missionImg} alt='mission' className={s.picture}/>
                <div className={s.description}>
                    <Title className={s.title}>Our mission is to deliver aesthetic visual for your home</Title>
                    <Text className={s.text}>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</Text>
                </div>
            </Container>
            
        </section>
    )
}

export default Mission