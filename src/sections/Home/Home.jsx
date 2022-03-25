import { useLottie } from '../../hooks/useLottie'
import tiger from '../../assets/lotties/tiger.json'
import arrow from '../../assets/lotties/arrow.json'
import { useNav } from '../../hooks/useNav'
import { useTyped } from '../../hooks/useTyped'
import './home.css'

function Home() {
    const tigerAnimation = useLottie(tiger)
    const arrowAnimation = useLottie(arrow)

    const homeRef = useNav('Home')

    const scrollToAbout = () => {
        document
            .getElementById('aboutContainer')
            .scrollIntoView({ behavior: 'smooth' })
    }

    const strings = [
        'web design',
        'listening to music',
        'watching TV series',
        'playing video games',
    ]
    const el = useTyped(strings)

    return (
        <section ref={homeRef} id='homeContainer' className='home'>
            <div className='reserveTop' />
            <div className='homeIntro'>
                <div className='homeDiv'>
                    <p>I'm Lin</p>
                    <p>Working to become a great front-end developer</p>
                    <p>
                        I enjoy <span ref={el} />
                    </p>
                </div>

                <div className='tigerDiv' ref={tigerAnimation} />
            </div>

            <div className='arrowButton'>
                <button
                    onClick={scrollToAbout}
                    className='arrowDiv'
                    ref={arrowAnimation}
                />
            </div>
        </section>
    )
}
export default Home