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
    <header
      className='
        box-border w-full px-8 mb-[2em]
        flex items-center gap-8
        bg-brand text-white'
      ref={navRef}
    >
      <h1 className='text-2xl'>SFPOPOS</h1>

      <nav
        className={`
          absolute right-4 top-16 z-[9999]
          w-[100px] bg-white
          overflow-hidden flex flex-col
          transition-all duration-300
          ${isOpen ? 'max-h-[300px]' : ''}`}
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
        className='
          min-w-[44px] min-h-[44px] ml-auto p-2
          flex flex-col justify-center gap-1
          bg-transparent border-none
          cursor-pointer lg:hidden'
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-[2px] bg-current text-white"></span>
        <span className="block w-6 h-[2px] bg-current text-white"></span>
        <span className="block w-6 h-[2px] bg-current text-white"></span>
      </button>

    </header>
  )
}


export default Title