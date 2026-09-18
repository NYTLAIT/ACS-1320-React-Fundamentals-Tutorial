import styles from './Title.module.css';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Title() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className={styles.Title}>
            <h1>SFPOPOS</h1>
            {/* <div className={styles['Title-Subtitle']}>San Francisco Privately Owned Public Open Spaces</div> */}

            <nav
                className={styles[`Title-nav${menuOpen ? 'Title-nav--open' : ''}`]}
                aria-hidden={!menuOpen}
            >
                <NavLink
                    className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
                    to="/">List</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
                    to="/about">About</NavLink>
            </nav>

            <button
                className={styles['Title-menu-btn']}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </header>
    )
}

export default Title