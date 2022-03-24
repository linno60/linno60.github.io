import { useNav } from '../../hooks/useNav'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import sayHi from '../../assets/lotties/sayHi.json'
import { useLottie } from '../../hooks/useLottie'
import './contact.css'

function Contact() {
    const contactRef = useNav('Home')

    const sayHiAnimation = useLottie(sayHi)
    const mailTo = (e) => {
        window.location.href = 'mailto:liulinn60@gmail.com'
        e.preventDefault()
    }

    return (
        <section ref={contactRef} id='contactContainer' className='contact'>
            <div className='reserveTop' />
            <h1 className='contactTitle'>Get In Touch</h1>
            <div className='contactCard'>
                <div className='contactInfo'>
                    <div className='contactLinks'>
                        <a
                            href='https://github.com/linno60/'
                            aria-label='github link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub
                                className='contactIcon'
                                color='#171515'
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
                                className='contactIcon'
                                color='#0e76a8'
                                size={42}
                            />
                        </a>
                    </div>
                    <div className='contactButton'>
                        <button
                            onClick={mailTo}
                            className='mailButton'
                            ref={sayHiAnimation}
                        ></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
