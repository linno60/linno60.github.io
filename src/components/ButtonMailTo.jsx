import { FaPaperPlane } from 'react-icons/fa'

const ButtonMailTo = () => {
    return (
        <button
            className='display: flex btn btn-outline btn-error'
            onClick={(e) => {
                window.location.href = 'mailto:liulinn60@gmail.com'
                e.preventDefault()
            }}
        >
            Say Hello&nbsp;
            <FaPaperPlane />
        </button>
    )
}

export default ButtonMailTo
