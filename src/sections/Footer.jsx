import { GiCoffeeCup } from 'react-icons/gi'
import { IoMdHeart } from 'react-icons/io'

function Footer() {
    return (
        <footer>
            <div>
                <p className='footerAbove'>
                    Made with&nbsp;
                    <GiCoffeeCup color='#967259' size={28} /> &nbsp;and&nbsp;
                    <IoMdHeart color='#e31b23' size={28} />
                    &nbsp;&copy; Lin Liu
                </p>
                {/* <p className='footerBottom'>Ⓒ Lin Liu</p> */}
            </div>
        </footer>
    )
}
export default Footer
