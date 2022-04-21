import { useContext, useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai'
import { NavContext } from '../../context/NavContext'
import './nav.css'

function Nav() {
    const navLinks = [
        { navLinkId: 'HOME', scrollToId: 'homeContainer' },
        { navLinkId: 'ABOUT', scrollToId: 'aboutContainer' },
        { navLinkId: 'PROJECT', scrollToId: 'projectContainer' },
        { navLinkId: 'CONTACT', scrollToId: 'contactContainer' },
    ]

    const [smallScreen, setSmallScreen] = useState(false)

    const NavLink = ({ navLinkId, scrollToId }) => {
        const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

        const handleClick = () => {
            setActiveNavLinkId(navLinkId)
            setSmallScreen(false)
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
        <nav>
            <div className='nav'>
                {/* Large Screen Navbar */}
                <div className='navLinks'>
                    {navLinks.map(({ navLinkId, scrollToId }) => (
                        <NavLink
                            key={navLinkId}
                            navLinkId={navLinkId}
                            scrollToId={scrollToId}
                        />
                    ))}
                </div>

                {/* Small Screen Menu Button */}
                <span
                    className='navButton'
                    onClick={() => setSmallScreen(!smallScreen)}
                >
                    {smallScreen ? (
                        <AiOutlineCloseSquare size={42} />
                    ) : (
                        <AiOutlineMenu size={42} />
                    )}
                </span>
            </div>

            {/* Small Screen Navbar */}
            {smallScreen && (
                <div className='smallScreenNav'>
                    {navLinks.map(({ navLinkId, scrollToId }) => (
                        <NavLink
                            key={navLinkId}
                            navLinkId={navLinkId}
                            scrollToId={scrollToId}
                            className='smallScreenNavItems'
                        />
                    ))}
                </div>
            )}
        </nav>
    )
}
export default Nav