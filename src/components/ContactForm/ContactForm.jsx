import { useForm, ValidationError } from '@formspree/react'
import styles from './styles.module.scss'

function ContactForm() {
    const [state, handleSubmit] = useForm('mwkyryjv')
    if (state.succeeded) {
        return <p>Got it! I'll try to get back to you ASAP!</p>
    }
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor='form'>
                <h2>Say Hi</h2>
            </label>
            <input id='name' type='text' name='name' placeholder='Name' />
            <input id='email' type='email' name='email' placeholder='Email' />
            <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
            />
            <textarea id='message' name='message' placeholder='Message' />
            <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
            />
            <button
                className={styles.submitBtn}
                type='submit'
                disabled={state.submitting}
            >
                Submit
            </button>
        </form>
    )
}

export default ContactForm
