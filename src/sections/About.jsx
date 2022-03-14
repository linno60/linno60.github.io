import { useNav } from '../hooks/useNav'

function About() {
    const aboutRef = useNav('Home')
    return (
        <section ref={aboutRef} id='aboutContainer' className='about'>
            <h1>About</h1>
        </section>
    )
}
export default About
