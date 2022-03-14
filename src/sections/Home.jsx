import { useLottie } from '../hooks/useLottie'
import flower from '../lotties/flower.json'
import arrow from '../lotties/arrow.json'
import About from './About'
import { useNav } from '../hooks/useNav'

function Home() {
    const flowerAnimation = useLottie(flower)
    const arrowAnimation = useLottie(arrow)

    const homeRef = useNav('Home')

    // const scrollToAbout = () => {

    // }

    return (
        <section ref={homeRef} id='homeContainer' className='home'>
            <div className='grid grid-rows-6'>
                <div className='grid grid-cols-6'>
                    <div className='col-start-6 col-span-1'>
                        <div className='row-start-1 row-span-1'>
                            <div className='flowerDiv' ref={flowerAnimation} />
                        </div>
                    </div>
                    <div className='col-start-4 col-span-2'>
                        <div className='row-start-2 row-span-2'>
                            <div className='HomeDiv'>
                                <p>Hi</p>
                                <p>I'm Lin</p>
                                <p>
                                    Working to become a great front-end
                                    developer
                                </p>
                                <p>I enjoy</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-start-5 col-span-1'>
                        <div className='row-start-6 row-span-1'>
                            <button
                                // onClick={scrollToAbout}
                                className='arrowDiv'
                                ref={arrowAnimation}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
