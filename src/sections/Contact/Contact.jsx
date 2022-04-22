import { useNav } from '../../hooks/useNav'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLottie } from '../../hooks/useLottie'
import { GrMail } from 'react-icons/gr'
import sayHi from '../../assets/lotties/sayHi.json'
import cat from '../../assets/images/cat.png'
import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './styles.module.scss'

function Contact() {
    const contactRef = useNav('Home')

    const sayHiAnimation = useLottie(sayHi)
    const mailTo = (e) => {
        window.location.href = 'mailto:liulinn60@gmail.com'
        e.preventDefault()
    }

    return (
        <section
            ref={contactRef}
            id='contactContainer'
            className={styles.contact}
        >
            <h1 className={styles.contactTitle}>Contact</h1>
            <div className={styles.contactAll}>
                <div
                    className={`${styles.contactLeft} aos-init aos-animate`}
                    data-aos='fade-up'
                >
                    <figure className={styles.contactImg}>
                        <img src={cat} alt='cat' />
                    </figure>
                    <div className={styles.contactLinks}>
                        <a
                            href='https://github.com/linno60/'
                            aria-label='github link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub
                                className={styles.contactIcon}
                                size={42}
                            />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/lin-liu-224167145/'
                            aria-label='linkedin link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedin
                                className={styles.contactIcon}
                                size={42}
                            />
                        </a>
                        <button
                            onClick={(e) => {
                                window.location.href =
                                    'mailto:liulinn60@gmail.com'
                                e.preventDefault()
                            }}
                        >
                            <GrMail
                                className={
                                    styles.smallScreenEmail +
                                    ' ' +
                                    styles.contactIcon
                                }
                                size={42}
                            />
                        </button>
                    </div>
                    <div className={styles.mailButton}>
                        <button onClick={mailTo} ref={sayHiAnimation} />
                    </div>
                </div>

                <div
                    className={`${styles.contactForm} aos-init aos-animate`}
                    data-aos='fade-up'
                >
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default Contact
