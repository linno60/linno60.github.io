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
                    <p>
                        I am a Web developer based in Vancouver with a passion
                        for the latest technologies and building beautiful,
                        accessible web applications.
                    </p>
                    <br />
                    <p>
                        I am looking for a full-time opportunity right now and I
                        am ready to meet a new challenge with my greatest
                        enthusiasm and effort.
                    </p>
                    <br />
                    <p>
                        Take your time to browse my site, check out my projects
                        and don't hesitate to reach me out if you have any
                        questions for me.
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
