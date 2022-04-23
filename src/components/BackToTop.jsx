import { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const triggerBtn = window.innerHeight
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > triggerBtn) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop}>
                    <FaAngleUp className='backToTop' size={42} />
                </button>
            )}
        </>
    )
}
export default BackToTop
