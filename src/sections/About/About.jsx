import { useNav } from '../../hooks/useNav'
import Skills from '../../components/SkillTagCloud'
import './about.css'

function About() {
    const aboutRef = useNav('Home')

    return (
        <section ref={aboutRef} id='aboutContainer' className='about'>
            <div className='aboutDiv'>
                <div className='aboutMe'>
                    <h1>Hi! I'm Lin</h1>
                    <p>
                        I am a Software Engineer based in Vancouver with a
                        passion for the latest technologies and building
                        beautiful, accessible web applications. My skills
                        include, but are not limited to: React.js, Redux/Redux
                        Toolkit, JavasScript, Boostrap, Git&GitHub.
                    </p>
                    <br />
                    <p>
                        I am looking for a full-time opportunity right now and I
                        always wanted to meet new challenges with my greatest
                        enthusiasm and effort.
                    </p>
                    <br />
                    <p>
                        Take your time to browse my site, check out my projects
                        and don't hesitate to reach me out if you have any
                        questions for me.
                    </p>
                </div>
                <div className='skillTagCloud'>
                    <Skills />
                </div>
            </div>
        </section>
    )
}
export default About
