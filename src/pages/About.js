import styles from './About.module.css'
import { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { useEffect } from 'react'
import { useState } from 'react'

const skillCards = [
  {
    id: 1,
    title: 'HTML, CSS, JavaScript'
  },

  {
    id: 2,
    title: 'React, React Router'
  },

  {
    id: 3,
    title: 'CSS Modules, useContext, Custom Hooks'
  },

  {
    id: 4,
    title: 'Responsive Design'
  },

  {
    id: 5,
    title: 'Git Basics'
  }
]


function About() {
  const [data, setData] = useState(null)
  
  useEffect(()=>{
    fetch('https://express-my-portfolio-production.up.railway.app/about')
    .then(res => res.json())
    .then(data => setData(data));
    
  }, [])

  
  
  
  
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={`${styles.mainWrapper} ${darkMode ? styles.mainWrapperDark : styles.mainWrapperLight}`}>

      <div>
        <h1 className={`${styles.name} ${darkMode ? styles.nameDark : styles.nameLight}`}>{data ?data.name : '...'}</h1>

        <h2 className={`${styles.heroTitle} ${darkMode ? styles.heroTitleDark : styles.heroTitleLight}`}>Junior Full Stack Developer</h2>
      </div>

      <div className={`${styles.wrapperStory}`}>
        <h2 className={`${styles.storyTitle} ${darkMode ? styles.storyTitleDark : styles.storyTitleLight}`}>My Journey</h2>
        <p className={`${styles.storyDesc} ${darkMode ? styles.storyDescDark : styles.storyDescLight}`}>My passion for computers started early I was always curious about how the web worked behind the scenes. When AI began dominating the conversation around coding, I hesitated. But then it clicked: AI still needs a human to command it, correct it, and understand what it's building. That realization brought me back with more focus than ever. Today I'm driven to master web development fully, not just building for the surface, but understanding the vulnerabilities beneath it.</p>
      </div>

      <div className={`${styles.wrapperSkills}`}>
        <h2 className={`${styles.skillsTitle} ${darkMode ? styles.skillsTitleDark : styles.skillsTitleLight}`}>My Skills</h2>
        {skillCards.map((skill)=> (
          <span className={`${styles.individualBadge}`} key={skill.id}>
              {skill.title}
            </span>
        
      ))}
      </div>

      <div className={`${styles.wrapperGoals}`}>
        <h2 className={`${styles.goalsTitle} ${darkMode ? styles.goalsTitleDark : styles.goalsTitleLight}`}>Where I'm Headed</h2>

        <p className={`${styles.goalsDesc} ${darkMode ? styles.goalsDescDark : styles.goalsDescLight}`}>My goal is to become a Full Stack Developer with a deep understanding of web security. I don't just want to build, I want to build things that are fast, responsive, and secure. Problems don't discourage me, they're the most interesting part of the learning and job.</p>
      </div>

    </div>
  )
}


export default About