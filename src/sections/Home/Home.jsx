import { useLottie } from '../../hooks/useLottie'
import arrow from '../../assets/lotties/arrow.json'
import { useNav } from '../../hooks/useNav'
import { useTyped } from '../../hooks/useTyped'
import './home.css'
import { ParticlesComponent } from '../../components/Particles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

function Home() {
    const arrowAnimation = useLottie(arrow)

    const homeRef = useNav('Home')

    const scrollToAbout = () => {
        document
            .getElementById('aboutContainer')
            .scrollIntoView({ behavior: 'smooth' })
    }

    const strings = ["Hi, I'm Lin", 'A Software Engineer']
    const el = useTyped(strings)

    return (
        <section ref={homeRef} id='homeContainer' className='home'>
            <ParticlesComponent />
            <div className='typedDiv'>
                <span className='homeTyped' ref={el} />
            </div>
            <div className='contactLinks'>
                <a
                    href='https://www.linkedin.com/in/lin-liu-224167145/'
                    aria-label='linkedin link'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedin className='contactIcon' size={42} />
                </a>

                <a
                    href='https://github.com/linno60/'
                    aria-label='github link'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub className='contactIcon' size={42} />
                </a>

                <button
                    onClick={(e) => {
                        window.location.href = 'mailto:liulinn60@gmail.com'
                        e.preventDefault()
                    }}
                >
                    <GrMail className='contactIcon' size={42} />
                </button>
            </div>

            <button
                className='arrowDiv'
                onClick={scrollToAbout}
                ref={arrowAnimation}
            />
        </section>
    )
}
export default Home
