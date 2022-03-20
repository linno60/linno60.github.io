import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'



export const useLottie = (animationData) => {
    const anime = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
        })
        return () => lottie.stop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return anime
}


