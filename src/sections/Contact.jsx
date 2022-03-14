import { useNav } from '../hooks/useNav'

function Contact() {
    const contactRef = useNav('Home')
    return (
        <section ref={contactRef} id='contactContainer' className='contact'>
            <h1>Contact</h1>
        </section>
    )
}
export default Contact
