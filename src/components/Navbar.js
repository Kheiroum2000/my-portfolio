import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'
import ThemeContext from "../ThemeContext"
import { useContext } from "react"


function Navbar(){

    const { darkMode, setdarkMode } = useContext(ThemeContext)
    return (
        <nav className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>

            <NavLink to="/" className={`${styles.logo} ${darkMode ? styles.dark : styles.light}`}   
            >Kheiroum</NavLink>

            <div className={styles.navlinks}>
                <NavLink to="/about" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>About</NavLink>

                <NavLink to="/projects" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>Projects</NavLink>

                <NavLink to="/contact" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>Contact</NavLink>

                <button onClick={() => setdarkMode(!darkMode)} className={styles.toggleBtn} style={{ border:`1px solid ${darkMode ? 'white' : '#111'}`, color: darkMode ? 'white' : '#111' }}>
                    {darkMode ? '☀️ Light' : '🌙 Dark'}</button>

            </div>
        </nav>
    )
}

export default Navbar