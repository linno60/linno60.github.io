import { useRef, useContext, useEffect } from 'react'
import { NavContext } from '../context/NavContext'

export const useNav = (navLinkId) => {
    const ref = useRef(null)

    const { setActiveNavLinkId } = useContext(NavContext)

    useEffect(() => {
        setActiveNavLinkId(navLinkId)
    }, [setActiveNavLinkId, navLinkId])

    return ref
}