import { useContext, useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai'
import { NavContext } from '../../context/NavContext'
import styles from './styles.module.scss'

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
            <div className={styles.nav}>
                {/* Large Screen Navbar */}
                <div className={styles.navLinks}>
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
                    className={styles.navButton}
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
                <div className={styles.smallScreenNav}>
                    {navLinks.map(({ navLinkId, scrollToId }) => (
                        <NavLink
                            key={navLinkId}
                            navLinkId={navLinkId}
                            scrollToId={scrollToId}
                            className={styles.smallScreenNavItems}
                        />
                    ))}
                </div>
            )}
        </nav>
    )
}
export default Nav
