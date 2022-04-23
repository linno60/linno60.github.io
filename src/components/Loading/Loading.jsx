import Spinner from '../../assets/Spinner.svg'
import styles from './styles.module.scss'

function Loading(props) {
    const { title } = props

    return (
        <div className={styles.loading}>
            <img src={Spinner} alt='loading' />
            {title && <p>{title}</p>}
        </div>
    )
}
export default Loading
