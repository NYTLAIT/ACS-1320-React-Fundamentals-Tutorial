import styles from './POPOSList.module.css'
import data from './sfpopos-data.json'
import POPOSSpace from "./POPOSSpace"

function POPOSList() {
    const spaces = data.map(({ title, address, images, hours }, i) => {
        return (
            <POPOSSpace
                id={i}
                key={title}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className={styles.POPOSList}>
            {spaces}
        </div>
    )
}

export default POPOSList