import './loading.css'
import loadingIcon from '../../assets/svg/loadingIcon.svg'

function Loading(props) {
    const { title } = props

    return (
        <div className='loading'>
            <img src={loadingIcon} alt='loading' />
            {title && <p>{title}</p>}
        </div>
    )
}

export default Loading
