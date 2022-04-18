import { useState } from 'react'
import { useNav } from '../../hooks/useNav'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import sayHi from '../../assets/lotties/sayHi.json'
import { useLottie } from '../../hooks/useLottie'
import './contact.css'
import { GrMail } from 'react-icons/gr'
import cat from '../../assets/images/cat.png'

function Contact() {
    const contactRef = useNav('Home')
    const [message, setMessage] = useState('')

    const sayHiAnimation = useLottie(sayHi)
    const mailTo = (e) => {
        window.location.href = 'mailto:liulinn60@gmail.com'
        e.preventDefault()
    }

    const onChange = (e) => setMessage(e.target.value)

    return (
        <section ref={contactRef} id='contactContainer' className='contact'>
            <h1 className='contactTitle'>Contact</h1>
            <div className='contactWrapper'>
                <div className='contactLinks'>
                    <img src={cat} alt='cat' />
                    <ul>
                        <li>
                            <a
                                href='https://github.com/linno60/'
                                aria-label='github link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='contactIcon'
                                    // color='#171515'
                                    // size={42}
                                />
                                github.com/linno60
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/lin-liu-224167145/'
                                aria-label='linkedin link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='contactIcon'
                                    // color='#0e76a8'
                                    // size={42}
                                />
                                www.linkedin.com/in/lin-liu-224167145/
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={(e) => {
                                    window.location.href =
                                        'mailto:liulinn60@gmail.com'
                                    e.preventDefault()
                                }}
                            >
                                <GrMail className='contactIcon' size={42} />
                                liulinn60@gmail.com
                            </button>
                        </li>
                    </ul>
                </div>
                {/* <div className='contactForm'>
                    
                </div> */}
                {/* <form className='messageForm'>
                    <div className='messageDiv'>
                        <label htmlFor='message' className='messageLabel'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            className='textarea'
                            value={message}
                            onChange={onChange}
                        ></textarea>
                    </div>

                    <a
                        href={`mailto:liulinn60@gmail.com
                        `}
                    >
                        <button type='button' className='primaryButton'>
                            Send Message
                        </button>
                    </a>
                </form> */}
                <form
                    action='https://formspree.io/f/mzbkjwlp'
                    method='POST'
                    id='form'
                    class='contactForm'
                >
                    <label for='form'>
                        <h3>Get in touch</h3>
                    </label>

                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='name'
                    />

                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                    />
                    <textarea
                        id='message'
                        name='message'
                        type='text'
                        placeholder='message'
                    ></textarea>
                    <input
                        id='submit'
                        class='submit-btn btn'
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        </section>
    )
}
export default Contact
