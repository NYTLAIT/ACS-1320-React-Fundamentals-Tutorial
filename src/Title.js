import styles from './Title.module.css';
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Title() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)


  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={styles.Title} ref={navRef}>
      <h1>SFPOPOS</h1>

      <nav
        className={styles[`Title-nav${isOpen ? 'Title-nav--open' : ''}`]}
        aria-hidden={!isOpen}
      >
        <NavLink
          className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
          onClick={() => setIsOpen(false)}
          to="/">
          List</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? styles["nav-link-active"] : styles["nav-link"]}
          onClick={() => setIsOpen(false)}
          to="/about">
          About</NavLink>
      </nav>

      <button
        className={styles['Title-menu-btn']}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  )
}


export default Title