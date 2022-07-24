import review from '../../img/Review.png'
import Text from '../Text/Text'
import s from './TestimonialCard.module.css'

const TestimonialCard = () => {
    return (
        <div className={s.card}>
                <img src={review} alt='review' className={s.picture}/>
                <div className={s.reviewDescription}>
                        <ul className={s.evaluations}>
                            <li className={s.oneEvaluation}>
                                <Text className={s.evaluationText}><span className={s.evaluationNumber}>105</span>project done</Text>
                            </li>
                            <li className={s.oneEvaluation}>
                                <Text className={s.evaluationText}><span className={s.evaluationNumber}>12</span>year of experience</Text>
                            </li>
                            <li className={s.oneEvaluation}>
                                <Text className={s.evaluationText}><span className={s.evaluationNumber}>10+</span>big company partnership</Text>
                            </li>
                        </ul>
                        <Text className={s.comment}>"Not able to tell you how happy I am with interior design. Interior design has completely surpassed our expectations. Interior design saved my business. Interior design is worth much more than I paid."
                        <span className={s.user}>- Roscoe</span>
                        </Text>
                </div>
        </div>
    )
}

export default TestimonialCard