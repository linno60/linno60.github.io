import { useLottie } from '../../hooks/useLottie'
import flower from '../../assets/lotties/flower.json'
import arrow from '../../assets/lotties/arrow.json'
import { useNav } from '../../hooks/useNav'
import { useTyped } from '../../hooks/useTyped'
import './home.css'
import { ParticlesComponent } from '../../components/Particles'

function Home() {
    const flowerAnimation = useLottie(flower)
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
        <>
            <ParticlesComponent />
            <section ref={homeRef} id='homeContainer' className='home'>
                <div className='typedDiv'>
                    <span className='homeTyped' ref={el} />
                </div>

                <button
                    className='arrowDiv'
                    onClick={scrollToAbout}
                    ref={arrowAnimation}
                />
            </section>
        </>
    )
}
export default Home
