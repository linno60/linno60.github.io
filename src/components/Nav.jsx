import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'

function Nav() {
    const navLinks = [
        { navLinkId: 'Home', scrollToId: 'homeContainer' },
        { navLinkId: 'About', scrollToId: 'aboutContainer' },
        { navLinkId: 'Project', scrollToId: 'projectContainer' },
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
            <span
                id={navLinkId}
                className={activeNavLinkId}
                onClick={handleClick}
            >
                {navLinkId}
            </span>
        )
    }

    return (
        <nav className='nav navbar bg-base-100'>
            <div className='container flex-1"'>
                <h1 className='websiteName'>Lin Liu</h1>
                <div class='flex-none'>
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
            </div>
        </nav>
    )
}
export default Nav
