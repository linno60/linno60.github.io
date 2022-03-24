import { useNav } from '../../hooks/useNav'
import { useLottie } from '../../hooks/useLottie'
import thinkingGirl from '../../assets/lotties/thinkingGirl.json'
import Skills from './Skills'
import './about.css'

function About() {
    const aboutRef = useNav('Home')

    const girl = useLottie(thinkingGirl)

    return (
        <section ref={aboutRef} id='aboutContainer' className='about'>
            <div className='reserveTop' />
            <div className='aboutTitle'>About Me</div>
            <div className='aboutDiv'>
                <div className='aboutMe'>
                    <p>I was born in China and came to Canada when I was 15.</p>
                    <br />
                    <p>
                        I graduated from Simon Fraser University, major in
                        Computer Science.
                    </p>
                    <br />
                    <p>
                        I love pretty, fancy stuff. This is probably why I like
                        front-end.
                    </p>
                </div>
                <div className='thinkingGirl' ref={girl} />
            </div>
            <div className='aboutSkills'>
                <Skills />
            </div>
        </section>
    )
}
export default About
