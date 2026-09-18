import styles from './POPOSSpace.module.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className={styles.POPOSSpace} >
            <Link to={`/details/${id}`}>
                <img className={styles.POPOSSpaceImg} src={`${process.env.PUBLIC_URL}/images/${image}`}
                    alt={`${name}`}
                />
                <div className={styles.POPOSSpaceText}>
                    <h1>{name}</h1>
                    <div className={styles.POPOSSpaceTextP}>
                        <p>{address}</p>
                        <p>{hours}</p>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default POPOSSpace