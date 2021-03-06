import { useNav } from '../../hooks/useNav'
import Skills from '../../components/SkillTagCloud'
import styles from './styles.module.scss'

function About() {
    const aboutRef = useNav('Home')

    return (
        <section ref={aboutRef} id='aboutContainer' className={styles.about}>
            <div className={styles.aboutDiv}>
                <div
                    className={`${styles.aboutMe} aos-init aos-animate `}
                    data-aos='fade-right'
                >
                    <h1>Hi! I'm Lin</h1>
                    <p>
                        I am a Software Engineer based in Vancouver with a
                        passion for the latest technologies and building
                        beautiful, accessible web applications.
                    </p>
                    <br />
                    <p>
                        I am currently working on React personal projects and
                        looking to move into a development role. My skills
                        include, but are not limited to: React.js, Redux/Redux
                        Toolkit, JavaScript, Bootstrap, Git&GitHub.
                    </p>
                    <br />
                    <p>
                        Take your time to browse my site, check out my projects
                        and don't hesitate to reach me out if you have any
                        questions for me.
                    </p>
                </div>
                <div
                    className={`${styles.skillTagCloud} aos-init aos-animate`}
                    data-aos='fade-left'
                >
                    <Skills />
                </div>
            </div>
        </section>
    )
}
export default About
