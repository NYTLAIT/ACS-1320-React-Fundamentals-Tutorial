import styles from './POPOSDetails.module.css'
import { useParams } from 'react-router'
import data from './sfpopos-data.json'

function POPOSDetails() {
    const params = useParams()
    const { id } = params
    const { images, title, desc, hours, features, geo, address, website } = data[id]

    return (
        <div className={styles.POPOSDetails}>
            <div className={styles.POPOSDetailsImage}>
                <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
            </div>

            <div className={styles.POPOSDetailsText}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className={styles.POPOSFineDetails}>
                    <p><b>Hours: </b>{hours}</p>
                    <p><b>Address: </b>{address}</p>
                    <ul>
                        {features.map(feature => {
                            return <li>{feature}</li>
                        })}
                    </ul>
                    {website && <a className={styles.POPOSDetailsWebsite} href={website}>Visit: {website}</a>}
                    {/* <p>{`lat:${geo.lat} long:${geo.lon}`}</p> */}
                </div>

            </div>

        </div >
    )
}

export default POPOSDetails