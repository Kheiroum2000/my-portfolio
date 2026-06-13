import styles from './Hero.module.css'
import { useContext } from 'react'
import ThemeContext from '../ThemeContext'

function Hero(){

    const { darkMode } = useContext(ThemeContext)

    return(
        <div className={`${styles.wrapper} ${darkMode ? styles.wrapperDark : styles.wrapperLight}`}>

            <h1 className={`${styles.heroTitle} ${darkMode ? styles.heroTitleDark : styles.heroTitleLight}`}>
                Hi! I'm Kheiroum.
            </h1>

            <h2 className={`${styles.heroSubtitle} ${darkMode ? styles.heroSubtitleDark : styles.heroSubtitleLight}`}>
                Your Professional Web Developer
            </h2>

            <button className={styles.btn}>
                Hire me!
            </button>

        </div>
    )
}

export default Hero