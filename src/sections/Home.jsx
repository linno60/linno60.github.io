import { useLottie } from '../hooks/useLottie'
import tiger from '../assets/lotties/tiger.json'
import arrow from '../assets/lotties/arrow.json'
import { useNav } from '../hooks/useNav'
import { useTyped } from '../hooks/useTyped'

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
        'watching series',
        'playing video games',
    ]
    const el = useTyped(strings)

    return (
        <section ref={homeRef} id='homeContainer' className='home'>
            <div className='grid grid-cols-5 grid-rows-5 col-gap-3 row-gap-10'>
                <div className='col-span-5' />
                <div className='col-span-1' />
                <div className='col-span-2'>
                    <div className='HomeDiv'>
                        <p>I'm Lin</p>
                        <p>Working to become a great front-end developer</p>
                        <p>
                            I enjoy <span ref={el} />
                        </p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='tigerDiv' ref={tigerAnimation} />
                </div>
                <div className='col-span-2' />
                <div className='col-span-1'>
                    <button
                        onClick={scrollToAbout}
                        className='arrowDiv'
                        ref={arrowAnimation}
                    />
                </div>
            </div>
        </section>
    )
}
export default Home
