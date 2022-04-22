import { GiCoffeeCup } from 'react-icons/gi'
import { IoMdHeart } from 'react-icons/io'
import styles from './styles.module.scss'

function Footer() {
    return (
        <footer>
            <p className={styles.footerDetail}>
                Made with&nbsp;
                <GiCoffeeCup color='#967259' size={28} /> &nbsp;and&nbsp;
                <IoMdHeart color='#e31b23' size={28} />
                &nbsp;&nbsp;&copy; Lin Liu
            </p>
        </footer>
    )
}
export default Footer
