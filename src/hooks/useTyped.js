import { useRef, useEffect } from 'react'
import Typed from 'typed.js'

export const useTyped = (strings) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null)
    // Create reference to store the Typed instance itself
    const typed = useRef(null)

    useEffect(() => {
        const options = {
            strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options)

        return () => {
            typed.current.destroy()
        }
    }, [strings])
    return el
}