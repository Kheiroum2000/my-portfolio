import styles from './Cards.module.css'
import ThemeContext from '../ThemeContext'
import { useContext } from 'react'

const cardsData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building modern responsive websites',
        icon: '💻',
        level: 'Advance'
    
    },
    {
        id: 2,
        title: 'Ethical Hacking',
        description: 'Security testing and penetration testing',
        icon: '🔐',
        level: 'Advance',
        
    },
    {
        id: 3,
        title: 'Problem Solving',
        description: 'Creative solutions for complex problem',
        icon: '🧠',
        level: 'Advance'
        
    },

]



function Cards(){

    const {darkMode} = useContext(ThemeContext)
    
    return(
        <div className={`${styles.outerWrapper} ${darkMode ? styles.outerWrapperDark : styles.outerWrapperLight}`}>

            {cardsData.map((card) => (
                <div key={card.id}
                className={`${styles.individualCard} ${darkMode ? styles.individualCardDark : styles.individualCardLight
                }`}>
                        <span>{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p className={`${styles.description} ${darkMode ? styles.descriptionDark : styles.descriptionLight}`}>
                        {card.description}
                        </p>
                        <span className={styles.level}> {card.level} </span>  

                    </div>
            ))}

        </div>
    )
}

export default Cards