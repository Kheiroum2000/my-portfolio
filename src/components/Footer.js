import { useContext } from "react"
import styles from "./Footer.module.css"
import ThemeContext from "../ThemeContext"

function Footer(){

    const { darkMode } = useContext(ThemeContext)
    
    return(
        <div className={`${styles.wrapper} ${darkMode ? styles.wrapperDark : styles.wrapperLight}`}>
            <h2 className={`${styles.desc} ${darkMode ? styles.descDark : styles.descLight}`}>Kheiroum</h2>
        </div>
    )
}

export default Footer