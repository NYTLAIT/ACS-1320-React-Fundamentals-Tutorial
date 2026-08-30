import styles from './Title.module.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
        <div className={styles.Title}>
            <header>
                <h1>SFPOPOS</h1>
                <div className={styles['Title-Subtitle']}>San Francisco Privately Owned Public Open Spaces</div>

                <div>
                    <NavLink
                        className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
                        to="/">List</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
                        to="/about">About</NavLink>
                </div>

            </header>
        </div>
    )
}

export default Title