import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'
import ThemeContext from "../ThemeContext"
import { useContext } from "react"
import { BsSun, BsMoon } from "react-icons/bs"


function Navbar(){

    const { darkMode, setdarkMode } = useContext(ThemeContext)
    return (
        <nav className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>

            <NavLink to="/" className={`${styles.logo} ${darkMode ? styles.dark : styles.light}`}   
            >Kheiroum DevPortfolio</NavLink>

            <div className={styles.navlinks}>

                <NavLink to="/" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>Home</NavLink>

                <NavLink to="/about" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>About</NavLink>

                <NavLink to="/projects" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>Projects</NavLink>

                <NavLink to="/contact" className={`${styles.link} ${darkMode ? styles.dark : styles.lightText}`}>Contact</NavLink>

            </div>
                <button onClick={() => setdarkMode(!darkMode)} className={`${styles.toggleBtn} ${darkMode ? styles.toggleBtnDark : styles.toggleBtnLight}`} >
                    {darkMode ? <BsSun/> : <BsMoon/>}</button>

        </nav>
    )
}

export default Navbar