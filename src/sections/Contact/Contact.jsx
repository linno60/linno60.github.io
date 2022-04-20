import { useNav } from '../../hooks/useNav'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import sayHi from '../../assets/lotties/sayHi.json'
import { useLottie } from '../../hooks/useLottie'
import './contact.css'
import { GrMail } from 'react-icons/gr'
import cat from '../../assets/images/cat.png'
import ContactForm from '../../components/ContactForm/ContactForm'
import ButtonMailTo from '../../components/ButtonMailTo'

function Contact() {
    const contactRef = useNav('Home')

    const sayHiAnimation = useLottie(sayHi)
    const mailTo = (e) => {
        window.location.href = 'mailto:liulinn60@gmail.com'
        e.preventDefault()
    }

    return (
        <section ref={contactRef} id='contactContainer' className='contact'>
            <h1 className='contactTitle'>Contact</h1>
            <div className='contactAll'>
                <div
                    className='contactLeft aos-init aos-animate'
                    data-aos='fade-up'
                >
                    <figure className='contactImg'>
                        <img src={cat} alt='cat' />
                    </figure>
                    <div className='contactLinks'>
                        <a
                            href='https://github.com/linno60/'
                            aria-label='github link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub className='contactIcon' size={42} />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/lin-liu-224167145/'
                            aria-label='linkedin link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedin className='contactIcon' size={42} />
                        </a>
                        <button
                            onClick={(e) => {
                                window.location.href =
                                    'mailto:liulinn60@gmail.com'
                                e.preventDefault()
                            }}
                        >
                            <GrMail
                                className='contactIcon smallScreenEmail'
                                size={42}
                            />
                        </button>
                    </div>
                    <div className='mailButton'>
                        <button onClick={mailTo} ref={sayHiAnimation} />
                    </div>
                </div>

                <div
                    className='contactForm aos-init aos-animate'
                    data-aos='fade-up'
                >
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default Contact
