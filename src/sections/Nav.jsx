import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'

function Nav() {
    const navLinks = [
        { navLinkId: 'Home', scrollToId: 'homeContainer' },
        { navLinkId: 'About', scrollToId: 'aboutContainer' },
        { navLinkId: 'Contact', scrollToId: 'contactContainer' },
    ]

    const NavLink = ({ navLinkId, scrollToId }) => {
        const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

        const handleClick = () => {
            setActiveNavLinkId(navLinkId)
            document
                .getElementById(scrollToId)
                .scrollIntoView({ behavior: 'smooth' })
        }

        return (
            <span id={navLinkId} className={navLinkId} onClick={handleClick}>
                {navLinkId}
            </span>
        )
    }

    return (
        <nav className='nav'>
            <div className='container'>
                <h1 className='websiteName'>Me</h1>
                <div className='navLinks'>
                    {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                        <NavLink
                            key={idx}
                            navLinkId={navLinkId}
                            scrollToId={scrollToId}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}
export default Nav
