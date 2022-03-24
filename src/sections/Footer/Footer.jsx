import { GiCoffeeCup } from 'react-icons/gi'
import { IoMdHeart } from 'react-icons/io'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <p className='footerDetail'>
                    Made with&nbsp;
                    <GiCoffeeCup color='#967259' size={28} /> &nbsp;and&nbsp;
                    <IoMdHeart color='#e31b23' size={28} />
                    &nbsp;&nbsp;&copy; Lin Liu
                </p>
            </div>
        </footer>
    )
}
export default Footer
